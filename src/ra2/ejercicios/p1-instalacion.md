---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P1 · Instalación y estructura de Moodle
pageClass: ejercicios-page
---

# 📋 P1 · Instalación y estructura de Moodle

<ExportPDF />

## Contexto

Una academia de formación quiere su propio campus virtual. El responsable técnico necesita que lo instales en un servidor Linux y que, además, le expliques **cómo está organizada la instalación** para poder mantenerla y hacer copias.

## Objetivos

- Instalar Moodle en un sistema libre y en uno propietario.
- Reconocer la estructura del sitio y la jerarquía de directorios generada.

## Tareas

### 1. Instalación en Linux

1. Prepara una MV Ubuntu Server con LAMP y comprueba los requisitos de la versión de Moodle elegida (indica cuál y por qué: LTS o última estable).
2. Crea la base de datos y su usuario, el directorio `moodledata` **fuera** del directorio web y ajusta `max_input_vars`.
3. Instala Moodle con el asistente web. Captura la pantalla de **comprobaciones del servidor**.
4. Configura el **cron** y demuestra que se ejecuta (*Administración del sitio → Notificaciones* no debe avisar de que el cron no se ejecuta).

### 2. Instalación en Windows

Instala Moodle con XAMPP (o Docker en Windows). Documenta las diferencias con Linux: rutas, `php.ini`, extensiones, cron con el Programador de tareas.

### 3. Estructura del sitio y directorios (CE a)

1. Dibuja (con Mermaid, draw.io o similar) un **esquema** de la instalación con sus tres elementos y las rutas reales de tu servidor.
2. Muestra el **árbol de directorios** del código (`tree -L 1`) y explica la función de al menos **10 carpetas**.
3. Analiza tu `config.php` (ocultando la contraseña) explicando cada línea.
4. Muestra el contenido de `moodledata` y explica qué guarda cada subcarpeta.
5. **Experimento:** sube un PDF a un curso y localízalo en `moodledata/filedir`. Busca su registro en la tabla `mdl_files` (`SELECT contenthash, filename FROM mdl_files WHERE filename LIKE '%.pdf';`) y explica la relación.
6. Instala un plugin (por ejemplo, un tema o un bloque) y muestra en qué carpeta queda.
7. Representa la **estructura lógica** del sitio: página principal, categorías, cursos, secciones, actividades.

## Entregable

Documento PDF con las tres tareas, comandos, capturas y esquemas.

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **a)** Estructura del sitio y jerarquía de directorios | No entregado | Instalación que no funciona o estructura descrita de forma incompleta o incorrecta | Instalación en Linux y Windows funcionando; esquema de la instalación, árbol del código, `config.php`, `moodledata`, experimento de `filedir` y estructura lógica completos | Además explica por qué `moodledata` está fuera del directorio web, la relación `filedir`–`mdl_files` y el papel del cron | Además relaciona la estructura con las copias de seguridad y el mantenimiento de la academia, con esquemas claros y bien comunicados |
