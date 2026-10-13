---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P4 · Formulario con validación
pageClass: ejercicios-page
---

# 📋 P4 · Formulario con validación en el cliente

<ExportPDF />

## Contexto

El formulario de contacto de tu mini sitio (RA3.1) recibe muchos mensajes incompletos. Vas a añadirle **validación en el cliente** con mensajes claros y una interfaz que guíe al usuario.

## Objetivos

- Crear y modificar elementos en respuesta a eventos de formulario y de teclado.
- Validar datos combinando HTML5 y JavaScript.
- Reflejar el estado de validación modificando los estilos.

## Tareas

### 1. Formulario: crear y modificar elementos con eventos (CE j)

Amplía el formulario de contacto para que tenga: nombre, correo, teléfono (9 cifras), fecha de cita (no anterior a hoy), motivo (`select`), mensaje (entre 20 y 500 caracteres) y aceptación de la política de privacidad.

1. Añade las reglas **HTML5** adecuadas (`required`, `type`, `pattern`, `min`, `minlength`, `maxlength`) y `novalidate`.
2. Valida con JavaScript usando la API `validity` y, además, **dos reglas propias** (por ejemplo, que el correo no sea de un dominio desechable y que la fecha no caiga en domingo).
3. Valida cada campo al perder el foco (`blur`) y todo el formulario al enviarlo (`submit` + `preventDefault`).
4. Muestra un **contador de caracteres** en el mensaje que se actualiza con el evento `input`.
5. Al enviar correctamente, sustituye el formulario por un **resumen** de los datos introducidos (creado con `createElement`).

### 2. Estilos de validación (CE l)

1. Campos con error: borde y mensaje en rojo **creados y eliminados dinámicamente** junto al campo.
2. Campos correctos: borde verde.
3. El contador de caracteres cambia de color al acercarse al límite.
4. El botón **Enviar** permanece desactivado (`disabled`) hasta que se acepta la política de privacidad.

### 3. Reflexión (CE j)

Responde en el PDF: ¿por qué esta validación **no** es suficiente para proteger el servidor? ¿Qué debería hacer el servidor al recibir los datos?

## Entregable

ZIP con el sitio + PDF con el código comentado, una **tabla de pruebas** (al menos 10 casos: datos válidos e inválidos para cada regla) y capturas.

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **j)** Creación y modificación de elementos (con eventos) | No entregado | Validación parcial, sin `preventDefault`, o los mensajes, el contador o el resumen no se crean ni se actualizan | Reglas HTML5, `validity`, 2 reglas propias, `blur`, `submit`, contador actualizado con `input`, resumen creado con `createElement` y tabla de 10+ pruebas | Además justifica cada regla y explica la necesidad de validar en el servidor | Además la experiencia de usuario es clara y accesible y la tabla de pruebas es rigurosa y bien presentada |
| **l)** Manipulación de estilos | No entregado | Estilos de error que no se quitan o se aplican solo con `style` | Estilos de error y éxito con clases, mensajes dinámicos, contador con color y botón desactivado | Además justifica el uso de clases y la creación/eliminación de los mensajes | Además el diseño de los estados es coherente con el sitio y accesible (no depende solo del color) |
