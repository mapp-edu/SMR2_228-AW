---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P1 · Cómo viaja una página web
pageClass: ejercicios-page
---

# 📋 P1 · Cómo viaja una página web

<ExportPDF />

## Contexto

Un cliente te pregunta por qué "Internet va lento" cuando abre la web de su proveedor. Antes de responder, necesitas saber qué ocurre realmente cuando se abre una página: desde tu equipo hasta el servidor, pasando por el DNS.

## Objetivos

- Identificar la configuración de red de un equipo y los elementos de la conexión.
- Comprobar el funcionamiento del DNS y la ruta hasta un servidor.
- Analizar las peticiones y respuestas HTTP de una página real.

## Tareas

### 1. Tu conexión

1. Muestra la configuración de red de tu equipo (`ipconfig /all` o `ip a` y `ip route`) e identifica: IP privada, máscara, puerta de enlace, DNS y dirección MAC.
2. Averigua tu **IP pública** (por ejemplo, en `ifconfig.me`) y explica por qué es distinta de la privada (NAT).
3. Dibuja un esquema de tu conexión: equipo → router → ISP → Internet.

### 2. Nombres y rutas

1. Con `nslookup`, obtén la IP de tres webs (una de la Generalitat, una de una gran empresa y la de tu centro). ¿Alguna tiene varias IP o IPv6?
2. Consulta los registros **MX** de un dominio (`nslookup -type=mx gva.es`) y explica para qué sirven.
3. Con `tracert`/`traceroute`, muestra la ruta hasta uno de esos servidores. ¿Cuántos saltos hay? ¿Dónde aumenta el tiempo?

### 3. HTTP en directo

1. Abre una web con las herramientas de desarrollo, pestaña **Red**, y recarga.
2. Responde: ¿cuántas peticiones se hacen? ¿Cuánto pesa la página? ¿Cuánto tarda en cargar?
3. Elige la petición del documento principal y muestra: método, código de estado, versión de HTTP, cabeceras `Server`, `Content-Type` y `Cache-Control`.
4. Provoca y captura un **404** y una **redirección 301/302** (por ejemplo, entrando con `http://` en una web que redirige a `https://`).
5. Comprueba el **certificado** del sitio: emisor, validez y dominio.

### 4. Web 1.0 frente a Web 2.0

Busca en [web.archive.org](https://web.archive.org/) cómo era la web de un periódico o de una gran empresa en 1999 y cómo es hoy. Redacta 6 diferencias relacionándolas con los apuntes.

## Entregable

Documento PDF con las cuatro tareas, capturas y una **respuesta final al cliente** (5-10 líneas) sobre dónde puede estar la lentitud.

## Evaluación

Esta práctica trabaja los **contenidos básicos** de Internet y servidores web, sobre los que se apoya la P3. No tiene un criterio de evaluación propio del RA5: se califica con la escala general del módulo y el **nivel 2 es necesario para que se corrija la P3**.

| 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| No entregado | Práctica incompleta o con respuestas incorrectas | Las cuatro tareas completas y correctas, con capturas y respuesta al cliente | Además justifica las respuestas y decisiones | Además es coherente con el resto del proyecto y está bien comunicada |
