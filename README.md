# Carta digital

Experiencia web mobile-first (Vite + React): postal + sobre scrapbook, con **10 cartas** personalizadas por amiga.

## Arranque

```bash
npm install
npm run dev
```

En local: `http://localhost:5173/?para=daniela-gomez`

## Links para compartir

Cada carta tiene un **slug** estable a partir del nombre (`Daniela Gómez` → `daniela-gomez`).

| | |
|---|---|
| Patrón | `https://carta-digital.vercel.app/?para=<slug>` |
| Daniela (amistad01) | `https://carta-digital.vercel.app/?para=daniela-gomez` |

```bash
npm run links
```

### Publicar la siguiente amiga

1. En `src/data/letters.js`, editá `amistad02`…`amistad10`: `name`, `envelopeName` (opcional), `greeting` y los párrafos `personal`.
2. El slug se genera solo (`slugifyName`).
3. Commit + push a `main` → Vercel redeploya.
4. Corré `npm run links` y copiá el link de esa persona.

Los ids viejos `?para=amistad01`…`amistad10` siguen resolviendo.

## Deploy (Vercel)

- Hosting principal: Vercel (URL sin usuario de GitHub)
- `vite.config.js` → `base: '/'`
- Push a `main` redeploya automáticamente si el repo está conectado a Vercel

## Estructura

```
src/
  components/   # HomeHub, postal, sobre, carta, abrazo
  data/         # letters.js (10 amigas + getSharePath / listShareLinks)
  lib/          # asset() respeta el base de Vite
  styles/
public/assets/  # imágenes (webp optimizadas)
scripts/        # print-share-links.mjs → npm run links
```
