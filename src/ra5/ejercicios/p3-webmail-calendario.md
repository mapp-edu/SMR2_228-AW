---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P3 · Webmail y calendario
pageClass: ejercicios-page
---

# 📋 P3 · Webmail y calendario web

<ExportPDF />

## Contexto

La organización `aw.local` quiere dejar de instalar programas de correo y agenda en cada equipo. Te encarga montar un **correo web** y un **calendario web** en su servidor (el de la P2), crear las cuentas del personal y demostrar que todo funciona.

## Objetivos

- Describir aplicaciones web de escritorio.
- Instalar y configurar un webmail integrado con un servidor de correo.
- Gestionar cuentas y verificar el acceso al correo.
- Instalar un calendario web y reconocer sus prestaciones.

## Tareas

### 1. Aplicaciones web de escritorio (CE a)

Elabora una tabla comparativa de **al menos 6 aplicaciones web de escritorio** (webmail, calendarios, escritorios web, plataformas de colaboración), indicando: tipo, licencia, tecnologías, prestaciones principales y si se puede autoalojar. Incluye la historia de **eyeOS** y explica qué alternativa usarías hoy y por qué.

### 2. Servidor de correo e instalación del webmail (CE b)

1. Instala y configura **Postfix** y **Dovecot** con buzones Maildir para el dominio `aw.local`.
2. Instala **Roundcube** con su base de datos y publícalo en Apache (sobre HTTPS).
3. Justifica la elección de Roundcube frente a otra alternativa (SnappyMail, SOGo, Nextcloud Mail).

### 3. Integración con el servidor de correo (CE c)

1. Configura en `config.inc.php` los servidores IMAP y SMTP, el dominio, el nombre del producto y **al menos dos plugins**.
2. Dibuja un **esquema** con los componentes (Apache, Roundcube, Postfix, Dovecot, MariaDB, buzones) y los puertos y protocolos entre ellos.
3. Explica qué cambiaría si Roundcube estuviera en otro servidor (cifrado, autenticación, puertos).

### 4. Gestión de cuentas (CE d)

1. Crea las cuentas de **4 personas** y una cuenta compartida (`soporte`).
2. Crea el alias `info@aw.local` que entregue a dos personas.
3. Cambia la contraseña de una cuenta, bloquéala y desbloquéala.
4. Redacta una breve **política de cuentas** (nombres, contraseñas, alta y baja de usuarios).

### 5. Verificación del acceso al correo (CE e)

Diseña y ejecuta una **tabla de pruebas** (mínimo 7) que incluya: inicio de sesión correcto e incorrecto, envío y recepción entre usuarios, adjuntos, alias, cuenta bloqueada y acceso desde un cliente IMAP (Thunderbird o móvil). Acompaña cada prueba con la línea correspondiente de `/var/log/mail.log`.

### 6. Calendario web (CE f)

1. Instala o reutiliza **Nextcloud** y activa **Calendar**, **Tasks** y **Contacts**.
2. Crea los mismos usuarios que en el correo y el grupo `soporte`.
3. Configura el servidor de correo de Nextcloud para el envío de invitaciones.
4. Sincroniza un calendario con **Thunderbird** o con el móvil mediante **CalDAV**.

### 7. Prestaciones de las aplicaciones (CE g)

Demuestra con capturas **al menos 8 prestaciones**: en Roundcube (carpetas, filtros o respuesta automática, contactos, identidades) y en el calendario (cita periódica con recordatorio, invitación aceptada, calendario compartido con el grupo, calendario publicado, tareas con prioridad y subtareas, reserva de citas). Explica para qué serviría cada una en la organización.

## Entregable

Documento PDF con las siete tareas, ficheros de configuración comentados, esquema, tabla de pruebas y capturas.

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **a)** Descripción de aplicaciones web de escritorio | No entregado | Menos de 6 aplicaciones o descripción superficial | Tabla de 6+ aplicaciones con todos los campos e historia de eyeOS | Además justifica la alternativa elegida hoy | Además la comparativa es rigurosa, actualizada y bien presentada |
| **b)** Instalación de la aplicación de webmail | No entregado | Roundcube no funciona o falta el servidor de correo | Postfix, Dovecot y Roundcube instalados y accesibles por HTTPS | Además justifica la elección de Roundcube y cada paso de la instalación | Además reutiliza el servidor de la P2 de forma coherente y la documentación es clara |
| **c)** Integración con el servidor de correo | No entregado | Configuración incompleta (no envía o no recibe) | IMAP, SMTP, dominio y plugins configurados, esquema con puertos y protocolos | Además explica los cambios necesarios en un escenario con varios servidores | Además el esquema y la explicación serían útiles para otro administrador |
| **d)** Gestión de cuentas de usuario | No entregado | Faltan cuentas, alias o tareas de gestión | 4 cuentas + compartida, alias, cambio de contraseña, bloqueo y política de cuentas | Además justifica la política de cuentas | Además la gestión es coherente entre correo y calendario y está bien documentada |
| **e)** Verificación del acceso al correo | No entregado | Menos de 7 pruebas o sin evidencias | 7+ pruebas con resultado esperado/obtenido, registros y cliente IMAP | Además explica cómo diagnostica los fallos encontrados | Además la tabla de pruebas es rigurosa y reutilizable |
| **f)** Instalación del calendario web | No entregado | Calendario sin usuarios o sin funcionar | Nextcloud con Calendar, Tasks y Contacts, usuarios, envío de invitaciones y sincronización CalDAV | Además justifica la elección y la configuración | Además está integrado con el correo de forma coherente |
| **g)** Prestaciones específicas (citas, tareas…) | No entregado | Menos de 8 prestaciones o sin evidencias | 8+ prestaciones demostradas en webmail y calendario | Además explica la utilidad de cada una para la organización | Además las prestaciones se presentan como una guía útil para el personal, clara y bien comunicada |
