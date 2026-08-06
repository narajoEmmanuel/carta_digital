/**
 * Imprime los links públicos de cada carta.
 *
 * Uso:
 *   npm run links
 *   BASE_URL=https://carta-digital-ashy.vercel.app npm run links
 */
import { listShareLinks } from '../src/data/letters.js';

const DEFAULT_BASE = 'https://carta-digital-ashy.vercel.app';
const baseUrl = (process.env.BASE_URL || DEFAULT_BASE).replace(/\/$/, '');

const rows = listShareLinks(baseUrl);

console.log(`BASE_URL = ${baseUrl}\n`);
console.log('id\t\tnombre\t\t\tslug\t\t\tlink');
console.log('-'.repeat(96));

for (const row of rows) {
  const name = row.name.padEnd(20);
  const slug = row.slug.padEnd(24);
  console.log(`${row.id}\t${name}\t${slug}\t${row.url}`);
}

console.log('\nListos para compartir (copiá el link de la columna derecha).');
console.log('Tras cambiar un nombre en letters.js, volvé a correr: npm run links');
