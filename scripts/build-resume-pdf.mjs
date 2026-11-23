import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";
import fs from "fs";

const docsFile = "public/documents/my-document-all.pdf";
const outFile = "public/Natinael_Ejeta_Resume_with_Documents.pdf";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
const resume = await page.pdf({ format: "A4", printBackground: true, margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" } });
await browser.close();

const out = await PDFDocument.create();
const r = await PDFDocument.load(resume);
(await out.copyPages(r, r.getPageIndices())).forEach((p) => out.addPage(p));
console.log("resume pages:", r.getPageCount());

if (fs.existsSync(docsFile)) {
  const d = await PDFDocument.load(fs.readFileSync(docsFile), { ignoreEncryption: true });
  (await out.copyPages(d, d.getPageIndices())).forEach((p) => out.addPage(p));
  console.log("document pages:", d.getPageCount());
} else {
  console.log("MISSING", docsFile, "(resume only)");
}

fs.writeFileSync(outFile, await out.save());
console.log("DONE ->", outFile);