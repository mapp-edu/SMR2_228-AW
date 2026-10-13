---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P2 · Aspecto, cursos y perfiles
pageClass: ejercicios-page
---

# 📋 P2 · Aspecto, cursos y perfiles

<ExportPDF />

## Contexto

La academia quiere que el campus tenga **su imagen corporativa**, una organización clara de cursos y que recoja información específica de su alumnado. También necesita un rol especial para los **tutores de prácticas en empresa**.

## Objetivos

- Modificar la estética y el aspecto del sitio.
- Crear categorías, cursos, usuarios y grupos.
- Manipular y generar perfiles personalizados (campos de perfil y roles).

## Tareas

### 1. Aspecto del sitio (CE b)

1. Define una **identidad visual** para la academia: nombre, logotipo, color de marca y tipografía (puedes generar el logo con cualquier herramienta).
2. Aplícala en Moodle: logos, favicon, color de marca de Boost, imagen de la página de acceso y **al menos 3 reglas SCSS** propias.
3. Configura la página principal (anuncios, lista de categorías) y los **bloques** por defecto del área personal.
4. Instala los paquetes de idioma `es` y `ca_valencia` y personaliza un texto con **Personalización del idioma**.
5. Instala un **tema alternativo** y compáralo con Boost. Justifica cuál dejas.

### 2. Cursos y usuarios

1. Crea la estructura de categorías (mínimo dos niveles) y **3 cursos**, uno de ellos mediante **CSV**.
2. Da de alta **10 usuarios con un CSV** asignándolos a una **cohorte**.
3. Matricula la cohorte en un curso, crea **dos grupos** y configura un modo de grupo.
4. Activa un método de **autoinscripción con clave** en otro curso.

### 3. Perfiles personalizados (CE c)

1. Crea una categoría de campos de perfil **"Datos de la academia"** con al menos **3 campos** de tipos distintos (menú, casilla, texto). Decide cuáles son obligatorios, bloqueados y visibles.
2. Rellena esos campos para los usuarios con un CSV (`profile_field_…`).
3. Crea el rol **"Tutor/a de empresa"** a partir de un arquetipo: puede ver las entregas y calificaciones de su grupo y escribir en un foro, pero no editar el curso. Documenta las capacidades modificadas.
4. Asígnalo a un usuario en un curso y demuestra sus permisos con **Comprobar permisos** y con **Cambiar rol a…** o iniciando sesión con él.

## Entregable

Documento PDF con capturas "antes / después", ficheros CSV utilizados y justificación de las decisiones.

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **b)** Modificaciones en la estética o aspecto del sitio | No entregado | Cambios mínimos (solo un color o un logo) o que empeoran la legibilidad | Logos, color, SCSS, página principal, bloques, idiomas y comparativa de temas completos | Además justifica cada decisión (identidad, contraste, accesibilidad, mantenimiento del tema) | Además la identidad es coherente en todo el sitio y se presenta con un "antes / después" claro |
| **c)** Manipulación y generación de perfiles personalizados | No entregado | Campos o rol incompletos, o sin comprobar | 3 campos de perfil, carga por CSV, rol personalizado asignado y comprobado | Además justifica las opciones de cada campo y cada capacidad modificada | Además los perfiles responden a necesidades reales de la academia y están bien documentados para otro administrador |
