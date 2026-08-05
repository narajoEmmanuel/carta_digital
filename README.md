# Carta digital

Experiencia web mobile-first (Vite + React) para una carta digital íntima: postal editorial y sobre scrapbook, independientes.

## Arranque

```bash
npm install
npm run dev
```

## Estructura

```
src/
  components/   # HomeHub, postal, sobre, carta, abrazo
  data/         # letters.js (datos de Andrea)
  styles/       # CSS modules + global.css
public/
  assets/       # Imágenes (placeholder Costa Rica incluido)
```

## Flujo

Estado local en `App.jsx`: `home` → `postcard` | `envelope` → `hug`

## Personalizar

Editá `src/data/letters.js` y reemplazá `/public/assets/costa-rica-placeholder.svg` por una foto real.
