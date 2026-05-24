import { mkdir, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const iconsDir = join(root, 'public', 'icons');
mkdir(iconsDir, { recursive: true }, () => {});

const favicon = readFileSync(join(root, 'public', 'favicon.svg'));
const maskable = readFileSync(join(root, 'public', 'icons', 'icon-maskable.svg'));

const sizes = [
  { name: 'icon-192.png', size: 192, source: favicon },
  { name: 'icon-512.png', size: 512, source: favicon },
  { name: 'icon-maskable-512.png', size: 512, source: maskable },
];

for (const { name, size, source } of sizes) {
  await sharp(source).resize(size, size).png().toFile(join(iconsDir, name));
}
