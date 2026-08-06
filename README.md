# Carta digital

Experiencia web mobile-first (Vite + React): postal + sobre scrapbook, con **10 cartas** personalizadas por amiga.

## Arranque

```bash
npm install
npm run dev
```

Local: `http://localhost:5173/?para=daniela-gomez`

## Links para compartir

Cada carta tiene un **slug** estable a partir del nombre (`Daniela Gómez` → `daniela-gomez`).

| | |
|---|---|
| Daniela (amistad01) | `https://carta-digital-ashy.vercel.app/?para=daniela-gomez` |

```bash
npm run links
```

### Publicar la siguiente amiga

1. En `src/data/letters.js`, editá nombre / saludo / párrafos `personal`.
2. Publicá en Vercel (ver abajo) y corré `npm run links` para copiar el link.

## Deploy

Solo **Vercel** (sin GitHub Pages):

```bash
npm run build
npx vercel build --prod --yes
npx vercel deploy --prebuilt --prod --yes
```

URL: `https://carta-digital-ashy.vercel.app`

Las imágenes son **WebP** livianas para que carguen en el celular.
