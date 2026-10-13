---
layout: doc
title: Instalación y administración de un gestor de archivos web
sidebar: true
outline: [2, 3]
aside: true
---

# 2. Instalación y administración de un gestor de archivos web

<ExportPDF />

::: accent-box purple 🎯 Objetivos
- Instalar y adaptar una herramienta de gestión de archivos web (CE c).
- Crear y clasificar cuentas de usuario en función de sus permisos (CE d).
- Gestionar archivos y directorios desde el navegador (CE e).
- Comprobar la seguridad del gestor de archivos (CE f).
:::

Usaremos **FileBrowser Quantum**: es software libre, ligero (un solo contenedor), tiene permisos por usuario y carpeta, enlaces para compartir y doble factor de autenticación, y su desarrollo sigue activo.

::: info-box La interfaz puede cambiar
FileBrowser Quantum evoluciona rápido. Los nombres de algunos menús pueden variar entre versiones: si no encuentras una opción, consulta la [documentación oficial](https://filebrowserquantum.com/en/docs/).
:::

## 2.1 Preparación

Partimos de una máquina virtual **Ubuntu Server 24.04 LTS** con **Docker** y el *plugin* **Docker Compose** instalados (como en el RA4). Creamos esta estructura:

```text
/srv/filebrowser/
├── docker-compose.yml     ← definición del servicio
├── data/                  ← configuración y base de datos de usuarios
│   └── config.yaml
└── archivos/              ← los ficheros que se van a gestionar
    ├── publico/
    ├── departamentos/
    │   ├── administracion/
    │   └── tecnico/
    └── intercambio/
```

```bash
sudo mkdir -p /srv/filebrowser/{data,archivos/{publico,departamentos/{administracion,tecnico},intercambio}}
cd /srv/filebrowser
```

::: tip-box Datos y configuración separados
Separar `data/` (configuración, usuarios) de `archivos/` (contenido) facilita las copias de seguridad y las actualizaciones: el contenedor se puede borrar y volver a crear sin perder nada.
:::

## 2.2 Instalación con Docker Compose

```yaml
# /srv/filebrowser/docker-compose.yml
services:
  filebrowser:
    image: ghcr.io/gtsteffaniak/filebrowser:stable
    container_name: filebrowser
    ports:
      - "8080:80"                            # puerto del servidor : puerto del contenedor
    volumes:
      - ./archivos:/folder                   # SOLO la carpeta de datos, nunca la raíz del disco
      - ./data:/home/filebrowser/data        # config.yaml y base de datos
    restart: unless-stopped
```

Antes de arrancar, creamos la configuración mínima:

```yaml
# /srv/filebrowser/data/config.yaml
server:
  sources:
    - path: "/folder"            # carpeta que verá la aplicación (dentro del contenedor)
      config:
        defaultEnabled: true     # los usuarios nuevos tienen acceso a esta fuente
auth:
  methods:
    password:
      enabled: true
      minLength: 10              # longitud mínima de las contraseñas
      signup: false              # nadie puede registrarse por su cuenta
```

```bash
docker compose up -d                       # descarga la imagen y arranca
docker compose ps                          # comprueba que está en marcha (healthy)
docker compose logs filebrowser | grep -i password
```

**Contraseña inicial:** si no se indica ninguna, FileBrowser Quantum **genera una aleatoria** para el usuario `admin` y la muestra **una sola vez** en los registros (por eso usamos `docker compose logs`). En el primer inicio de sesión obliga a cambiarla.

Abre `http://IP-DEL-SERVIDOR:8080`, entra como `admin` con esa contraseña y define una nueva.

::: warning-box Permisos del sistema de archivos
Si al subir un archivo aparece un error de permisos, revisa el propietario de `archivos/` y `data/` con `ls -ln` y ajústalo con `chown` al usuario con el que se ejecuta el contenedor. Nunca lo "arregles" con `chmod 777`.
:::

### Adaptar la herramienta

"Adaptar" significa ajustar la instalación a lo que necesita la organización:

| Ajuste | Dónde | Ejemplo |
|--------|-------|---------|
| Puerto de acceso | `docker-compose.yml` | `8080:80` para no chocar con Apache |
| Carpeta gestionada | `volumes` y `sources` | Solo `/srv/filebrowser/archivos` |
| Política de contraseñas | `config.yaml` → `minLength` | 10 caracteres o más |
| Registro de usuarios | `config.yaml` → `signup` | Desactivado: las cuentas las crea el administrador |
| Idioma, tema y vista | Ajustes del perfil | Español, tema oscuro, vista de lista |
| Valores por defecto de usuarios nuevos | Ajustes de administración | Sin permiso de borrado ni de compartir |

Cada vez que cambies `config.yaml`, reinicia el servicio: `docker compose restart`.

## 2.3 Cuentas de usuario y permisos

FileBrowser Quantum distingue dos niveles de permisos:

| Nivel | Permiso | Qué permite |
|-------|---------|-------------|
| **Globales** (toda la cuenta) | **Admin** | Gestionar usuarios y la configuración |
| | **Share** | Crear enlaces para compartir |
| | **API** | Crear *tokens* para acceder por API |
| | **Realtime** | Ver los cambios en tiempo real |
| **Por fuente** (cada carpeta asignada) | **View** | Ver el contenido y las vistas previas |
| | **Download** | Descargar archivos |
| | **Create** | Crear archivos y carpetas, subir |
| | **Modify** | Editar, sobrescribir, renombrar y mover |
| | **Delete** | Eliminar archivos y carpetas |

Además, las **reglas de acceso** (*allow* / *deny*) limitan **a qué rutas** puede llegar cada usuario o grupo. Para que una acción funcione, se tienen que cumplir **las dos cosas**: tener el permiso y que la regla permita la ruta.

### Clasificar las cuentas

Antes de crear usuarios, se definen **perfiles** según lo que necesita cada persona. Se aplica el **principio de mínimo privilegio**: cada cuenta tiene solo los permisos imprescindibles.

| Perfil | Ejemplo | Rutas | Permisos |
|--------|---------|-------|----------|
| **Administrador** | Técnico de sistemas | Todas | Admin + todos |
| **Editor** | Responsable de un departamento | Su departamento + `publico/` | View, Download, Create, Modify, Delete, Share |
| **Colaborador** | Personal del departamento | Su departamento + `intercambio/` | View, Download, Create, Modify |
| **Lector** | Personal de otros departamentos | `publico/` | View, Download |
| **Externo** | Cliente o proveedor | — (sin cuenta) | Enlace compartido con contraseña y caducidad |

Para crear un usuario: **Ajustes → Usuarios → Nuevo**, con nombre, contraseña inicial, permisos globales, fuentes y permisos por fuente. Agrupa a las personas con las mismas necesidades en **grupos** y aplica las reglas al grupo.

::: tip-box Una cuenta por persona
No compartas cuentas ("dpto-admin" para cinco personas): no sabrías quién hizo cada cambio y no podrías retirar el acceso a una sola persona.
:::

## 2.4 Gestión de archivos y directorios

Desde la interfaz web se hacen las mismas operaciones que en la terminal:

| Operación | En FileBrowser | Equivalente en la terminal |
|-----------|----------------|----------------------------|
| Crear carpeta | Botón **Nueva carpeta** | `mkdir informes` |
| Subir archivos | Botón **Subir** o arrastrar al navegador | `scp fichero usuario@servidor:` |
| Descargar | Botón **Descargar** (varios = ZIP) | `scp usuario@servidor:fichero .` |
| Renombrar | Clic derecho → **Renombrar** | `mv viejo.txt nuevo.txt` |
| Mover / copiar | **Mover** / **Copiar** y elegir destino | `mv` / `cp -r` |
| Editar texto | Abrir el fichero (`.txt`, `.md`, `.html`…) | `nano fichero` |
| Buscar | Barra de búsqueda | `find . -name "*.pdf"` |
| Eliminar | **Eliminar** (pide confirmación) | `rm` / `rm -r` |
| Compartir | **Compartir** → enlace con contraseña y caducidad | — |

### Buenas prácticas de organización

- Una **estructura de carpetas** acordada y documentada (por departamento, por proyecto o por curso).
- **Nombres** sin espacios ni tildes y con fecha al principio para ordenar: `2026-10-15_acta-reunion.pdf`.
- Una carpeta de **intercambio** temporal que se vacía periódicamente.
- Los enlaces compartidos, siempre con **caducidad**, y si contienen datos personales, también con **contraseña**.

::: note-box 📷 Captura sugerida
Vista de la carpeta `departamentos/` con varios archivos seleccionados y el menú de acciones abierto.
:::

## 2.5 Seguridad del gestor de archivos

### Medidas de protección

| Medida | Cómo se aplica |
|--------|----------------|
| Contraseña de `admin` robusta | Se cambia en el primer acceso. En producción se puede fijar con la variable `FILEBROWSER_ADMIN_PASSWORD` |
| Política de contraseñas | `minLength` en `config.yaml` |
| Sin registro libre | `signup: false` |
| **Doble factor (2FA)** | Activar TOTP en el perfil. Con `enforcedOtp: true` se obliga a todos. La clave del servidor se genera con `openssl rand -base64 32` y se pasa en la variable `FILEBROWSER_TOTP_SECRET` |
| **HTTPS** | Un proxy inverso (Caddy o Nginx) con certificado delante del contenedor. El puerto 8080 no se abre al exterior |
| Alcance mínimo | Solo se monta la carpeta `archivos/`, nunca `/` |
| Mínimo privilegio | Perfiles con los permisos justos y reglas de ruta |
| Enlaces controlados | Caducidad y contraseña; se revisan y se eliminan los que ya no hacen falta |
| Actualizaciones | `docker compose pull && docker compose up -d` y revisar que el proyecto sigue mantenido |
| Copias de seguridad | De `data/` (usuarios y configuración) y de `archivos/` |

Ejemplo de proxy inverso con **Caddy**, que obtiene y renueva el certificado automáticamente:

```text
# /etc/caddy/Caddyfile
archivos.midominio.es {
    reverse_proxy localhost:8080
}
```

### Comprobar la seguridad

Configurar no basta: hay que **probar** que las medidas funcionan. Prepara una tabla de pruebas como esta:

| Prueba | Resultado esperado |
|--------|--------------------|
| Un **lector** intenta subir o borrar un archivo | La opción no aparece o la acción se rechaza |
| Un **colaborador** intenta entrar en otro departamento | Acceso denegado |
| Inicio de sesión con contraseña incorrecta | Rechazado; queda constancia en los registros |
| Crear una contraseña más corta que `minLength` | Rechazada |
| Usuario con 2FA sin introducir el código | No puede entrar |
| Abrir un enlace compartido caducado o sin su contraseña | Acceso denegado |
| Acceder por `http://` | Redirige a `https://` |
| Intentar llegar a ficheros fuera de `archivos/` (por ejemplo, `/etc`) | No son visibles |

Los registros del contenedor ayudan a comprobar lo que ha pasado:

```bash
docker compose logs --since 1h filebrowser
```

::: details 🔁 Autoevaluación rápida
1. ¿Por qué se montan por separado `data/` y `archivos/`?
2. ¿Dónde encuentras la contraseña inicial de `admin` y por qué solo aparece una vez?
3. Un colaborador tiene los permisos Create y Modify, pero no ve la carpeta de otro departamento. ¿Por qué?
4. Define los permisos de un perfil "becario" que solo debe dejar archivos en `intercambio/`.
5. Enumera cuatro medidas de seguridad y una prueba para comprobar cada una.
:::

---

**Anterior:** [← 1. Servicios de gestión de archivos web](./1-gestion-archivos-web) · **Siguiente:** [3. Lenguajes de script de cliente →](./3-javascript-basico)
