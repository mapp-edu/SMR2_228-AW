---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P1 · Documento HTML5 semántico
pageClass: ejercicios-page
---

# 📋 P1 · Documento HTML5 semántico

<ExportPDF />

## Contexto

Has elegido una entidad ficticia para tu mini sitio. En esta primera práctica crearás su **página de inicio** solo con HTML, sin estilos, cuidando la estructura y la semántica.

## Objetivos

- Analizar la estructura de un documento HTML e identificar sus secciones.
- Utilizar con propiedad las principales etiquetas y atributos.
- Usar herramientas de edición y validación.

## Tareas

### 1. Análisis de una página real (CE b)

1. Elige una web real (la de tu centro, un periódico…) y abre el **Inspector** del navegador.
2. Identifica y captura: el `DOCTYPE`, el `head` con al menos 4 metadatos y su función, y las grandes zonas del `body`. ¿Usa etiquetas semánticas o `div`?
3. Dibuja un **esquema** (árbol) de su estructura.

### 2. Tu página de inicio (CE b, c)

Crea `index.html` con VS Code (usa Emmet) que incluya:

- `head` completo: `charset`, `viewport`, `title`, `description`, `favicon`.
- Estructura semántica: `header` (con logotipo y `h1`), `nav` (menú con 4 enlaces), `main` con **2 `section`** y **2 `article`**, `aside` y `footer`.
- Jerarquía correcta de encabezados (`h1` → `h2` → `h3`).
- Texto con `strong`, `em`, `abbr`, `time`, una cita (`blockquote` + `cite`) y una lista ordenada, otra desordenada y otra de definiciones.
- Una **imagen** con `figure`/`figcaption` y `alt` descriptivo, y un **vídeo** o **audio** nativo.
- Una **tabla** con `caption`, `thead`, `tbody` y al menos una celda combinada.
- Enlaces: relativo, absoluto en nueva pestaña con `rel="noopener"`, ancla interna, `mailto:` y descarga.
- Un **formulario** de contacto con al menos 6 controles distintos (incluidos `email`, `tel`, `date`, `select`, `radio` y `checkbox`), `label` asociados y validación con `required` y `pattern`.

### 3. Validación (CE e)

1. Valida la página en el **validador del W3C** hasta que no tenga errores. Documenta los errores que tuviste y cómo los corregiste.
2. Pasa **WAVE** o el panel de accesibilidad del navegador y corrige lo que detecte.

## Entregable

ZIP con `index.html` y recursos + PDF con el análisis de la página real, una tabla que explique la función de **15 etiquetas y 10 atributos** usados en tu página, y las capturas de validación.

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **b)** Estructura de un documento HTML y sus secciones | No entregado | Faltan secciones (`head` incompleto, sin estructura semántica) o análisis superficial | Análisis de la web real con esquema y página con `head` completo y estructura semántica completa | Además justifica la elección de cada etiqueta estructural y de cada metadato | Además compara de forma razonada la estructura de la web real con la suya y lo presenta con claridad |
| **c)** Funcionalidad de etiquetas y atributos | No entregado | Faltan elementos esenciales o se usan de forma incorrecta (tablas para maquetar, imágenes sin `alt`) | Todos los elementos pedidos, bien usados, con la tabla de 15 etiquetas y 10 atributos | Además explica por qué cada etiqueta es la adecuada (semántica, accesibilidad) | Además el contenido es coherente con la entidad elegida y el código es limpio y comentado |
| **e)** Herramientas de creación de documentos web | No entregado | No valida o quedan errores sin explicar | VS Code con Emmet, validación sin errores y revisión de accesibilidad | Además documenta los errores encontrados y su corrección | Además usa las herramientas con soltura y describe su flujo de trabajo de forma clara |
