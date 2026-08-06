import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const root = path.resolve('public/assets');
const skip = new Set(['cara.png']);
const MAX_EDGE = 1200;
const HIGH_Q = [/fondo_/, /postal_/, /sobre_/, /muneco_/, /invitacion_/, /hoja_/];

async function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...await walk(p));
    else if (/\.png$/i.test(ent.name) && !skip.has(ent.name)) out.push(p);
  }
  return out;
}

const files = await walk(root);
for (const file of files) {
  const before = fs.statSync(file).size;
  const meta = await sharp(file).metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;
  const base = path.basename(file);
  const hi = HIGH_Q.some((re) => re.test(base));
  let pipeline = sharp(file).rotate();
  if (Math.max(w, h) > MAX_EDGE) {
    pipeline = pipeline.resize({
      width: w >= h ? MAX_EDGE : undefined,
      height: h > w ? MAX_EDGE : undefined,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }
  const webpPath = file.replace(/\.png$/i, '.webp');
  const buf = await pipeline
    .webp({ quality: hi ? 82 : 85, alphaQuality: 95, effort: 6 })
    .toBuffer();
  fs.writeFileSync(webpPath, buf);
  fs.unlinkSync(file);
  const m2 = await sharp(webpPath).metadata();
  console.log(`${path.relative(root, file)} ${m2.width}x${m2.height} ${(before/1e6).toFixed(2)}->${(buf.length/1e6).toFixed(2)}MB`);
}
