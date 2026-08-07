/**
 * Imprime los links públicos de cada carta + estado de la parte personal.
 *
 * Uso:
 *   npm run links
 *   BASE_URL=https://carta-digital-ashy.vercel.app npm run links
 *
 * Para personalizar: edita solo `personal` (y nombre/saludo) en src/data/letters.js
 */
import { listShareLinks } from '../src/data/letters.js';

const DEFAULT_BASE = 'https://carta-digital-ashy.vercel.app';
const baseUrl = (process.env.BASE_URL || DEFAULT_BASE).replace(/\/$/, '');

const rows = listShareLinks(baseUrl);
const ready = rows.filter((r) => r.personalReady).length;

console.log(`BASE_URL = ${baseUrl}`);
console.log(`Diseño compartido: PART_1 + PART_2 (igual para las 10)`);
console.log(`Parte personal lista: ${ready}/${rows.length}\n`);
console.log('id\t\tnombre\t\t\tpersonal\tlink');
console.log('-'.repeat(100));

for (const row of rows) {
  const name = row.name.padEnd(20);
  const status = row.personalReady ? 'listo   ' : 'pendiente';
  console.log(`${row.id}\t${name}\t${status}\t${row.url}`);
}

console.log('\nTambién funcionan: ?para=amistad01 … ?para=amistad10');
console.log('Editar personal → src/data/letters.js (bloque personal de cada amistad)');
console.log('Luego: npm run links  |  npx vercel --prod --yes');
