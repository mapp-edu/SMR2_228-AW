---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P3 · Comunicación, copias e informes
pageClass: ejercicios-page
---

# 📋 P3 · Comunicación, importación, copias e informes

<ExportPDF />

## Contexto

El campus de la academia ya tiene aspecto, cursos y usuarios. Antes de abrirlo hay que **comprobar las comunicaciones**, cargar contenidos de otros formatos, garantizar que **se puede recuperar** si algo falla, ofrecer **informes** a la dirección y preparar una **guía** para el alumnado.

## Objetivos

- Comprobar la funcionalidad de las comunicaciones.
- Importar y exportar contenidos en distintos formatos.
- Realizar copias de seguridad y restauraciones.
- Realizar informes de acceso y utilización.

## Tareas

### 1. Comunicación (CE d)

1. Configura el correo saliente con **Mailpit** (o un servidor SMTP de pruebas).
2. En un curso, crea: el foro de **Avisos**, un foro **Pregunta y respuesta**, un foro de uso general con **grupos separados**, una **Consulta** y activa la **mensajería** de grupo.
3. Diseña y ejecuta una **tabla de pruebas** con al menos 6 pruebas usando 3 usuarios con roles diferentes (profesor, estudiante del grupo A, estudiante del grupo B). Incluye la recepción de correos.

### 2. Importar y exportar (CE e)

1. Escribe **10 preguntas en formato GIFT** sobre la unidad RA1 (de al menos 3 tipos) e impórtalas en el banco de preguntas. Crea un cuestionario con ellas.
2. **Exporta** esas preguntas en **Moodle XML** y en **Aiken** (las que lo admitan) y compara los formatos.
3. Importa un paquete **SCORM** o **H5P** de un repositorio libre.
4. Exporta las **calificaciones** del curso a **XLSX** y a **CSV**, modifica una nota en el fichero e **impórtala** de nuevo.
5. Usa **Importar** para copiar actividades de un curso a otro.

### 3. Copias de seguridad y restauración (CE f)

1. Haz una copia de un curso **sin usuarios** y otra **con usuarios**. Explica la diferencia de tamaño y contenido.
2. Restaura la copia sin usuarios **como curso nuevo** y la copia con usuarios **sobre el curso original** tras borrar una actividad.
3. Configura las **copias automatizadas** y demuestra que se han ejecutado.
4. Haz una **copia completa del sitio** (BD + moodledata + código) y restáurala en otra máquina virtual.

### 4. Informes (CE g)

1. Genera tráfico: accede con varios usuarios, consulta recursos y entrega actividades.
2. Obtén y **descarga** los registros de un curso filtrados por usuario y fecha.
3. Obtén los informes de **actividad**, **participación** y **finalización**.
4. Crea un **informe personalizado** con el generador de informes (por ejemplo, usuarios con su último acceso y su campo de perfil "grupo").
5. Ejecuta las **comprobaciones de seguridad** y corrige al menos dos avisos.
6. Redacta un breve **informe para la dirección** de la academia con las conclusiones.

### 5. Guía para el alumnado

Elabora en Moodle un **Libro** "Primeros pasos en el campus" con 4 capítulos: acceso y contraseña, completar el perfil, entregar una tarea y participar en un foro.

## Entregable

Documento PDF con las tareas, ficheros GIFT y CSV utilizados, tabla de pruebas, informe para la dirección y enlace (o captura) de la guía.

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **d)** Funcionalidad de las comunicaciones | No entregado | Faltan herramientas o no se comprueban con distintos usuarios | Foros, consulta y mensajería configurados y comprobados con tabla de 6+ pruebas y recepción de correo | Además justifica la elección de cada tipo de foro y su configuración | Además las comunicaciones están pensadas para la academia y la tabla de pruebas es clara y reutilizable |
| **e)** Importación y exportación en distintos formatos | No entregado | Solo un formato o importaciones fallidas sin resolver | GIFT, XML/Aiken, SCORM/H5P, calificaciones XLSX/CSV e importación entre cursos | Además compara los formatos y explica cuándo usar cada uno | Además integra los contenidos importados en el curso de forma coherente y bien presentada |
| **f)** Copias de seguridad y restauraciones | No entregado | Solo una copia o restauración no comprobada | Copias con y sin usuarios, dos restauraciones, copias automatizadas y copia completa del sitio restaurada | Además justifica qué incluir en cada tipo de copia | Además propone una política de copias para la academia, clara y realista |
| **g)** Informes de acceso y utilización | No entregado | Informes sueltos sin interpretación | Registros, actividad, participación, finalización, informe personalizado y comprobaciones de seguridad | Además interpreta los datos y extrae conclusiones | Además el informe para la dirección es claro, útil y coherente con el resto del proyecto |
