# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Viajero urbano que va al sur: personas de Santiago u otras ciudades que viajan a la Patagonia, Chiloé o Aysén y buscan ropa de abrigo con identidad local, que sirva de verdad contra la lluvia, el viento y el frío. Llegan a la landing para entender qué es la marca, elegir una prenda y saber si aguanta el lugar al que van.

## Product Purpose

Pieza de portfolio y práctica de diseño y desarrollo. AUSTRAL es una marca inventada, pero se presenta como una tienda creíble de ropa de abrigo del sur de Chile, de tiradas cortas. El éxito es que la landing se sienta como el sitio de una marca real y demuestre criterio editorial, sistema de diseño y ejecución técnica.

## Positioning

Prendas hechas en tiradas cortas en talleres del sur y nombradas por los lugares para los que se construyen (Aysén, Chiloé, Cochamó, Tortel). Cada pieza se vincula a un territorio y a un clima concretos: «probado en terreno».

## Operating Context

Landing de una sola página: qué es la marca, por qué existe, qué se puede comprar, cuál es la pieza estrella, dónde se usa, cómo se hace y cómo contactar. El visitante filtra la tienda por categoría (URL compartible `?cat=<slug>#tienda`) y añade prendas a una bolsa.

## Capabilities and Constraints

- Sitio estático (Astro 7, Tailwind 4) desplegado en Vercel; sin backend.
- La bolsa es solo un contador en `localStorage`; no hay página de producto ni checkout (sin diseñar).
- Precios en pesos chilenos. Copy en español de Chile.
- Correo (`hola@austral…`) y redes del footer son placeholders.

## Brand Commitments

- Nombre AUSTRAL y la convención de nombrar cada prenda por un lugar del sur.
- Los datos de marca son canon fijo: 120 piezas por tirada, 4 talleres en Los Lagos, 5 inviernos de garantía, el catálogo y precios de `src/data/products.ts`, y las rutas (Torres del Paine, Costa de Chiloé, Bosque de Cochamó). No se cambian sin pedirlo.
- Referencias declaradas: OUTFIT® by ++hellohello y la plantilla Graft de Stacy More; no se reutilizan textos, fotos ni marcas de ninguna.

## Evidence on Hand

- Fotografías Unsplash con crédito en `src/assets/photos/`, `src/data/photos.ts` y `README.md`.
- Catálogo y pieza destacada en `src/data/products.ts`.
- No existen testimonios, prensa, clientes ni reseñas: no se inventan.

## Product Principles

1. Credibilidad de marca real: cada detalle debe sostener que AUSTRAL podría existir.
2. El territorio manda: lugar, clima y uso explican cada prenda.
3. Datos de marca fijos; nada nuevo se fabrica para persuadir.
4. Portfolio honesto: la ejecución técnica (accesibilidad, rendimiento, movimiento) es parte de lo que se demuestra.

## Accessibility & Inclusion

Respeta `prefers-reduced-motion`; contraste alto (tinta sobre hueso); navegación por teclado completa.
