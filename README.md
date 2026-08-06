# Carta digital

Experiencia web mobile-first (Vite + React): postal + sobre scrapbook, con **10 cartas** personalizadas por amiga.

## Arranque

```bash
npm install
npm run dev
```

En local la app vive en `/carta_digital/` (mismo `base` que GitHub Pages). Abrí por ejemplo:

`http://localhost:5173/carta_digital/?para=daniela-gomez`

## Links para compartir

Cada carta tiene un **slug** estable a partir del nombre (`Daniela Gómez` → `daniela-gomez`).

| | |
|---|---|
| Patrón | `https://narajoEmmanuel.github.io/carta_digital/?para=<slug>` |
| Daniela (amistad01) | `https://narajoEmmanuel.github.io/carta_digital/?para=daniela-gomez` |

Listá las 10 URLs cuando quieras:

```bash
npm run links
# o con otro host:
# BASE_URL=https://tu-dominio.com npm run links
```

### Publicar la siguiente amiga

1. En `src/data/letters.js`, editá `amistad02`…`amistad10`: `name`, `envelopeName` (opcional), `greeting` y los párrafos `personal`.
2. El slug se genera solo (`slugifyName`).
3. Commit + push a `main` → GitHub Actions redeploya Pages.
4. Corré `npm run links` y copiá el link de esa persona.

Los ids viejos `?para=amistad01`…`amistad10` siguen resolviendo.

## Deploy (GitHub Pages)

- Repo: `narajoEmmanuel/carta_digital`
- `vite.config.js` → `base: '/carta_digital/'`
- Workflow: `.github/workflows/deploy-pages.yml` (build + deploy en cada push a `main`)
- URL del sitio: `https://narajoEmmanuel.github.io/carta_digital/`

> Si el repo es **privado**, GitHub Pages en plan Free puede no activarse. Para compartir links públicos hace falta Pages habilitado (repo público, o plan que permita Pages en privados).

## Estructura

```
src/
  components/   # HomeHub, postal, sobre, carta, abrazo
  data/         # letters.js (10 amigas + getSharePath / listShareLinks)
  lib/          # asset() respeta el base de Vite
  styles/
public/assets/  # imágenes
scripts/        # print-share-links.mjs → npm run links
```
