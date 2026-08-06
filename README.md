# Carta digital

Experiencia web mobile-first (Vite + React): postal + sobre scrapbook, con **10 cartas** personalizadas por amiga.

## Arranque

```bash
npm install
npm run dev
```

Local (con base de Pages): `http://localhost:5173/carta_digital/?para=daniela-gomez`

## Links para compartir

Cada carta tiene un **slug** estable a partir del nombre (`Daniela Gómez` → `daniela-gomez`).

| | |
|---|---|
| Daniela (amistad01) | `https://narajoEmmanuel.github.io/carta_digital/?para=daniela-gomez` |

```bash
npm run links
```

### Publicar la siguiente amiga

1. En `src/data/letters.js`, editá nombre / saludo / párrafos `personal`.
2. Commit + push a `main` → redeploy automático.
3. `npm run links` y copiá el link.

## Deploy

- **GitHub Pages** (activo): workflow `.github/workflows/deploy-pages.yml`, `base: /carta_digital/`
- **Vercel** (opcional, URL sin usuario de GitHub): `vercel.json` listo; `npx vercel --prod` una vez (loguearte) y luego actualizar `DEFAULT_PUBLIC_ORIGIN` en `letters.js`

Las imágenes son **WebP** livianas (~0.5MB el hub completo) para que carguen en el celular.
