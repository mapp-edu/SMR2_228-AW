---
layout: doc
title: HTML frente a HTML5
sidebar: true
outline: [2, 3]
aside: true
---

# 3. Semejanzas y diferencias entre HTML y HTML5

<ExportPDF />

::: accent-box purple 🎯 Objetivos
- Establecer las semejanzas y diferencias entre HTML (4.01 / XHTML) y HTML5 (CE d).
- Reconocer las etiquetas obsoletas y sus alternativas actuales.
:::

## 3.1 Lo que no cambia

HTML5 es **compatible hacia atrás**: la mayoría de lo que funcionaba en HTML 4 sigue funcionando.

- La estructura `html` → `head` + `body`.
- Encabezados, párrafos, listas, enlaces, imágenes, tablas y formularios básicos.
- Los atributos `id`, `class`, `style`, `title`.
- El uso de CSS para la presentación y de JavaScript para el comportamiento.

## 3.2 Comparativa

| Aspecto | HTML 4.01 / XHTML 1.0 | HTML5 |
|---------|----------------------|-------|
| **DOCTYPE** | Largo y con referencia a una DTD:<br/>`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">` | `<!DOCTYPE html>` |
| **Codificación** | `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">` | `<meta charset="UTF-8">` |
| **Base** | Derivado de SGML (XHTML, de XML) | Especificación propia; define cómo procesar incluso el código erróneo |
| **Sintaxis** | XHTML: estricta (minúsculas, cierre obligatorio, `<br />`) | Flexible, aunque se recomienda escribir de forma ordenada |
| **Estructura** | `div` con `id` (`#header`, `#menu`, `#footer`) | Etiquetas semánticas: `header`, `nav`, `main`, `article`, `section`, `aside`, `footer` |
| **Multimedia** | Plugins externos (Flash, Java) con `object`/`embed` | `audio`, `video`, `source`, `track` nativos |
| **Gráficos** | Imágenes o plugins | `canvas` (dibujo con JavaScript) y `svg` integrado |
| **Formularios** | `text`, `password`, `checkbox`, `radio`, `submit`… | Además `email`, `url`, `tel`, `number`, `range`, `date`, `time`, `color`, `search`; atributos `required`, `placeholder`, `pattern`, `min`, `max`, `autocomplete` |
| **Validación de formularios** | Solo con JavaScript | Validación nativa del navegador |
| **Presentación** | Etiquetas y atributos de presentación: `font`, `center`, `bgcolor`, `align` | Eliminados: toda la presentación pasa a CSS |
| **Frames** | `frameset` y `frame` | Eliminados (solo se mantiene `iframe`) |
| **APIs** | — | Almacenamiento local, geolocalización, arrastrar y soltar, historial, *web workers*… |
| **Versión** | Versiones cerradas | **Estándar vivo** (*Living Standard*) |

## 3.3 Etiquetas obsoletas y alternativas

| Obsoleta | Problema | Alternativa actual |
|----------|----------|--------------------|
| `<font color="red" size="4">` | Mezcla presentación y contenido | CSS: `color`, `font-size` |
| `<center>` | Presentación | CSS: `text-align: center` o `margin: auto` |
| `<frameset>`, `<frame>` | Accesibilidad, URLs y buscadores | Plantillas, `iframe` puntual |
| `<big>`, `<tt>`, `<strike>` | Presentación | CSS o `<del>`, `<s>`, `<code>` |
| `<acronym>` | Duplicado | `<abbr>` |
| `<applet>` | Plugin Java | JavaScript / WebAssembly |
| Atributos `bgcolor`, `border`, `align`, `width` en tablas | Presentación | CSS |

## 3.4 El mismo documento en dos versiones

::: tabs

== HTML 4.01

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
  "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Noticias</title>
</head>
<body bgcolor="#ffffff">
  <div id="cabecera"><center><font size="6">IES Ejemplo</font></center></div>
  <div id="menu"><a href="index.html">Inicio</a> | <a href="ciclos.html">Ciclos</a></div>
  <div id="contenido">
    <div class="noticia">
      <h2>Puertas abiertas</h2>
      <p>El día 20 de noviembre…</p>
      <object data="video.swf" type="application/x-shockwave-flash"></object>
    </div>
  </div>
  <div id="pie">IES Ejemplo</div>
</body>
</html>
```

== HTML5

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Noticias</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <header><h1>IES Ejemplo</h1></header>
  <nav><a href="index.html">Inicio</a> <a href="ciclos.html">Ciclos</a></nav>
  <main>
    <article>
      <h2>Puertas abiertas</h2>
      <p>El día <time datetime="2026-11-20">20 de noviembre</time>…</p>
      <video src="video.mp4" controls></video>
    </article>
  </main>
  <footer><p>IES Ejemplo</p></footer>
</body>
</html>
```

:::

## 3.5 Ventajas de HTML5

- **Semántica:** buscadores y lectores de pantalla entienden mejor la página (accesibilidad y SEO).
- **Sin plugins:** audio, vídeo y gráficos funcionan en cualquier dispositivo, también móviles.
- **Formularios más útiles:** teclado adecuado en el móvil (`type="email"`, `type="tel"`) y validación sin programar.
- **Separación estricta** de contenido (HTML) y presentación (CSS).
- **Base para aplicaciones web** gracias a sus APIs.

::: details 🔁 Autoevaluación rápida
1. Escribe el DOCTYPE de HTML5. ¿Por qué es tan corto?
2. ¿Por qué se eliminaron `font` y `center`?
3. Indica tres tipos de `input` nuevos en HTML5 y qué aportan en un móvil.
4. Convierte a HTML5 semántico: `<div id="menu">`, `<div class="noticia">`, `<div id="pie">`.
:::

---

**Anterior:** [← 2. Estructura de un documento HTML](./2-estructura-html) · **Siguiente:** [4. Hojas de estilo CSS →](./4-css)
