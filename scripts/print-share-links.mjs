/**
 * Imprime los links públicos de cada carta + estado de la parte personal.
 *
 * Uso:
 *   npm run links
 *   BASE_URL=https://carta-digital-ashy.vercel.app npm run links
 *
 * Para personalizar: edita `personal` (y nombre/saludo) en src/data/letters.js
 */
import { listShareLinks } from '../src/data/letters.js';

const DEFAULT_BASE = 'https://carta-digital-ashy.vercel.app';
const baseUrl = (process.env.BASE_URL || DEFAULT_BASE).replace(/\/$/, '');

const rows = listShareLinks(baseUrl);
const ready = rows.filter((r) => r.personalReady).length;
const specials = rows.filter((r) => r.special);
const friends = rows.filter((r) => !r.special);

console.log(`BASE_URL = ${baseUrl}`);
console.log(`Diseño compartido: PART_1 + PART_2 (+ variantes deep/mentor/plural)`);
console.log(`Parte personal lista: ${ready}/${rows.length}`);
console.log(`Amistad: ${friends.length}  |  Especiales: ${specials.length}\n`);

console.log('── Amistad ──');
console.log('id\t\tnombre\t\t\tpersonal\tlink');
console.log('-'.repeat(100));
for (const row of friends) {
  const name = row.name.padEnd(20);
  const status = row.personalReady ? 'listo   ' : 'pendiente';
  console.log(`${row.id}\t${name}\t${status}\t${row.url}`);
}

console.log('\n── Especiales (más personalización) ──');
console.log('id\t\t\tnombre\t\tvariante\tpersonal\tlink');
console.log('-'.repeat(100));
for (const row of specials) {
  const name = row.name.padEnd(14);
  const variant = String(row.specialVariant || 'deep').padEnd(8);
  const status = row.personalReady ? 'listo   ' : 'pendiente';
  console.log(
    `${row.id}\t${name}\t${variant}\t${status}\t${row.url}`,
  );
}

console.log('\nTambién: ?para=amistad01 … amistad20  |  ?para=nayeli  |  ?para=ale-naranjo  |  ?para=mentora');
console.log('Editar → src/data/letters.js');
console.log('Luego: npm run links  |  npx vercel --prod --yes');
