# Diseños del portafolio

Cuatro direcciones visuales sobre el mismo contenido, los mismos datos y el mismo i18n. Cada una vive en su propia rama y su propio worktree para poder compararlas sin mezclarlas.

| # | Rama | Concepto | Paleta | Tipografía | Interacción clave |
|---|------|----------|--------|-------------|-------------------|
| 1 | `color-hueso-design` | Dossier técnico | Papel hueso, tinta negra, rojo óxido | Syne / Archivo / IBM Plex Mono | Marquesina de stack e índice numérico |
| 2 | `terminal-de-papel` | Consola impresa | Crema, verde fósforo | IBM Plex Mono | Paleta de comandos con `Ctrl/Cmd + K` |
| 3 | `editorial-brutalista` | Revista de diseño | Blanco cálido, bermellón | Instrument Serif / Archivo / IBM Plex Mono | Capitulares, doble regla, índice técnico |
| 4 | `senaletica-industrial` | Manual de máquina | Hormigón, negro, naranja de seguridad | Big Shoulders Stencil / Barlow Condensed / IBM Plex Mono | Franjas de peligro y hojas de equipo |

## Movimiento

Cada opción tiene un sistema propio, no un fade genérico:

| Rama | Entrada | Scroll | Micro-interacción |
|------|---------|--------|-------------------|
| Color hueso | máscaras de línea en el nombre | reveals escalonados, fichas y filas | subrayado que se dibuja, flechas que bajan, imagen con zoom |
| Terminal | tipeo real de comandos y cursor | salida por líneas, progreso ASCII en la barra | paleta animada, scanline CRT de entrada |
| Editorial | máscaras serif y regla bermellón | palabras que suben, telón de imagen, progreso de lectura | numerales que se desplazan, flechas |
| Señalética | placas que se imprimen de izquierda a derecha | sellos con resorte, contadores, cinta de progreso | botones que invierten, obturador de imagen |

Todo respeta `prefers-reduced-motion`: con movimiento reducido, el contenido aparece en su estado final sin animaciones de transformación.

## Capturas

### 01 — Color hueso

![Color hueso](designs/01-color-hueso.png)

### 02 — Terminal de papel

![Terminal de papel](designs/02-terminal-de-papel.png)

### 03 — Editorial brutalista

![Editorial brutalista](designs/03-editorial-brutalista.png)

### 04 — Señalética industrial

![Señalética industrial](designs/04-senaletica-industrial.png)

## Cómo verlas

Cada worktree ya tiene su rama activa:

```text
witty-lagoon           -> color-hueso-design
terminal-de-papel      -> terminal-de-papel
editorial-brutalista   -> editorial-brutalista
senaletica-industrial  -> senaletica-industrial
```

Para levantar una:

```bash
git switch <rama>
npm install
npm run dev
```

Durante la sesión de comparación quedaron levantadas en:

- `http://localhost:5183` — Color hueso
- `http://localhost:5184` — Terminal de papel
- `http://localhost:5185` — Editorial brutalista
- `http://localhost:5186` — Señalética industrial

## Notas

- Las cuatro comparten `src/i18n`, `src/data` y los assets de `public/` (salvo tipografías, favicon y paleta).
- Vekt y Asistencia figuran sin capturas por pedido: solo Palmares usa imagen real del sitio desplegado.
- Cada rama pasa `npm run build` y tiene su propio favicon y `theme-color`.
- La rama `color-hueso-design` conserva además este documento y las capturas de comparación.
