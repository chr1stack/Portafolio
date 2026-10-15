#!/usr/bin/env node
/**
 * Toma una captura de pantalla de una URL y la guarda como WebP.
 * Uso: node scripts/screenshot.mjs <url> <nombre>
 * Ejemplo: node scripts/screenshot.mjs https://c3academy.cl c3academy
 * Salida: public/projects/<nombre>.webp
 */

import { chromium } from "playwright";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const [, , url, name] = process.argv;

if (!url || !name) {
  console.error("Uso: node scripts/screenshot.mjs <url> <nombre>");
  process.exit(1);
}

const outDir = path.join(ROOT, "public", "projects");
fs.mkdirSync(outDir, { recursive: true });

const tmpPng = path.join(outDir, `${name}.tmp.png`);
const outWebp = path.join(outDir, `${name}.webp`);

console.log(`Capturando ${url} …`);

const browser = await chromium.launch({
  executablePath:
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ??
    "C:\\Users\\chris\\AppData\\Local\\ms-playwright\\chromium-1248\\chrome-win64\\chrome.exe",
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);

await page.screenshot({ path: tmpPng, fullPage: false });
await browser.close();

await sharp(tmpPng)
  .webp({ quality: 80 })
  .toFile(outWebp);

fs.unlinkSync(tmpPng);

console.log(`Guardado en: public/projects/${name}.webp`);
