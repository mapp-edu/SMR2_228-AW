---
layout: doc
sidebar: true
outline: [2, 3]
aside: true
title: P1 · Gestor de archivos web
pageClass: ejercicios-page
---

# 📋 P1 · Instalar y asegurar un gestor de archivos web

<ExportPDF />

## Contexto

La entidad de tu mini sitio (RA3.1) comparte los documentos por correo y con memorias USB. Te pide un **servicio propio de gestión de archivos web**: cada departamento tendrá su carpeta, habrá una zona pública para toda la plantilla y se podrán enviar archivos a clientes mediante enlaces. Los datos no pueden salir del servidor de la entidad.

## Objetivos

- Justificar la utilidad de un gestor de archivos web y elegir una herramienta.
- Instalar y adaptar FileBrowser Quantum.
- Crear cuentas clasificadas por permisos y gestionar archivos y directorios.
- Aplicar y comprobar medidas de seguridad.

## Tareas

### 1. Análisis y elección (CE a, b)

1. Explica qué problema resuelve el servicio en tu entidad y describe **tres situaciones** concretas en las que se usará.
2. Compara en una tabla **cuatro aplicaciones** de gestión de archivos web (al menos un gestor ligero y una nube privada) con estos criterios: licencia, requisitos, usuarios y permisos, compartir, seguridad y estado del mantenimiento (fecha de la última versión).
3. Elige una y justifica la elección. Si no eliges FileBrowser Quantum, consúltalo antes con tu profesor.

### 2. Instalación y adaptación (CE c)

1. Crea en tu máquina virtual Ubuntu Server la estructura `/srv/filebrowser/` con `data/` y `archivos/` (con `publico/`, `departamentos/<dos departamentos>/` e `intercambio/`).
2. Escribe el `docker-compose.yml` y el `config.yaml` y arranca el servicio.
3. Obtén la contraseña inicial desde los registros y cámbiala.
4. Adapta la instalación: puerto, política de contraseñas, registro desactivado, idioma y valores por defecto para los usuarios nuevos. Explica cada cambio.

### 3. Cuentas y permisos (CE d)

1. Diseña una **tabla de perfiles** (administrador, editor, colaborador, lector y externo) con rutas y permisos de cada uno.
2. Crea al menos **un grupo** y **cinco usuarios** que cubran los perfiles (el externo se resuelve con un enlace compartido).
3. Configura las reglas de acceso para que cada departamento solo vea su carpeta y la zona pública.

### 4. Gestión de archivos y directorios (CE e)

Con distintos usuarios, y **siempre desde la interfaz web**:

1. Crea una subcarpeta por trimestre en cada departamento y sube al menos cinco documentos con nombres que sigan una convención (`AAAA-MM-DD_descripcion.ext`).
2. Renombra, mueve y copia archivos entre carpetas; edita un fichero de texto en el editor integrado.
3. Descarga una carpeta completa (ZIP) y busca un archivo por su nombre.
4. Crea un **enlace compartido** con contraseña y caducidad de 7 días para un cliente.
5. Incluye una tabla con cada operación y su equivalente en la terminal.

### 5. Seguridad (CE f)

1. Activa el **doble factor** para el administrador y al menos un usuario más.
2. Publica el servicio por **HTTPS** mediante un proxy inverso (Caddy o Nginx) y cierra el acceso directo al puerto 8080 desde fuera.
3. Programa o documenta la **copia de seguridad** de `data/` y `archivos/`, y explica cómo actualizarías el servicio.
4. Realiza una **tabla de pruebas de seguridad** con al menos **8 casos** (permisos, rutas, contraseñas, 2FA, enlaces, HTTPS) indicando el resultado esperado, el obtenido y una captura.

## Entregable

PDF con las explicaciones, las tablas y las capturas, y un ZIP con `docker-compose.yml`, `config.yaml` y la configuración del proxy inverso (**sin contraseñas ni claves**: sustitúyelas por `********`).

## Rúbrica

| CE | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **a)** Utilidad del servicio de gestión de archivos web | No entregado | Explicación genérica sin relación con la entidad | Explica qué problema resuelve y describe tres situaciones de uso | Además justifica por qué es mejor que FTP, SMB o la nube pública en su caso | Además el análisis es coherente con la entidad del mini sitio y está bien redactado |
| **b)** Aplicaciones de gestión de archivos web | No entregado | Menos de cuatro aplicaciones o criterios incompletos | Tabla con cuatro aplicaciones y todos los criterios, y una elección | Además justifica la elección con los criterios, incluido el mantenimiento | Además las fuentes están citadas y la comparativa está actualizada y bien presentada |
| **c)** Instalación y adaptación | No entregado | El servicio no arranca o se monta la raíz del disco | Estructura, `docker-compose.yml`, `config.yaml`, contraseña inicial cambiada y adaptaciones aplicadas | Además explica cada línea de configuración y cada adaptación | Además la instalación es reproducible (otra persona podría repetirla con el PDF) |
| **d)** Cuentas y permisos | No entregado | Usuarios sin clasificar o con todos los permisos | Tabla de perfiles, grupo, cinco usuarios y reglas de acceso funcionando | Además justifica cada permiso con el principio de mínimo privilegio | Además la clasificación encaja con la organización de la entidad y está bien documentada |
| **e)** Gestión de archivos y directorios | No entregado | Faltan operaciones o se hacen por terminal | Carpetas, subida, renombrar, mover, copiar, editar, descargar, buscar y enlace compartido, con tabla de equivalencias | Además justifica la estructura de carpetas y la convención de nombres | Además la organización es clara, coherente y aplicable en la entidad |
| **f)** Seguridad del gestor | No entregado | Medidas sin aplicar o sin comprobar | 2FA, HTTPS con proxy inverso, copia de seguridad y tabla de 8 pruebas | Además explica qué riesgo cubre cada medida y analiza los resultados | Además propone mejoras y el informe de pruebas es riguroso y bien presentado |
