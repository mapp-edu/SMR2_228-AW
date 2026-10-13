// ============================================================================
// CONFIGURACIÓN DE UNIDADES — Navegación y Contenidos
// ============================================================================
//
// 👤 EDITA ESTE ARCHIVO para definir los módulos/unidades del curso
//    y su navegación (navbar y sidebar).
//
// MÓDULO 0228 · APLICACIONES WEB (CFGM SMR, 2º curso)
// El curso se organiza en una unidad por Resultado de Aprendizaje (RA):
//
//   code    Carpeta        Resultado de aprendizaje
//   ─────── ────────────── ─────────────────────────────────────────────────
//   ra1     src/ra1/       RA1   · Gestores de contenidos (CMS)
//   ra2     src/ra2/       RA2   · Sistemas de gestión de aprendizaje (LMS)
//   ra3-1   src/ra3-1/     RA3.1 · Lenguajes de marcas: HTML5 y CSS3
//   ra3-2   src/ra3-2/     RA3.2 · Gestión de archivos web y script de cliente
//   ra4     src/ra4/       RA4   · Ofimática y diseño web en la nube
//   ra5     src/ra5/       RA5   · Internet y aplicaciones web de escritorio
//   general src/general/   Guía de uso de la plantilla EduPress (docente)
//
// FLUJO RÁPIDO:
//   1. Crea los archivos .md en src/<code>/contenidos/ y src/<code>/ejercicios/
//   2. Añade los links aquí (en navbar y sidebar)
//   3. El sistema detecta todas las unidades automáticamente:
//        /<code>/ → carga el sidebar de esa unidad
//        /        → raíz sin sidebar (página de inicio)
//
// ============================================================================

import { DefaultTheme } from 'vitepress'
import type { NavGroup } from '../shared/navigation'

// ============================================================================
// 1. NAVBARS Y SIDEBARS
// ============================================================================

// Navbar estándar de una unidad de RA: cada unidad aparece en la barra
// superior como un desplegable con estas cuatro entradas.
// (Los links se prefijan automáticamente con /<code>/)
function raNavbar(primerContenido: string): DefaultTheme.NavItem[] {
  return [
    { text: '📖 Presentación', link: '/index' },
    { text: '📚 Apuntes', link: primerContenido },
    { text: '🎞️ Diapositivas', link: '/contenidos/diapositivas' },
    { text: '🛠️ Prácticas y rúbricas', link: '/ejercicios/' },
  ]
}

// --- RA1 · Gestores de contenidos ---------------------------------------------
const sidebarRA1: DefaultTheme.SidebarItem[] = [
  { text: '📖 Presentación de la unidad', link: '/index' },
  {
    text: '📚 Apuntes',
    collapsed: false,
    items: [
      { text: '1. Qué es un CMS. Tipos', link: '/contenidos/1-conceptos-tipos' },
      { text: '2. Requisitos e instalación', link: '/contenidos/2-requisitos-instalacion' },
      { text: '3. Usuarios, grupos y roles', link: '/contenidos/3-usuarios-roles' },
      { text: '4. Interfaz, módulos y menús', link: '/contenidos/4-interfaz-modulos-menus' },
      { text: '5. Foros y reglas de acceso', link: '/contenidos/5-foros' },
      { text: '6. Seguridad, actualizaciones e informes', link: '/contenidos/6-seguridad-actualizaciones' },
      { text: '7. Copias de seguridad', link: '/contenidos/7-copias-seguridad' },
      { text: '🎞️ Diapositivas', link: '/contenidos/diapositivas' },
    ]
  },
  {
    text: '🛠️ Prácticas',
    collapsed: false,
    items: [
      { text: 'Índice y evaluación', link: '/ejercicios/' },
      { text: 'P1 · Instalación de WordPress', link: '/ejercicios/p1-instalacion' },
      { text: 'P2 · Usuarios, apariencia y menús', link: '/ejercicios/p2-usuarios-personalizacion' },
      { text: 'P3 · Foro, seguridad y copias', link: '/ejercicios/p3-foro-seguridad-copias' },
    ]
  },
]

// --- RA2 · Sistemas de gestión de aprendizaje ---------------------------------
const sidebarRA2: DefaultTheme.SidebarItem[] = [
  { text: '📖 Presentación de la unidad', link: '/index' },
  {
    text: '📚 Apuntes',
    collapsed: false,
    items: [
      { text: '1. E-learning y LMS', link: '/contenidos/1-conceptos-tipos' },
      { text: '2. Instalación y estructura', link: '/contenidos/2-instalacion-estructura' },
      { text: '3. Personalización del entorno', link: '/contenidos/3-personalizacion' },
      { text: '4. Cursos, usuarios y perfiles', link: '/contenidos/4-cursos-usuarios' },
      { text: '5. Recursos, actividades y comunicación', link: '/contenidos/5-recursos-actividades' },
      { text: '6. Administración: copias e informes', link: '/contenidos/6-administracion' },
      { text: '🎞️ Diapositivas', link: '/contenidos/diapositivas' },
    ]
  },
  {
    text: '🛠️ Prácticas',
    collapsed: false,
    items: [
      { text: 'Índice y evaluación', link: '/ejercicios/' },
      { text: 'P1 · Instalación y estructura de Moodle', link: '/ejercicios/p1-instalacion' },
      { text: 'P2 · Aspecto, cursos y perfiles', link: '/ejercicios/p2-cursos-perfiles' },
      { text: 'P3 · Comunicación, copias e informes', link: '/ejercicios/p3-comunicacion-copias' },
    ]
  },
]

// --- RA3.1 · HTML5 y CSS3 -------------------------------------------------------
const sidebarRA31: DefaultTheme.SidebarItem[] = [
  { text: '📖 Presentación de la unidad', link: '/index' },
  {
    text: '📚 Apuntes',
    collapsed: false,
    items: [
      { text: '1. Lenguajes de marcas', link: '/contenidos/1-lenguajes-marcas' },
      { text: '2. Estructura de un documento HTML', link: '/contenidos/2-estructura-html' },
      { text: '3. HTML frente a HTML5', link: '/contenidos/3-html-vs-html5' },
      { text: '4. Hojas de estilo CSS y CSS3', link: '/contenidos/4-css' },
      { text: '5. Plantillas y herramientas', link: '/contenidos/5-plantillas-herramientas' },
      { text: '6. Ampliación: HTML5 y CSS3 paso a paso', link: '/contenidos/6-ampliacion-html5-css3' },
      { text: '🎞️ Diapositivas', link: '/contenidos/diapositivas' },
    ]
  },
  {
    text: '🛠️ Prácticas',
    collapsed: false,
    items: [
      { text: 'Índice y evaluación', link: '/ejercicios/' },
      { text: 'P1 · Documento HTML5 semántico', link: '/ejercicios/p1-documento-html5' },
      { text: 'P2 · Hoja de estilo y plantilla', link: '/ejercicios/p2-css-plantilla' },
      { text: 'P3 · Mini sitio y comparativa', link: '/ejercicios/p3-sitio-comparativa' },
    ]
  },
]

// --- RA3.2 · Gestión de archivos web y script de cliente ---------------------
const sidebarRA32: DefaultTheme.SidebarItem[] = [
  { text: '📖 Presentación de la unidad', link: '/index' },
  {
    text: '📚 Apuntes · Gestión de archivos web',
    collapsed: false,
    items: [
      { text: '1. Servicios de gestión de archivos web', link: '/contenidos/1-gestion-archivos-web' },
      { text: '2. Instalación y administración', link: '/contenidos/2-gestor-archivos' },
    ]
  },
  {
    text: '📚 Apuntes · JavaScript y DOM',
    collapsed: false,
    items: [
      { text: '3. JavaScript: lenguajes y sintaxis', link: '/contenidos/3-javascript-basico' },
      { text: '4. El DOM. Selección de elementos', link: '/contenidos/4-dom-seleccion' },
      { text: '5. Crear y modificar elementos', link: '/contenidos/5-crear-modificar' },
      { text: '6. Eliminar elementos', link: '/contenidos/6-eliminar' },
      { text: '7. Manipular estilos', link: '/contenidos/7-estilos' },
      { text: '8. Eventos y formularios', link: '/contenidos/8-eventos-formularios' },
      { text: '🎞️ Diapositivas', link: '/contenidos/diapositivas' },
    ]
  },
  {
    text: '🛠️ Prácticas',
    collapsed: false,
    items: [
      { text: 'Índice y evaluación', link: '/ejercicios/' },
      { text: 'P1 · Gestor de archivos web', link: '/ejercicios/p1-gestor-archivos' },
      { text: 'P2 · Seleccionar y modificar', link: '/ejercicios/p2-seleccionar-modificar' },
      { text: 'P3 · Lista de tareas dinámica', link: '/ejercicios/p3-lista-tareas' },
      { text: 'P4 · Formulario con validación', link: '/ejercicios/p4-formulario' },
    ]
  },
]

// --- RA4 · Nube ----------------------------------------------------------------
const sidebarRA4: DefaultTheme.SidebarItem[] = [
  { text: '📖 Presentación de la unidad', link: '/index' },
  {
    text: '📚 Apuntes',
    collapsed: false,
    items: [
      { text: '1. Aplicaciones web en la nube', link: '/contenidos/1-cloud-computing' },
      { text: '2. Almacenamiento y gestión de archivos', link: '/contenidos/2-almacenamiento-archivos' },
      { text: '3. Cuentas de usuario y seguridad', link: '/contenidos/3-cuentas-seguridad' },
      { text: '4. Drive y Docs: trabajo colaborativo', link: '/contenidos/4-drive-docs' },
      { text: '5. Sheets, Slides, Calendar, Forms y My Maps', link: '/contenidos/5-sheets-slides-calendar-forms' },
      { text: '6. Diseño web en la nube', link: '/contenidos/6-diseno-web-nube' },
      { text: '7. Comparativa de suites', link: '/contenidos/7-comparativa-suites' },
      { text: '🎞️ Diapositivas', link: '/contenidos/diapositivas' },
    ]
  },
  {
    text: '🛠️ Prácticas',
    collapsed: false,
    items: [
      { text: 'Índice y evaluación', link: '/ejercicios/' },
      { text: 'P1 · Cuenta segura y Drive ordenado', link: '/ejercicios/p1-cuenta-drive' },
      { text: 'P2 · Proyecto colaborativo', link: '/ejercicios/p2-colaborativo' },
      { text: 'P3 · Google Sites vs Weebly', link: '/ejercicios/p3-sites-weebly' },
    ]
  },
]

// --- RA5 · Internet y aplicaciones web de escritorio ---------------------------
const sidebarRA5: DefaultTheme.SidebarItem[] = [
  { text: '📖 Presentación de la unidad', link: '/index' },
  {
    text: '📚 Apuntes',
    collapsed: false,
    items: [
      { text: '1. Conceptos básicos de Internet', link: '/contenidos/1-internet' },
      { text: '2. La web y su evolución', link: '/contenidos/2-web-evolucion' },
      { text: '3. Navegadores y servidores web', link: '/contenidos/3-navegadores-servidores' },
      { text: '4. Servicio web, estructura y BD', link: '/contenidos/4-servicio-web-bd' },
      { text: '5. Aplicaciones web de escritorio', link: '/contenidos/5-aplicaciones-escritorio' },
      { text: '6. Webmail y calendario web', link: '/contenidos/6-webmail-calendario' },
      { text: '🎞️ Diapositivas', link: '/contenidos/diapositivas' },
    ]
  },
  {
    text: '🛠️ Prácticas',
    collapsed: false,
    items: [
      { text: 'Índice y evaluación', link: '/ejercicios/' },
      { text: 'P1 · Cómo viaja una página web', link: '/ejercicios/p1-como-viaja-web' },
      { text: 'P2 · Servidor web propio', link: '/ejercicios/p2-servidor-web' },
      { text: 'P3 · Webmail y calendario', link: '/ejercicios/p3-webmail-calendario' },
    ]
  },
]

// --- Guía de la plantilla EduPress (material para el docente) -----------------
/* const guiaNavbar: DefaultTheme.NavItem[] = [
  { text: '📘 Guía de EduPress', link: '/index' },
  { text: '🧩 Catálogo de componentes', link: '/contenidos/8-componentes' },
  { text: '🎞️ Crear diapositivas', link: '/contenidos/9-diapositivas' },
]

const guiaSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '📚 Primeros pasos',
    collapsed: false,
    items: [
      { text: 'Introducción', link: '/contenidos/1-introduccion' },
      { text: 'Instalación y Arranque', link: '/contenidos/2-instalacion' },
      { text: 'Estructura del Proyecto', link: '/contenidos/3-estructura' },
    ]
  },
  {
    text: '🛠️ Configura tu curso',
    collapsed: false,
    items: [
      { text: 'Curso único', link: '/contenidos/4-curso-unico' },
      { text: 'Curso modular', link: '/contenidos/5-curso-modular' },
      { text: 'Configuración e Identidad', link: '/contenidos/6-configuracion' },
    ]
  },
  {
    text: '✍️ Crea contenidos',
    collapsed: false,
    items: [
      { text: 'Crear Contenidos', link: '/contenidos/7-crear-contenidos' },
      { text: 'Catálogo de Componentes', link: '/contenidos/8-componentes' },
    ]
  },
  {
    text: '🎞️ Diapositivas e Imágenes',
    collapsed: true,
    items: [
      { text: 'Crear Diapositivas', link: '/contenidos/9-diapositivas' },
      { text: 'Catálogo de Patrones', link: '/contenidos/10-diapositivas-demo' },
      { text: 'Imágenes para Contenido', link: '/contenidos/11-imagenes' },
    ]
  },
  {
    text: '🌐 Publicación',
    collapsed: true,
    items: [
      { text: 'Despliegue', link: '/contenidos/12-despliegue' },
      { text: 'Privacidad y Acceso', link: '/contenidos/14-privacidad-acceso' },
    ]
  },
  {
    text: '📖Ejemplos',
    collapsed: true,
    items: [
      { text: 'Guia del curso', link: '/contenidos/13-ejemplo-guia' },
    ]
  },
  {
    text: '🗂️ Ejercicios',
    collapsed: true,
    items: [
      { text: 'Introducción', link: '/ejercicios/' },
      { text: 'Imágenes en Ejercicios', link: '/ejercicios/imagenes-ejercicios' },
      {
        text: 'Ejemplos',
        items: [
          { text: 'Historia gamificada (parallax)', link: '/ejercicios/ejercicio' },
          { text: 'Enunciado directo (Markdown)', link: '/ejercicios/enunciado' },
        ]
      }
    ]
  }
] */

// ============================================================================
// 2. REGISTRO DE UNIDADES
// ============================================================================
// Propiedades de cada unidad:
//   id        — Identificador único (debe coincidir con la clave del objeto)
//   code      — Prefijo de URL. Los links del navbar/sidebar se prefijarán
//               automáticamente con /<code>/
//   title     — Nombre corto (aparece en la barra superior)
//   fullTitle — Nombre completo (aparece en la pestaña del navegador)
//   siteTitle — Nombre en el sidebar (puede usar </br> para saltos de línea)
//   icon      — Emoji decorativo del módulo
//   navbar    — Ítems del menú superior de esta unidad
//   sidebar   — Ítems del panel lateral de esta unidad

export interface UnitConfig {
  id: string
  code: string
  title: string
  fullTitle: string
  siteTitle: string
  icon: string
  navbar: DefaultTheme.NavItem[]
  sidebar: DefaultTheme.SidebarItem[]
}

export const UNITS: Record<string, UnitConfig> = {

  // Página de inicio — sin navegación de curso. No suele necesitar cambios.
  root: {
    id: 'root',
    code: 'root',
    title: 'AWEB',
    fullTitle: 'Aplicaciones WEB',
    siteTitle: 'Aplicaciones</br>WEB',
    icon: '📐',
    navbar: [{ text: '🏠 Inicio', link: '/' }],
    sidebar: []
  },

  RA1: {
    id: 'RA1',
    code: 'ra1',
    title: 'RA1',
    fullTitle: 'RA1 · Instalación y administración de gestores de contenidos',
    siteTitle: 'RA1</br>Gestores de contenidos',
    icon: '🧱',
    navbar: raNavbar('/contenidos/1-conceptos-tipos'),
    sidebar: sidebarRA1
  },

  RA2: {
    id: 'RA2',
    code: 'ra2',
    title: 'RA2',
    fullTitle: 'RA2 · Instalación y administración de entornos virtuales de aprendizaje',
    siteTitle: 'RA2</br>Aprendizaje a distancia',
    icon: '🎓',
    navbar: raNavbar('/contenidos/1-conceptos-tipos'),
    sidebar: sidebarRA2
  },

  RA3_1: {
    id: 'RA3_1',
    code: 'ra3-1',
    title: 'RA3.1',
    fullTitle: 'RA3.1 · Elaboración de páginas web con lenguajes de marcas',
    siteTitle: 'RA3.1</br>HTML5 y CSS3',
    icon: '🏷️',
    navbar: raNavbar('/contenidos/1-lenguajes-marcas'),
    sidebar: sidebarRA31
  },

  RA3_2: {
    id: 'RA3_2',
    code: 'ra3-2',
    title: 'RA3.2',
    fullTitle: 'RA3.2 · Gestión de archivos web y script de cliente',
    siteTitle: 'RA3.2</br>Archivos web y JavaScript',
    icon: '⚡',
    navbar: raNavbar('/contenidos/1-gestion-archivos-web'),
    sidebar: sidebarRA32
  },

  RA4: {
    id: 'RA4',
    code: 'ra4',
    title: 'RA4',
    fullTitle: 'RA4 · Aplicaciones web en la nube y herramientas de diseño web',
    siteTitle: 'RA4</br>Ofimática y web en la nube',
    icon: '☁️',
    navbar: raNavbar('/contenidos/1-cloud-computing'),
    sidebar: sidebarRA4
  },

  RA5: {
    id: 'RA5',
    code: 'ra5',
    title: 'RA5',
    fullTitle: 'RA5 · Internet y aplicaciones web de escritorio',
    siteTitle: 'RA5</br>Internet y apps web',
    icon: '🌐',
    navbar: raNavbar('/contenidos/1-internet'),
    sidebar: sidebarRA5
  },

  // Guía de uso de la plantilla (referencia para el docente).
  /*MODULO: {
    id: 'MODULO',
    code: 'general',    // → archivos en src/general/
    title: 'Guía',
    fullTitle: 'Guía de la plantilla EduPress',
    siteTitle: 'Guía</br>EduPress',
    icon: '📘',
    navbar: guiaNavbar,
    sidebar: guiaSidebar
  }, */

}

// ============================================================================
// FUNCIONES DE ACCESO — No modificar
// ============================================================================

export function getAllUnitsArray(): UnitConfig[] {
  return Object.values(UNITS)
}

export function getUnitByCode(code: string): UnitConfig | undefined {
  return UNITS[code]
}

// ── Navbar dinámico por unidad (opcional) ────────────────────────────────
export const unitNavbars: Record<string, NavGroup[]> = {}
