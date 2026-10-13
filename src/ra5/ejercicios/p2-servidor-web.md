---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P2 · Servidor web propio
pageClass: ejercicios-page
---

# 📋 P2 · Servidor web propio

<ExportPDF />

## Contexto

Vas a preparar el servidor que alojará los servicios de la organización `aw.local`: primero, un servidor web con una página estática y una dinámica. En la P3 añadirás el correo y el calendario.

## Objetivos

- Instalar un servidor web en un sistema libre y en uno propietario.
- Configurar un host virtual y organizar la estructura de un sitio.
- Conectar una página dinámica con una base de datos.

## Tareas

### 1. Apache en Ubuntu Server

1. Instala Apache, comprueba su estado y accede desde el equipo anfitrión.
2. Explica la función de las rutas principales (`/var/www/html`, `/etc/apache2/sites-available`, registros).
3. Crea el host virtual **`aw.local`** con su propia carpeta y registros. Configura el fichero `hosts` del cliente y accede por nombre.
4. Publica en él el **mini sitio** del RA3.1 (o una web de 3 páginas) con una estructura de carpetas ordenada.
5. Activa **HTTPS** con un certificado autofirmado y explica el aviso del navegador.

### 2. Página dinámica con base de datos

1. Instala MariaDB, PHP y el módulo `php-mysql`.
2. Crea una base de datos `tienda` con un usuario propio y la tabla `productos` de los apuntes.
3. Publica `productos.php` y comprueba que, al insertar un producto con SQL, aparece en la página sin tocar el código.
4. Instala **phpMyAdmin** (o Adminer) y añade un producto desde allí.

### 3. Servidor web en Windows

Instala **XAMPP** o activa **IIS** en Windows y publica una página de prueba accesible desde otro equipo. Compara la instalación con la de Linux (ubicaciones, gestión del servicio, cortafuegos).

### 4. Análisis

1. Revisa `access.log` y localiza tus propias visitas. Identifica IP, fecha, método, ruta, código de estado y navegador.
2. Provoca un error 404 y un 500 (por ejemplo, con un error de sintaxis en el PHP) y localízalos en los registros.

## Entregable

Documento PDF con las tareas, comandos, ficheros de configuración comentados y capturas.

## Evaluación

Esta práctica trabaja los **contenidos básicos** de Internet y servidores web, sobre los que se apoya la P3. No tiene un criterio de evaluación propio del RA5: se califica con la escala general del módulo y el **nivel 2 es necesario para que se corrija la P3**.

| 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| No entregado | Práctica incompleta o con respuestas incorrectas | Servidor con host virtual, HTTPS, página dinámica con BD, Windows documentado y análisis de registros | Además justifica las respuestas y decisiones | Además es coherente con el resto del proyecto y está bien comunicada |
