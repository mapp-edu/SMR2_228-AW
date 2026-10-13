---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P3 · Foro, seguridad y copias
pageClass: ejercicios-page
---

# 📋 P3 · Foro, seguridad y copias de seguridad

<ExportPDF />

## Contexto

Antes de publicar la web en Internet, la asociación quiere un **foro para los socios** y te pide garantías: que la web esté **actualizada y protegida** y que, si algo falla, se pueda **recuperar**.

## Objetivos

- Habilitar un foro y establecer reglas de acceso.
- Actualizar el gestor de contenidos siguiendo un procedimiento seguro.
- Activar mecanismos de seguridad y analizar los accesos.
- Realizar y restaurar copias de seguridad.

## Tareas

### 1. Foro con reglas de acceso (CE h)

1. Instala **bbPress** y configúralo (bloqueo de edición, *flooding*, rol por defecto, sin publicación anónima).
2. Crea esta estructura y diseña sus reglas de acceso en una tabla (visibilidad, estado, quién escribe, quién modera):
   - *Anuncios* (público, solo escriben moderadores),
   - *Socios* (privado, participan los usuarios registrados),
   - *Junta directiva* (oculto).
3. Publica un tema fijo con las **normas del foro**.
4. Asigna un **moderador** y comprueba las reglas con al menos tres usuarios diferentes.

### 2. Actualizaciones (CE e)

1. Instala deliberadamente una versión **anterior** de un plugin (desde su página de "Desarrollo → Versiones anteriores") o parte de una instalación con actualizaciones pendientes.
2. Aplica el **procedimiento seguro**: registro de cambios → copia → actualización → pruebas. Documenta cada paso.
3. Configura la política de actualizaciones automáticas (núcleo, plugins, traducciones) y **justifícala**.
4. Actualiza también los paquetes del sistema operativo.

### 3. Mecanismos de seguridad (CE g)

1. Instala un plugin de seguridad y activa: límite de intentos de inicio de sesión, **2FA para el administrador** y escaneo de ficheros.
2. Añade a `wp-config.php` `DISALLOW_FILE_EDIT` y comprueba su efecto.
3. Revisa permisos de ficheros y directorios.
4. Simula **5 intentos fallidos** de inicio de sesión y muestra cómo los detecta el plugin y cómo aparecen en `access.log`. Genera un **informe de accesos** con GoAccess o con un plugin de estadísticas.

### 4. Copias de seguridad y restauración (CE j)

1. Realiza una copia **manual** (`mysqldump` + `tar`) y otra **automática** programada con UpdraftPlus enviada a un almacenamiento remoto.
2. Simula un desastre: borra una página, una imagen y un usuario.
3. **Restaura** la copia y demuestra que todo ha vuelto.
4. Redacta la **política de copias** de la asociación aplicando la regla 3-2-1 (frecuencia, retención, ubicaciones).

### 5. Pruebas (CE i)

Repite la batería de pruebas de la P1 tras la actualización y tras la restauración.

## Entregable

Documento PDF con las tareas, la tabla de reglas de acceso, el procedimiento de actualización, el informe de accesos y la política de copias.

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **h)** Foros y reglas de acceso | No entregado | Foro sin reglas de acceso o sin comprobar | Tres foros con su visibilidad, normas, moderador y comprobación con varios usuarios | Además justifica las reglas de acceso de cada foro | Además las reglas son coherentes con los roles de la P2 y están bien explicadas |
| **e)** Actualizaciones, especialmente de seguridad | No entregado | Actualiza sin procedimiento o sin copia previa | Sigue el procedimiento completo y configura actualizaciones automáticas | Además justifica la política de actualizaciones | Además incluye el sistema operativo y lo integra en un plan de mantenimiento claro |
| **g)** Mecanismos de seguridad del CMS | No entregado | Activa menos de dos mecanismos o no los comprueba | Límite de intentos, 2FA, escaneo, `DISALLOW_FILE_EDIT`, permisos e informe de accesos | Además explica frente a qué amenaza protege cada mecanismo | Además analiza el informe de accesos y propone mejoras razonadas |
| **j)** Copias de seguridad | No entregado | Copia incompleta (solo BD o solo ficheros) o sin restaurar | Copia manual y automática, restauración comprobada | Además redacta una política de copias justificada | Además la política aplica la regla 3-2-1 de forma realista para la asociación y está bien comunicada |
| **i)** Pruebas de funcionamiento | No entregado | Pruebas parciales | Pruebas completas tras actualizar y restaurar | Pruebas justificadas | Pruebas coherentes con P1 y P2 y bien comunicadas |
