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
2. Commit + push a `main` → redeploy automático en Vercel.
3. `npm run links` y copiá el link.

## Deploy

- **Vercel** (producción): proyecto `carta-digital` → `https://carta-digital-ashy.vercel.app`
- GitHub Pages quedó de respaldo; la URL pública canónica es Vercel (sin usuario de GitHub).

Las imágenes son **WebP** livianas (~1.7MB total) para que carguen en el celular.
