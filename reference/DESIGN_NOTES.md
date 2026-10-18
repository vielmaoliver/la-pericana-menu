# Notas de reconstrucción visual

## PDF original

- 7 páginas.
- Formato visual: 1080 x 1920 pt, proporción 9:16.
- Fondo blanco, tinta negra, composición minimalista y mucho espacio negativo.
- Tipografías detectadas en el PDF:
  - `WhiteAngelicaRegular` para títulos manuscritos.
  - `NeulisSans-Light` para textos, platos, precios y alérgenos.

## Web

No se redistribuyen los archivos de esas fuentes incrustadas en el PDF.
Para la primera versión web se utilizan aproximaciones libres:

- `Allura` -> títulos manuscritos.
- `Montserrat 300/400` -> cuerpo del menú.

Si el restaurante facilita licencias/webfonts originales, se pueden sustituir sin cambiar el HTML.

## Principio responsive

La conversión NO usa capturas de las páginas como menú final. Los platos, precios, descripciones y alérgenos son HTML real. Las líneas decorativas se reconstruyen con CSS y el isotipo público se guarda como asset local.

En escritorio se conserva la sensación de página vertical; en móvil el contenido puede crecer en altura para evitar textos deformados o ilegibles.
