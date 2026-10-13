---
layout: doc
title: La web y su evolución
sidebar: true
outline: [2, 3]
aside: true
---

# 2. Fundamentos de la web y su evolución

<ExportPDF />

::: accent-box purple 🎯 Objetivos
- Conocer los fundamentos de la web: hipertexto, URL, HTTP y HTML.
- Diferenciar la Web 1.0, la Web 2.0 y las tendencias posteriores.
- Reconocer los tipos de redes sociales y las nuevas tendencias en la red.
:::

## 2.1 Fundamentos de la web

En 1989, **Tim Berners-Lee**, en el CERN, propuso un sistema de documentos enlazados entre sí: la **World Wide Web**. Se basa en tres piezas que siguen siendo las mismas hoy:

| Pieza | Qué es | Ejemplo |
|-------|--------|---------|
| **HTML** | Lenguaje para escribir los documentos (RA3.1) | `<a href="…">enlace</a>` |
| **URL** | Dirección única de cada recurso | `https://ceice.gva.es/es/web/formacion-profesional` |
| **HTTP** | Protocolo para pedir y entregar los documentos | `GET /index.html HTTP/1.1` |

### Anatomía de una URL

```text
https://www.ejemplo.es:443/cursos/smr/index.html?modulo=aw#ra5
└─┬─┘   └──────┬─────┘└┬┘└──────────┬─────────┘└────┬────┘└┬┘
protocolo   dominio  puerto       ruta            consulta  fragmento
```

### Hipertexto e hipermedia

- **Hipertexto:** texto con enlaces que permiten saltar a otros documentos.
- **Hipermedia:** además de texto, imágenes, audio y vídeo enlazados.

## 2.2 La Web 1.0: la web de lectura

Desde los inicios hasta principios de los 2000.

- Páginas **estáticas** escritas a mano en HTML, que cambiaban poco.
- Pocos **creadores** (quien sabía HTML y tenía servidor) y muchos **lectores**.
- Contenido y presentación mezclados en el HTML (`<font>`, tablas para maquetar).
- Comunicación **unidireccional**: como mucho, un libro de visitas o un formulario por correo.
- Ejemplos: webs corporativas tipo "folleto", directorios (Yahoo!), GeoCities.

## 2.3 La Web 2.0: la web social

El término lo popularizó **Tim O'Reilly** en 2004. No es una nueva tecnología, sino un **cambio de uso**:

| Web 1.0 | Web 2.0 |
|---------|---------|
| El usuario lee | El usuario **lee, escribe y comparte** |
| Páginas estáticas | Aplicaciones **dinámicas** con bases de datos |
| Pocos autores | **Contenido generado por los usuarios** |
| Software que se instala | Software como **servicio** en la web |
| Enciclopedia Británica online | Wikipedia |
| Webs personales | Blogs, redes sociales |
| Contenido y diseño juntos | Separación con CSS; CMS (RA1) |
| Recargar la página | Interfaces interactivas con JavaScript (RA3.2) |

Elementos característicos: **blogs**, **wikis**, **redes sociales**, **etiquetado** (*tags*), **sindicación RSS**, **APIs** abiertas y **mashups** (mezclar servicios, como un formulario que crea un mapa en el RA4).

## 2.4 Más allá de la Web 2.0

- **Web 3.0 / web semántica:** datos con significado que las máquinas pueden entender (metadatos, `schema.org`, datos abiertos enlazados). Permite buscadores y asistentes más "inteligentes".
- **Web móvil y web de las aplicaciones:** el móvil se convierte en el principal dispositivo; diseño adaptable y **aplicaciones web progresivas (PWA)**.
- **Web3 (descentralizada):** propuesta basada en *blockchain* para que los usuarios controlen sus datos. Muy debatida y de uso aún minoritario.

::: info-box Web 3.0 ≠ Web3
**Web 3.0** se refiere sobre todo a la web **semántica**. **Web3** (sin espacio) se refiere a la web **descentralizada** basada en *blockchain*. Se confunden con frecuencia.
:::

## 2.5 Las redes sociales

Una **red social** es un servicio web que permite a sus usuarios crear un perfil, conectar con otros y compartir contenidos.

| Tipo | Ejemplos | Uso |
|------|----------|-----|
| **Generalistas** | Facebook, Instagram, X, Threads, Bluesky | Ocio, información |
| **Profesionales** | LinkedIn | Empleo y contactos profesionales |
| **Vídeo y streaming** | YouTube, TikTok, Twitch | Contenido audiovisual |
| **Mensajería** | WhatsApp, Telegram, Signal | Comunicación privada y grupos |
| **Temáticas / comunidades** | Reddit, Discord, Stack Overflow, GitHub | Intereses comunes, comunidades técnicas |
| **Descentralizadas (Fediverso)** | Mastodon, PeerTube | Sin una empresa central, servidores federados |

::: warning-box Privacidad y huella digital
Todo lo que publicas deja **huella digital**. Revisa la **configuración de privacidad**, no compartas datos personales de otras personas sin su consentimiento y piensa que empresas y centros consultan las redes de los candidatos.
:::

## 2.6 Nuevas tendencias en la red

| Tendencia | Qué es |
|-----------|--------|
| **Inteligencia artificial generativa** | Asistentes y herramientas que generan texto, imágenes o código, integradas en buscadores, ofimática y navegadores |
| **Computación en la nube y *edge computing*** | Servicios en grandes centros de datos y procesamiento cerca del usuario |
| **Internet de las cosas (IoT)** | Sensores, electrodomésticos, coches… conectados |
| **5G y fibra** | Más velocidad y menos latencia |
| **PWA y WebAssembly** | Aplicaciones web con prestaciones de aplicación nativa |
| **Ciberseguridad y privacidad** | HTTPS por defecto, autenticación sin contraseñas (*passkeys*), RGPD |
| **Accesibilidad** | Obligación legal para las administraciones y, cada vez más, para empresas (Ley Europea de Accesibilidad) |
| **Datos abiertos** | Administraciones que publican sus datos para reutilizarlos |

::: details 🔁 Autoevaluación rápida
1. Identifica protocolo, dominio, ruta, consulta y fragmento en `https://portal.edu.gva.es/ies/es/inicio?curso=2#noticias`.
2. Indica cuatro diferencias entre la Web 1.0 y la Web 2.0.
3. ¿Qué diferencia hay entre Web 3.0 y Web3?
4. Elige una tendencia y explica cómo afecta al trabajo de un técnico en SMR.
:::

---

**Anterior:** [← 1. Conceptos básicos de Internet](./1-internet) · **Siguiente:** [3. Navegadores y servidores web →](./3-navegadores-servidores)
