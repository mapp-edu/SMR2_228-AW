---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P1 · Instalación de WordPress
pageClass: ejercicios-page
---

# 📋 P1 · Instalación de WordPress

<ExportPDF />

## Contexto

Una asociación cultural de tu localidad quiere una web que puedan actualizar varios socios sin saber programar. Te han pedido que prepares **un servidor de pruebas** y que, además, expliques al presidente qué haría falta para tenerla en el ordenador Windows de la sede.

## Objetivos

- Identificar los requisitos de un CMS y comprobar que el servidor los cumple.
- Instalar WordPress en un sistema libre y en uno propietario.
- Diseñar y ejecutar pruebas de funcionamiento.

## Tareas

### 1. Análisis de requisitos (CE a)

1. Consulta los requisitos actuales de WordPress en su web oficial y recógelos en una tabla (PHP, extensiones, base de datos, servidor web, HTTPS).
2. Compara con los requisitos de **Joomla** y **Drupal**. ¿Cuál elegirías para la asociación y por qué?

### 2. Instalación en Ubuntu Server (CE a)

1. Crea una máquina virtual con Ubuntu Server 24.04 (2 GB de RAM, 20 GB de disco, red en modo puente o red NAT con reenvío de puertos).
2. Instala la pila LAMP y demuestra las versiones instaladas (`apache2 -v`, `mariadb --version`, `php -v`, `php -m`).
3. Crea la base de datos `wp_<tusiniciales>` y un usuario propio con permisos solo sobre ella.
4. Instala WordPress en español con:
   - prefijo de tablas distinto de `wp_`,
   - administrador con nombre distinto de `admin`,
   - título del sitio: `Asociación <nombre> – <tu nombre>`.

### 3. Instalación en Windows (CE a)

Repite la instalación en Windows con **XAMPP** (o Laragon). Indica en una tabla las **diferencias** entre ambas instalaciones (rutas, gestión de servicios, herramientas, seguridad).

### 4. Pruebas de funcionamiento (CE d, i)

Diseña una **tabla de pruebas** con al menos 6 pruebas (número, descripción, resultado esperado, resultado obtenido, evidencia). Incluye como mínimo:

- acceso desde otro equipo de la red,
- publicación de una entrada con imagen,
- enlaces permanentes "Nombre de la entrada",
- informe de **Salud del sitio**,
- revisión del registro de errores de Apache.

Si alguna prueba falla, documenta **cómo lo has resuelto**.

## Entregable

Documento PDF con las cuatro tareas, comandos utilizados, capturas y justificación de las decisiones.

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **a)** Requerimientos para instalar el CMS | No entregado | Tabla de requisitos incompleta o instalación que no funciona | Requisitos completos y ambas instalaciones funcionan | Además justifica la elección de CMS, el usuario de BD propio, el prefijo y los permisos | Además compara Linux/Windows con criterio y lo relaciona con las necesidades de la asociación |
| **d)** Pruebas de funcionamiento de la instalación | No entregado | Menos de 6 pruebas o sin evidencias | 6+ pruebas con resultado esperado/obtenido y evidencias | Además explica qué comprueba cada prueba y resuelve los fallos encontrados | Además la batería de pruebas es reutilizable en las siguientes prácticas y está bien presentada |
| **i)** Pruebas de funcionamiento (global) | No entregado | Pruebas sin método | Pruebas completas | Pruebas justificadas | Pruebas coherentes con el proyecto y bien comunicadas |

::: tip-box Antes de entregar
Haz una **instantánea** de la máquina virtual con el nombre `P1-terminada`. La necesitarás en la P2.
:::
