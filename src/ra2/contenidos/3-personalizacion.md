---
layout: doc
title: Personalización del entorno
sidebar: true
outline: [2, 3]
aside: true
---

# 3. Personalización del entorno. Navegación y edición

<ExportPDF />

::: accent-box purple 🎯 Objetivos
- Moverse por la interfaz de Moodle y su administración.
- Modificar la estética del sitio: tema, colores, logotipos, página principal y bloques (CE b).
- Configurar idiomas y opciones de navegación.
:::

## 3.1 La interfaz de Moodle

Con el tema por defecto (**Boost**), la pantalla se organiza así:

| Zona | Contenido |
|------|-----------|
| **Barra superior** | Logotipo, navegación principal (*Página principal, Área personal, Mis cursos, Administración del sitio*), notificaciones, mensajes, menú de usuario |
| **Índice del curso** (izquierda) | Secciones y actividades del curso actual |
| **Cajón de bloques** (derecha) | Bloques: calendario, eventos próximos, actividad reciente… |
| **Navegación secundaria** | Pestañas dentro de un curso o actividad: *Curso, Configuración, Participantes, Calificaciones, Informes, Más* |
| **Modo edición** | Interruptor en la barra superior para añadir y mover elementos |

::: note-box 📷 Captura sugerida
Página de un curso con el índice del curso abierto, el cajón de bloques visible y el modo edición activado.
:::

### Navegación y edición

- **Área personal (Dashboard):** página de cada usuario con su línea de tiempo, calendario y cursos recientes.
- **Mis cursos:** listado de cursos en los que está matriculado el usuario.
- **Modo edición:** al activarlo aparecen los iconos para **añadir una actividad o recurso**, mover (arrastrar), duplicar, ocultar o borrar elementos y editar los nombres de las secciones.

## 3.2 Ajustes básicos del sitio

En **Administración del sitio → Página principal → Ajustes de la página principal**:

- Nombre completo y nombre corto del sitio.
- Qué muestra la portada a los visitantes y a los usuarios identificados (anuncios, lista de cursos, categorías, buscador de cursos).

En **Administración del sitio → Ubicación**: zona horaria (`Europe/Madrid`) y país por defecto.

## 3.3 Idiomas

1. **Administración del sitio → Idioma → Paquetes de idioma**: instala `Español - Internacional (es)` y `Valencià (ca_valencia)`.
2. **Ajustes de idioma**: idioma por defecto del sitio y si se muestra el menú de idioma.

Los paquetes de idioma se guardan en `moodledata/lang/`. Si un texto no te convence, puedes cambiarlo en **Idioma → Personalización del idioma** sin tocar el código.

## 3.4 Temas y apariencia

Un **tema** define colores, tipografías, disposición y estilo de toda la plataforma.

| Tema | Características |
|------|----------------|
| **Boost** (por defecto) | Moderno, adaptable, con cajones laterales |
| **Classic** | Basado en Boost pero con bloques a los lados, al estilo de versiones antiguas |
| **Temas de terceros** | Moove, Academi, Space, Almondb… (se instalan en `theme/`) |

### Personalizar Boost

**Administración del sitio → Apariencia → Temas → Boost**:

- **Preajuste** (*preset*): Default o Plain.
- **Color de marca** (*Brand colour*): color principal de botones y enlaces.
- **Imagen de fondo** de la página de acceso.
- **SCSS en bruto** (avanzado): reglas de estilo propias, por ejemplo:

```scss
.navbar { background-color: #1C375B !important; }
.navbar .nav-link { color: #FFFFFF !important; }
```

### Logotipos

**Administración del sitio → Apariencia → Logos**:

- **Logo** (cabecera de la página de acceso y portada).
- **Logo compacto** (barra superior).
- **Favicon**.

::: note-box 📷 Captura sugerida
Comparativa "antes / después" de la página principal tras cambiar el color de marca y los logotipos.
:::

### Otras opciones de apariencia

- **Navegación:** página por defecto tras iniciar sesión (Área personal o Mis cursos).
- **Calendario**, **Cursos** (cómo se listan) y **Plantillas del área personal**.
- **Avisos** (*Notices*) y **página de política** del sitio.

## 3.5 Bloques

Los **bloques** son pequeñas cajas de información que se colocan en el cajón lateral. El administrador decide qué bloques aparecen por defecto en la página principal y en el área personal; el profesorado decide los de su curso.

| Bloque | Utilidad |
|--------|----------|
| Calendario / Eventos próximos | Fechas de entrega |
| Actividad reciente | Novedades desde el último acceso |
| Usuarios en línea | Quién está conectado |
| HTML | Texto o imagen libre |
| Progreso / Finalización | Seguimiento del avance |

::: tip-box Personalizar sin romper
Prueba los cambios de tema con un **usuario de prueba con rol estudiante** y en el **móvil**. Un color de marca con poco contraste puede hacer ilegibles botones y enlaces.
:::

::: details 🔁 Autoevaluación rápida
1. ¿Quién puede cambiar el tema del sitio? ¿Y los bloques de un curso?
2. ¿Dónde se guardan los paquetes de idioma descargados?
3. ¿Qué diferencia hay entre el preajuste y el SCSS en bruto de Boost?
:::

---

**Anterior:** [← 2. Instalación y estructura](./2-instalacion-estructura) · **Siguiente:** [4. Cursos, usuarios y perfiles →](./4-cursos-usuarios)
