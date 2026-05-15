import { PNG } from 'pngjs';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public/speaker-logos';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

for (const file of files) {
  const fp = path.join(dir, file);
  const origBuf = fs.readFileSync(fp);

  // Parse PNG to get accurate raw pixels (no color processing)
  const png = PNG.sync.read(origBuf);
  const { width, height, data } = png;

  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const a = data[idx + 3];
      if (a > 128) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const cw = maxX - minX + 1;
  const ch = maxY - minY + 1;
  const origArea = width * height;
  const contentArea = cw * ch;
  const paddingPct = ((1 - contentArea / origArea) * 100).toFixed(0);

  if (cw <= 0 || ch <= 0 || paddingPct <= 5) {
    console.log(`${file.padEnd(25)} ${width}×${height}  SKIP — minimal padding (${paddingPct}%)`);
    continue;
  }

  // Crop using sharp (extract + extend for 4px padding)
  const cropped = sharp(fp).extract({ left: minX, top: minY, width: cw, height: ch });
  const newBuf = await cropped
    .extend({
      top: 4, bottom: 4, left: 4, right: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  fs.writeFileSync(fp, newBuf);
  console.log(`${file.padEnd(25)} ${width}×${height} → ${cw + 8}×${ch + 8}  (saved ${paddingPct}% padding)`);
}

console.log('\nDone.');
