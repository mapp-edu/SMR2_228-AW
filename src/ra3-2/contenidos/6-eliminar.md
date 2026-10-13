---
layout: doc
title: Eliminar elementos
sidebar: true
outline: [2, 3]
aside: true
---

# 6. Eliminación de elementos

<ExportPDF />

::: accent-box purple 🎯 Objetivos
- Eliminar elementos del documento de distintas formas (CE k).
- Vaciar contenedores y sustituir elementos.
- Distinguir entre eliminar y ocultar.
:::

## 6.1 Eliminar un elemento: `remove()`

```js
const banner = document.querySelector("#banner-cookies");
banner.remove();     // desaparece del DOM
```

Es la forma moderna y la más sencilla. El elemento deja de existir en la página (aunque, si lo tenías guardado en una variable, podrías volver a insertarlo).

## 6.2 La forma clásica: `removeChild()`

Antes de `remove()`, había que pedírselo al **padre**:

```js
const lista = document.querySelector(".productos");
const primero = lista.firstElementChild;
lista.removeChild(primero);

// Equivalente desde el propio elemento:
primero.parentElement.removeChild(primero);
```

La verás en código antiguo y en muchos tutoriales; el resultado es el mismo.

## 6.3 Eliminar varios elementos

```js
// Todos los productos agotados
document.querySelectorAll('.producto[data-stock="0"]')
  .forEach(el => el.remove());
```

::: warning-box Cuidado con las colecciones vivas
`getElementsByClassName` devuelve una colección **viva**: al borrar un elemento, la colección se encoge y un bucle `for` con índice se salta elementos. Con `querySelectorAll` (lista **estática**) no ocurre.
:::

## 6.4 Vaciar un contenedor

```js
const lista = document.querySelector(".productos");

lista.textContent = "";        // forma rápida
lista.replaceChildren();       // forma moderna y explícita

while (lista.firstChild) {     // forma clásica
  lista.firstChild.remove();
}
```

## 6.5 Sustituir un elemento

```js
const viejo = document.querySelector("#aviso");
const nuevo = document.createElement("p");
nuevo.textContent = "Tienda cerrada por inventario";
viejo.replaceWith(nuevo);
```

## 6.6 Eliminar un elemento al pulsar un botón

El caso más habitual: cada elemento de una lista tiene su botón de borrar.

```html
<ul id="tareas">
  <li>Instalar WordPress <button class="borrar">✕</button></li>
  <li>Configurar Moodle <button class="borrar">✕</button></li>
</ul>
```

```js
document.querySelector("#tareas").addEventListener("click", (e) => {
  if (e.target.classList.contains("borrar")) {
    e.target.closest("li").remove();
  }
});
```

::: info-box Delegación de eventos
En lugar de poner un "escuchador" en cada botón, se pone **uno solo en la lista** y se comprueba qué se ha pulsado (`e.target`). Funciona también con los elementos que se añadan después. Lo verás con detalle en el apartado 6.
:::

## 6.7 ¿Eliminar u ocultar?

| | Eliminar (`remove()`) | Ocultar (`hidden` / CSS) |
|---|---|---|
| ¿Sigue en el DOM? | No | Sí |
| ¿Se puede volver a mostrar fácilmente? | Hay que volver a crearlo o insertarlo | Sí, cambiando un atributo o una clase |
| Uso típico | Borrar una tarea, cerrar un aviso definitivamente | Menús desplegables, pestañas, mostrar/ocultar detalles |

```js
const detalle = document.querySelector("#detalle");
detalle.hidden = true;     // oculto
detalle.hidden = false;    // visible de nuevo
```

::: details 🔁 Autoevaluación rápida
1. Escribe dos formas de eliminar el elemento con id `promo`.
2. ¿Cómo vaciarías una tabla (`tbody`) antes de volver a rellenarla?
3. ¿Por qué un bucle `for` con índice sobre `getElementsByClassName` puede dejar elementos sin borrar?
4. Para un menú que se despliega y se recoge, ¿eliminarías u ocultarías? ¿Por qué?
:::

---

**Anterior:** [← 5. Crear y modificar](./5-crear-modificar) · **Siguiente:** [7. Manipular estilos →](./7-estilos)
