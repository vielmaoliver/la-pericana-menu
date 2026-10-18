# La Pericana - Menu responsive

Conversión del PDF `Menu2025-Cuina.pdf` a una web responsive con Bootstrap 5.

## Objetivo

- Mantener la identidad visual minimalista del menú original.
- Reproducir títulos manuscritos, composición, líneas decorativas, alérgenos y precios.
- Adaptar el diseño a escritorio, tablet y móvil sin convertir cada página en una imagen.
- Dejar el proyecto listo para versionar en Git y publicar más adelante con GitHub Pages.

## Estructura

```text
la-pericana-menu/
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  ├─ img/
│  │  └─ logo-pericana-linea.png
│  └─ js/
│     └─ app.js
└─ reference/
```

## Vista local

Desde PowerShell:

```powershell
cd C:\Users\newpc\Documents\la-pericana-menu
python -m http.server 8080
```

Abrir después:

```text
http://127.0.0.1:8080/
```

## Publicación futura en GitHub Pages

El proyecto utiliza rutas relativas (`assets/...`) y por ello está preparado para funcionar desde un repositorio de GitHub Pages sin depender de rutas locales de Windows.

## Fuente

Diseño y contenido basados en la carta PDF 2025 de La Pericana y en la identidad pública del restaurante.
