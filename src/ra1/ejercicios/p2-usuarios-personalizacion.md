---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P2 · Usuarios, apariencia y menús
pageClass: ejercicios-page
---

# 📋 P2 · Usuarios, apariencia y menús

<ExportPDF />

## Contexto

La asociación ya tiene su servidor de pruebas (P1). Ahora quiere que varias personas puedan publicar, que la web tenga **su propia imagen** y que la navegación sea clara.

## Objetivos

- Crear usuarios con roles diferentes y comprobar sus permisos.
- Personalizar la interfaz del sitio.
- Instalar y configurar extensiones y menús.

## Tareas

### 1. Usuarios y roles (CE b)

1. Diseña una tabla con las personas que gestionarán la web (mínimo 5) y el **rol** que asignas a cada una, **justificando** la elección con el principio de mínimo privilegio.
2. Crea los usuarios (al menos uno por cada rol: administrador, editor, autor, colaborador y suscriptor). Crea al menos uno con **WP-CLI**.
3. Inicia sesión con el **colaborador** y con el **autor** y demuestra con capturas qué pueden y qué no pueden hacer (publicar, editar entradas ajenas, instalar plugins…).
4. Instala un plugin de gestión de roles y crea un rol personalizado `Revisor de agenda` que solo pueda editar páginas.

### 2. Personalización de la interfaz (CE c)

1. Configura título, descripción, idioma, zona horaria y portada estática.
2. Elige y activa un **tema** adecuado. Justifica la elección (diseño adaptable, accesibilidad, mantenimiento, valoraciones).
3. Personaliza: logotipo, icono del sitio, paleta de colores y tipografía coherentes, cabecera y pie con los datos de la asociación.
4. Crea al menos **4 páginas** (Inicio, Quiénes somos, Actividades, Contacto) y **3 entradas** en dos categorías.

### 3. Módulos y menús (CE f)

1. Instala y configura **al menos 3 extensiones** útiles para la asociación (por ejemplo: formulario de contacto, estadísticas, cumplimiento de cookies). Para cada una indica por qué la eliges frente a alternativas.
2. Crea un **menú principal** con submenú (por ejemplo, *Actividades → Talleres / Excursiones*) y un **menú de pie** con aviso legal y privacidad.
3. Añade a la portada un bloque con las **últimas noticias** y otro que muestre el **feed RSS** de un medio externo. Indica la URL del feed RSS de tu sitio.

### 4. Pruebas (CE i)

Comprueba con capturas: el formulario de contacto envía (o registra) el mensaje, los menús funcionan en móvil y escritorio y el feed RSS se puede leer en un lector.

## Entregable

Documento PDF con las tareas, tabla de usuarios y roles, capturas del sitio en escritorio y móvil y justificación de las decisiones.

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **b)** Usuarios con roles diferentes | No entregado | Faltan roles o no se comprueban los permisos | Todos los roles creados y comprobados, incluido el rol personalizado | Además justifica cada rol con el principio de mínimo privilegio | Además el diseño de roles encaja con la organización real de la asociación y está bien explicado |
| **c)** Personalización de la interfaz | No entregado | Solo cambia el tema o la personalización es incoherente | Ajustes, tema, identidad visual y contenidos completos | Además justifica tema y decisiones de diseño (accesibilidad, adaptable) | Además el sitio tiene una identidad coherente y cuidada en todas las páginas |
| **f)** Módulos y menús | No entregado | Menos de 3 extensiones o menús incompletos | 3 extensiones configuradas, menú principal con submenú, menú de pie y RSS | Además justifica cada extensión frente a alternativas | Además la navegación es clara y coherente con el contenido del sitio |
| **i)** Pruebas de funcionamiento | No entregado | Pruebas sin evidencias | Pruebas completas con evidencias | Pruebas justificadas | Pruebas coherentes con la P1 y bien comunicadas |
