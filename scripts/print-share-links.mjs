/**
 * Imprime los links públicos de cada carta + estado de la parte personal.
 *
 * Uso:
 *   npm run links
 *   BASE_URL=https://carta-digital-ashy.vercel.app npm run links
 *
 * Cada URL usa el slug del nombre (único). No compartir sin ?para=...
 */
import { listShareLinks } from '../src/data/letters.js';

const DEFAULT_BASE = 'https://carta-digital-ashy.vercel.app';
const baseUrl = (process.env.BASE_URL || DEFAULT_BASE).replace(/\/$/, '');

const rows = listShareLinks(baseUrl);
const ready = rows.filter((r) => r.personalReady);
const specials = rows.filter((r) => r.special);
const friends = rows.filter((r) => !r.special);

console.log(`BASE_URL = ${baseUrl}`);
console.log(`Cada link = una sola persona (slug único en ?para=)`);
console.log(`Parte personal lista: ${ready.length}/${rows.length}`);
console.log(`Amistad: ${friends.length}  |  Especiales: ${specials.length}\n`);

console.log('── Listos para compartir ──');
console.log('nombre\t\t\tslug\t\t\tlink');
console.log('-'.repeat(100));
for (const row of ready) {
  const name = String(row.envelopeName || row.name).padEnd(20);
  const slug = row.slug.padEnd(22);
  console.log(`${name}\t${slug}\t${row.url}`);
}

console.log('\n── Pendientes ──');
for (const row of rows.filter((r) => !r.personalReady)) {
  const kind = row.special ? 'especial' : 'amistad';
  console.log(
    `${row.id}\t${String(row.name).padEnd(18)}\t[${kind}/${row.specialVariant || 'std'}]\t${row.url}`,
  );
}

console.log('\nUsa siempre el link con ?para=<slug del nombre>.');
console.log('Sin ?para= la app no abre otra carta por defecto.');
console.log('Editar → src/data/letters.js  |  npm run links');
