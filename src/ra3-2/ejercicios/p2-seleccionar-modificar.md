---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P2 · Seleccionar y modificar
pageClass: ejercicios-page
---

# 📋 P2 · Seleccionar y modificar elementos

<ExportPDF />

## Contexto

La entidad de tu mini sitio quiere que la página de inicio muestre información que cambie sola: un saludo según la hora, el año actual en el pie y un catálogo que se genere desde una lista de datos.

## Objetivos

- Identificar y clasificar los lenguajes de script de cliente, sus versiones y estándares.
- Utilizar la sintaxis básica de JavaScript.
- Seleccionar y acceder a elementos del DOM.
- Modificar contenido y atributos.

## Tareas

### 1. Lenguajes de script de cliente (CE g)

1. Elabora una tabla que clasifique al menos **seis** lenguajes o tecnologías de script de cliente (actuales y desaparecidos): cómo se ejecutan en el navegador, quién los creó o los mantiene y si siguen vigentes.
2. Haz una línea del tiempo de las versiones de **ECMAScript** desde ES1 hasta la actual, indicando dos novedades de ES5, de ES6 y de alguna edición posterior.
3. Explica qué organismo define ECMAScript, el DOM y las APIs web, y comprueba en *Can I use* la compatibilidad de dos funciones modernas que uses en esta práctica.

### 2. Sintaxis básica (CE h)

En un fichero `js/basico.js`, enlazado con `defer`, y mostrando los resultados con `console.log`:

1. Declara constantes y variables de los cinco tipos primitivos y un objeto con los datos de la entidad.
2. Escribe una función que reciba un precio y un porcentaje y devuelva el precio con descuento.
3. Recorre un array de 5 productos (objetos con nombre, precio y categoría) con `for…of` y muestra los de más de 20 €. Repite con `filter`.
4. Explica en el PDF qué diferencia hay entre script de cliente y de servidor, y por qué usas `const`, `let` y `===`.

### 3. Selección de elementos (CE i)

En `js/app.js`, selecciona y muestra en consola:

1. El `h1` por su id, con `getElementById` y con `querySelector`.
2. Todos los enlaces del `nav` y cuántos hay.
3. Todos los `article` y el título (`h2`) de cada uno.
4. El último elemento de una lista usando la navegación por el árbol.
5. El antepasado `section` más cercano de un elemento con `closest`.

Incluye un **esquema del árbol DOM** de tu página (al menos 3 niveles).

### 4. Modificación (CE j)

1. **Saludo dinámico:** según la hora (`new Date().getHours()`), cambia el texto de un párrafo de la cabecera: "Buenos días", "Buenas tardes" o "Buenas noches".
2. **Año automático:** el pie debe mostrar `© <año actual> <nombre de la entidad>`.
3. **Atributos:** cambia el `src` y el `alt` del logotipo si es fin de semana; añade `target="_blank"` y `rel="noopener"` a todos los enlaces externos (los que empiezan por `http`).
4. **Catálogo:** genera dentro de un `section#catalogo` una tarjeta (`article`) por cada producto del array de la tarea 2, con nombre, categoría y precio, usando `createElement` y `append`.

## Entregable

ZIP con el sitio + PDF con las explicaciones, el esquema del DOM y capturas de la página y la consola.

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **g)** Lenguajes de script de cliente, versiones y estándares | No entregado | Clasificación incompleta o con errores, sin versiones | Tabla de seis lenguajes, línea del tiempo de ECMAScript, organismos y comprobación de compatibilidad | Además explica por qué desaparecieron los lenguajes basados en *plugins* y por qué JavaScript es el estándar | Además las fuentes están citadas y la información está bien organizada y actualizada |
| **h)** Sintaxis básica | No entregado | Código con errores o sin explicaciones | Variables, tipos, función, bucles y `filter` funcionando, con la diferencia cliente/servidor explicada | Además justifica las decisiones (`const`/`let`, `===`, `defer`) | Además el código es limpio, comentado y aplicado a la entidad elegida |
| **i)** Selección y acceso a elementos | No entregado | Faltan selecciones o fallan (errores `null`) | Las 5 selecciones funcionando y esquema del DOM | Además justifica qué método usa en cada caso | Además el esquema del DOM está bien presentado y coincide con el Inspector |
| **j)** Creación y modificación de elementos | No entregado | Faltan modificaciones o el catálogo no se genera | Saludo, año, atributos y catálogo funcionando | Además justifica `textContent` frente a `innerHTML` y el uso de atributos | Además el resultado se integra visualmente en el sitio y el código es reutilizable |
