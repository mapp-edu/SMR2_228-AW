---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P3 · Mini sitio y comparativa
pageClass: ejercicios-page
---

# 📋 P3 · Mini sitio web y comparativa de lenguajes

<ExportPDF />

## Contexto

Con la plantilla de la P2 completarás el **sitio web de la entidad** y prepararás un breve informe técnico para que la persona que lo mantenga entienda con qué tecnologías está hecho.

## Objetivos

- Identificar y clasificar los lenguajes de marcas de la web y sus versiones.
- Establecer semejanzas y diferencias entre HTML y HTML5.
- Aplicar la plantilla y la hoja de estilo a un sitio completo.

## Tareas

### 1. Sitio completo (CE g, e)

1. A partir de la plantilla, crea **4 páginas** enlazadas entre sí (inicio, servicios o productos, galería, contacto), todas con la misma hoja de estilo.
2. Añade un fichero **`sitemap.xml`** y un **feed RSS** (`noticias.xml`) con 3 noticias de la entidad, y enlázalo en el `head` (`<link rel="alternate" type="application/rss+xml">`).
3. Incluye el logotipo en **SVG**.
4. Publica el sitio (GitHub Pages, Netlify o el servidor de la P2 del RA5) y valida las cuatro páginas.

### 2. Lenguajes de marcas de tu sitio (CE a)

Elabora una tabla con **todos los lenguajes** que has usado o que intervienen en tu sitio (HTML, CSS, XML, RSS, SVG, Markdown si lo usas, JavaScript…). Para cada uno indica: tipo (marcas descriptivo, de presentación, hoja de estilo, datos, programación), organismo que lo define, versión y para qué lo usas.

### 3. HTML frente a HTML5 (CE d)

1. Busca en [web.archive.org](https://web.archive.org/) una página antigua (antes de 2008) de una web conocida y analiza su código: DOCTYPE, etiquetas de presentación, *frames*, tablas para maquetar, plugins.
2. Reescribe un fragmento significativo de esa página en **HTML5 semántico + CSS**.
3. Redacta una tabla de **semejanzas y diferencias** (mínimo 8 filas) entre la versión antigua y la tuya.

## Entregable

ZIP del sitio (o enlace publicado) + PDF con las tablas de las tareas 2 y 3, el código antiguo y el reescrito comentados y las capturas de validación.

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **a)** Lenguajes de marcas de la web y versiones | No entregado | Tabla incompleta o con clasificaciones erróneas | Tabla completa y correcta con tipo, organismo, versión y uso; `sitemap.xml`, RSS y SVG funcionando | Además justifica la clasificación de cada lenguaje | Además relaciona los lenguajes entre sí en el contexto de su sitio con un esquema claro |
| **d)** Semejanzas y diferencias entre HTML y HTML5 | No entregado | Análisis superficial o reescritura incorrecta | Análisis de la página antigua, reescritura en HTML5 y tabla de 8+ diferencias y semejanzas | Además explica qué ventajas aporta cada cambio | Además la comparativa es rigurosa y está bien presentada (código antiguo y nuevo enfrentados) |
| **g)** Aplicación de hojas de estilo CSS | No entregado | Páginas con estilos distintos o rotos | 4 páginas con la misma hoja de estilo, adaptables y validadas | Además justifica la organización del CSS para todo el sitio | Además el sitio es coherente, accesible y está publicado |
| **e)** Herramientas de creación de documentos web | No entregado | Sin validar o sin publicar | Validación de las 4 páginas y publicación | Además documenta el proceso de publicación | Además el flujo de trabajo (edición, validación, publicación) está bien explicado |
