---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P2 · Hoja de estilo y plantilla
pageClass: ejercicios-page
---

# 📋 P2 · Hoja de estilo y plantilla

<ExportPDF />

## Contexto

Tu página de inicio (P1) ya tiene una buena estructura. Ahora le darás una **imagen propia** con CSS y la convertirás en una **plantilla** reutilizable para todo el sitio.

## Objetivos

- Identificar las ventajas de usar hojas de estilo.
- Aplicar CSS: selectores, modelo de caja, Flexbox, Grid y diseño adaptable.
- Elaborar una plantilla con herramientas de edición web.

## Tareas

### 1. Ventajas de CSS (CE f)

1. Copia tu `index.html` como `sin-css.html` y aplícale estilos **solo con atributos y estilos en línea** (color de fondo, color del título, alineación…) en tres elementos.
2. Haz lo mismo con una **hoja de estilo externa**.
3. Compara ambas versiones: cuántas líneas cambiarías para modificar el color principal en un sitio de 20 páginas, tamaño de los ficheros, mantenimiento, accesibilidad. Redacta una conclusión con **al menos 5 ventajas** de CSS.

### 2. Hoja de estilo (CE g)

Crea `css/estilos.css` que incluya:

- Variables en `:root` para la **paleta** (mínimo 4 colores) y la tipografía (una fuente web).
- `box-sizing: border-box` global.
- Selectores de **al menos 6 tipos** distintos (etiqueta, clase, id, descendiente, atributo, pseudoclase y pseudoelemento).
- Estilos para tipografía, enlaces (con `:hover` y `:focus`), tabla (filas alternas) y formulario.
- **Modelo de caja** aplicado a tarjetas (`article`) con `padding`, `border`, `border-radius`, `box-shadow`.
- **Menú horizontal con Flexbox**.
- **Maquetación general con Grid** (`grid-template-areas`).
- **Diseño adaptable**: una columna en móvil y dos a partir de 768 px; estilos de impresión.
- Una **transición** o animación.

### 3. Plantilla (CE e)

1. Separa la plantilla: deja en un fichero `plantilla.html` la estructura común con comentarios que indiquen dónde va el contenido variable.
2. Comprueba el diseño con el **modo adaptable** del navegador en tres tamaños (móvil, tableta, escritorio).
3. Valida el CSS en el **validador del W3C** y comprueba el **contraste** de tus colores.

## Entregable

ZIP con el sitio + PDF con la comparativa de la tarea 1, explicación comentada de la hoja de estilo, capturas en tres tamaños y capturas de validación.

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **f)** Ventajas de las hojas de estilo | No entregado | Ventajas enumeradas sin comparar o menos de 5 | Comparativa en línea / externa realizada y 5+ ventajas identificadas | Además argumenta cada ventaja con datos de su propia comparativa | Además relaciona las ventajas con el mantenimiento real de un sitio (temas de un CMS) y lo comunica con claridad |
| **g)** Aplicación de hojas de estilo CSS | No entregado | Faltan elementos esenciales (sin Grid/Flexbox o sin diseño adaptable) o el diseño no funciona | Todos los elementos pedidos funcionando en los tres tamaños | Además explica las decisiones de diseño (paleta, tipografía, puntos de ruptura) y la cascada | Además el diseño es coherente, accesible (contraste) y el CSS está ordenado y comentado |
| **e)** Herramientas de creación de documentos web | No entregado | No valida o no prueba en distintos tamaños | Plantilla, pruebas en tres tamaños, validación y contraste | Además documenta los problemas encontrados con las DevTools y cómo los resolvió | Además la plantilla es realmente reutilizable y su uso está bien explicado |
