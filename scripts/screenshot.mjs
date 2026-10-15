#!/usr/bin/env node
/**
 * Toma una captura de pantalla de una URL y la guarda como WebP.
 * Uso: node scripts/screenshot.mjs <url> <nombre> [opciones]
 *
 * Opciones:
 *   --width  <px>    ancho del viewport (default: 1440)
 *   --height <px>    alto del viewport  (default: 900)
 *   --scale  <n>     deviceScaleFactor  (default: 2)
 *   --wait   <ms>    espera adicional tras networkidle (default: 1500)
 *   --hide             <sels>  selectores CSS separados por coma → display:none
 *   --dismiss-cookies         intenta hacer click en "Aceptar/Accept/Allow"
 *   --hide-fixed              oculta elementos position:fixed que NO sean nav (top > 100px)
 *
 * Ejemplos:
 *   node scripts/screenshot.mjs https://c3academy.cl c3academy
 *   node scripts/screenshot.mjs https://ejemplo.cl ejemplo \
 *     --width 1280 --height 1100 --scale 2 --wait 2000 \
 *     --hide "[class*='whatsapp'],[class*='cookie']"
 */

import { chromium } from "playwright";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const rawArgs = process.argv.slice(2);
const url = rawArgs[0];
const name = rawArgs[1];

if (!url || !name) {
  console.error(
    "Uso: node scripts/screenshot.mjs <url> <nombre> [--width W] [--height H] [--scale S] [--wait MS] [--hide sels]"
  );
  process.exit(1);
}

function flag(key, def) {
  const i = rawArgs.indexOf(key);
  return i !== -1 ? rawArgs[i + 1] : def;
}

const width = parseInt(flag("--width", "1440"), 10);
const height = parseInt(flag("--height", "900"), 10);
const scale = parseFloat(flag("--scale", "2"));
const wait = parseInt(flag("--wait", "1500"), 10);
const hideSels = flag("--hide", null);
const dismissCookies = rawArgs.includes("--dismiss-cookies");

const outDir = path.join(ROOT, "public", "projects");
fs.mkdirSync(outDir, { recursive: true });

const tmpPng = path.join(outDir, `${name}.tmp.png`);
const outWebp = path.join(outDir, `${name}.webp`);

console.log(`Capturando ${url} (${width}×${height} @${scale}x, +${wait}ms) …`);

const browser = await chromium.launch({
  executablePath:
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ??
    "C:\\Users\\chris\\AppData\\Local\\ms-playwright\\chromium-1248\\chrome-win64\\chrome.exe",
});

const context = await browser.newContext({
  viewport: { width, height },
  deviceScaleFactor: scale,
});
const page = await context.newPage();

await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(wait);

if (dismissCookies) {
  try {
    await page.evaluate(() => {
      const pattern = /aceptar|accept|allow|permitir|agree|entendido|ok\b/i;
      for (const el of document.querySelectorAll(
        'button, [role="button"], a[class*="accept"], a[class*="cookie"]'
      )) {
        if (pattern.test(el.textContent || "")) {
          el.click();
          return;
        }
      }
    });
    await page.waitForTimeout(600);
    console.log("Cookie banner descartado.");
  } catch {
    // silencioso si no hay banner
  }
}

if (rawArgs.includes("--hide-fixed")) {
  try {
    await page.evaluate(() => {
      for (const el of document.querySelectorAll("*")) {
        const s = window.getComputedStyle(el);
        if (s.position === "fixed" || s.position === "sticky") {
          const rect = el.getBoundingClientRect();
          if (rect.top > 100) {
            el.style.setProperty("display", "none", "important");
          }
        }
      }
    });
    await page.waitForTimeout(300);
    console.log("Widgets fijos (no nav) ocultados.");
  } catch {
    // silencioso
  }
}

if (hideSels) {
  const sels = hideSels
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const css = sels.map((s) => `${s}{display:none!important}`).join("\n");
  try {
    await page.addStyleTag({ content: css });
    await page.waitForTimeout(300);
    console.log(`Ocultos: ${sels.join(", ")}`);
  } catch {
    // si la página navegó o el selector falla, continuar igual
  }
}

await page.screenshot({ path: tmpPng, fullPage: false });
await browser.close();

await sharp(tmpPng).webp({ quality: 80 }).toFile(outWebp);
fs.unlinkSync(tmpPng);

console.log(`Guardado en: public/projects/${name}.webp`);
