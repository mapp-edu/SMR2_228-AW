---
layout: doc
title: Requisitos e instalación de un CMS
sidebar: true
outline: [2, 3]
aside: true
---

# 2. Requisitos, herramientas e instalación

<ExportPDF />

::: accent-box purple 🎯 Objetivos
- Identificar los requerimientos de hardware y software de un CMS (CE a).
- Instalar un CMS en un sistema operativo libre y en uno propietario.
- Realizar pruebas de funcionamiento tras la instalación (CE d, i).
:::

## 2.1 Requisitos de WordPress

Los requisitos cambian con cada versión, así que **consúltalos siempre en la web oficial** antes de instalar ([wordpress.org/about/requirements](https://wordpress.org/about/requirements/)). Como referencia actual:

| Elemento | Recomendado |
|----------|-------------|
| PHP | 8.3 o superior, con las extensiones `mysqli`, `curl`, `gd` o `imagick`, `mbstring`, `xml`, `zip`, `intl` |
| Base de datos | MySQL 8.0+ o MariaDB 10.6+ |
| Servidor web | Apache con `mod_rewrite` o Nginx |
| Conexión | HTTPS (certificado TLS) |
| Hardware mínimo de prácticas | 1 vCPU, 1–2 GB de RAM, 10 GB de disco |

::: warning-box Versiones antiguas = riesgo
Un CMS moderno sobre un PHP sin soporte es una puerta abierta a ataques. Comprueba la versión de PHP del servidor con `php -v` antes de empezar.
:::

## 2.2 Herramientas y servicios para la instalación

| Herramienta | Para qué sirve |
|-------------|----------------|
| **Pila LAMP / LEMP** | Instalación nativa en Linux, como en un servidor real. |
| **XAMPP / Laragon / WampServer** | Paquetes "todo en uno" para Windows: Apache + MariaDB + PHP + phpMyAdmin. |
| **Docker** | Contenedores listos (`wordpress`, `mariadb`) que se levantan con un único fichero `docker-compose.yml`. |
| **phpMyAdmin / Adminer** | Gestión gráfica de la base de datos. |
| **Cliente SFTP** (FileZilla, WinSCP) | Subir ficheros a un alojamiento remoto. |
| **WP-CLI** | Administrar WordPress desde la línea de comandos. |

## 2.3 Instalación en un sistema libre: Ubuntu Server 24.04

### Paso 1. Instalar la pila LAMP

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y apache2 mariadb-server php libapache2-mod-php \
  php-mysql php-curl php-gd php-mbstring php-xml php-zip php-intl unzip
sudo systemctl enable --now apache2 mariadb
php -v            # comprueba la versión de PHP
```

### Paso 2. Asegurar MariaDB y crear la base de datos

```bash
sudo mariadb-secure-installation
sudo mariadb
```

```sql
CREATE DATABASE wordpress CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'wpuser'@'localhost' IDENTIFIED BY 'Cambia_Esta_Clave_2026';
GRANT ALL PRIVILEGES ON wordpress.* TO 'wpuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

::: tip-box Principio de mínimo privilegio
Nunca uses el usuario `root` de la base de datos para el CMS. Crea **un usuario por aplicación** con permisos solo sobre su base de datos: si alguien compromete el CMS, no tendrá acceso al resto.
:::

### Paso 3. Descargar WordPress y asignar permisos

```bash
cd /tmp
wget https://es.wordpress.org/latest-es_ES.tar.gz
tar xzf latest-es_ES.tar.gz
sudo mv wordpress /var/www/html/wordpress
sudo chown -R www-data:www-data /var/www/html/wordpress
sudo find /var/www/html/wordpress -type d -exec chmod 755 {} \;
sudo find /var/www/html/wordpress -type f -exec chmod 644 {} \;
sudo a2enmod rewrite && sudo systemctl restart apache2
```

### Paso 4. Asistente web de instalación

Abre `http://IP-DEL-SERVIDOR/wordpress` en el navegador. El asistente pide:

1. **Datos de conexión a la base de datos:** nombre (`wordpress`), usuario (`wpuser`), contraseña, servidor (`localhost`) y **prefijo de tablas** (cámbialo de `wp_` a otro, por ejemplo `aw26_`, como medida de seguridad básica).
2. **Datos del sitio:** título, nombre del usuario administrador (evita `admin`), contraseña robusta y correo.

El asistente genera el fichero **`wp-config.php`**, que contiene la conexión a la base de datos y las claves de seguridad.

::: note-box 📷 Captura sugerida
Pantalla del asistente de instalación de WordPress con los datos de conexión rellenados (oculta la contraseña).
:::

## 2.4 Instalación en un sistema propietario: Windows con XAMPP

1. Descarga XAMPP desde [apachefriends.org](https://www.apachefriends.org/) e instálalo en `C:\xampp`.
2. Desde el **Panel de control de XAMPP**, inicia **Apache** y **MySQL** (en realidad, MariaDB).
3. Entra en `http://localhost/phpmyadmin` y crea la base de datos `wordpress` con cotejamiento `utf8mb4_unicode_ci` y un usuario específico.
4. Descomprime WordPress en `C:\xampp\htdocs\wordpress`.
5. Abre `http://localhost/wordpress` y sigue el mismo asistente que en Linux.

::: warning-box XAMPP es para desarrollo
XAMPP viene configurado para facilitar las pruebas, no para producción: no lo expongas a Internet sin endurecer su configuración.
:::

## 2.5 Alternativa: instalación con Docker

```yaml
# docker-compose.yml
services:
  db:
    image: mariadb:11
    environment:
      MARIADB_DATABASE: wordpress
      MARIADB_USER: wpuser
      MARIADB_PASSWORD: Cambia_Esta_Clave_2026
      MARIADB_ROOT_PASSWORD: Otra_Clave_Root_2026
    volumes: [db_data:/var/lib/mysql]
  wordpress:
    image: wordpress:latest
    ports: ["8080:80"]
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_NAME: wordpress
      WORDPRESS_DB_USER: wpuser
      WORDPRESS_DB_PASSWORD: Cambia_Esta_Clave_2026
    volumes: [wp_data:/var/www/html]
    depends_on: [db]
volumes:
  db_data:
  wp_data:
```

`docker compose up -d` y el sitio queda disponible en `http://localhost:8080`.

## 2.6 Un CMS sin base de datos: DokuWiki

DokuWiki solo necesita servidor web y PHP: guarda cada página como un fichero de texto en `data/pages/`.

```bash
cd /tmp && wget https://download.dokuwiki.org/src/dokuwiki/dokuwiki-stable.tgz
tar xzf dokuwiki-stable.tgz
sudo mv dokuwiki-20* /var/www/html/dokuwiki
sudo chown -R www-data:www-data /var/www/html/dokuwiki
```

Abre `http://IP-DEL-SERVIDOR/dokuwiki/install.php`, define el nombre de la wiki, el superusuario y la **política de ACL** inicial (wiki abierta, pública o cerrada). Después **borra `install.php`**.

## 2.7 Estructura de directorios de WordPress

```text
wordpress/
├── wp-admin/          ← panel de administración (back-end)
├── wp-includes/       ← núcleo del CMS
├── wp-content/        ← TODO lo que es tuyo
│   ├── themes/        ← temas instalados
│   ├── plugins/       ← plugins instalados
│   └── uploads/       ← imágenes y archivos subidos (por año/mes)
├── wp-config.php      ← configuración y conexión a la BD
└── index.php
```

::: info-box Qué hay que conservar
El núcleo (`wp-admin`, `wp-includes`) se puede volver a descargar. Lo que **no se puede recuperar** si se pierde es `wp-content`, `wp-config.php` y la **base de datos**. Son lo que hay que incluir en las copias de seguridad.
:::

## 2.8 Pruebas de funcionamiento

Tras instalar, comprueba de forma sistemática que todo funciona y **documenta cada prueba** (qué haces, qué esperas y qué ocurre):

| # | Prueba | Resultado esperado |
|---|--------|--------------------|
| 1 | Abrir la portada desde otro equipo de la red | La web carga sin errores |
| 2 | Acceder a `/wp-admin` con el administrador | Se muestra el escritorio |
| 3 | Crear y publicar una entrada con una imagen | Se ve en la portada y la imagen está en `wp-content/uploads` |
| 4 | Activar los enlaces permanentes "Nombre de la entrada" | Las URL son legibles y no dan error 404 (`mod_rewrite` funciona) |
| 5 | Herramientas → **Salud del sitio** | Sin problemas críticos |
| 6 | Revisar `/var/log/apache2/error.log` | Sin errores de PHP |

::: note-box 📷 Captura sugerida
Herramientas → Salud del sitio mostrando el estado tras la instalación.
:::

::: details 🔁 Autoevaluación rápida
1. ¿Por qué se crea un usuario de base de datos específico para el CMS?
2. ¿Qué tres elementos hay que copiar para poder recuperar un WordPress?
3. ¿Qué indica un error 404 al activar los enlaces permanentes y cómo se soluciona?
:::

---

**Anterior:** [← 1. Qué es un CMS](./1-conceptos-tipos) · **Siguiente:** [3. Usuarios, grupos y roles →](./3-usuarios-roles)
