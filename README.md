# React

[Invitación a Classroom](https://classroom.google.com/c/NTg0NTY4MTAxMTg4?cjc=eyufnhy)

## JavaScript imprescindible

### Destructuring

```js
const YO = { 
  nombre: 'Xurxo',
  apellido1: 'González',
  apellido2: 'Tenreiro'
}

// Desetructuración de un "Objeto Literal"
const { nombre, apellido1, apellido2 = 'Desconocido' } = YO

```

La __desestructuración__ la utilizamos siempre aunque a veces no nos demos cuenta. Por ejemplo cuando desestructuramos las __props__ de un componente:

```js
function MiApp ({ value }) {
  return (<div>{value}</div>)
}
```

También podemos _desestructurar_ un __array__:

```js
const numeros = [1, 2, 3]

const [num1, num2, num3] = numeros
```

### Array.prototype.map

> El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
> <cite>[Mozilla Docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)<cite>

__IMPORTANTE__: Los resultados de cada __iteración__ se deben __retornar__.

```js
var numbers = [1, 5, 10, 15]
var doubles = numbers.map(function (x) {
   return x * 2; // AQUÍ EL RETORNO
})
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]
```

Para __renderizar listas__ a través de una expresiones son perfectos. Ejemplo de [react.dev](https://es.react.dev/learn#rendering-lists):

```js
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
]

function ProductsApp () {
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  )

  return (
    <ul>{listItems}</ul>
  )
}

## Librerías de React

Para trabajar con __reactjs__ son imprecindibles dos __dependencias__

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
```

Estas serán colocadas en el __entry point__ de nuestro proyecto. Por ejemplo en __vitejs__ sería __main.jsx__

## React. ¿Qué es?

Como indica su [página oficial](https://es.react.dev/) se trata de una __biblioteca__ o __librería__ para la creación de __interfaces__ des usuario _web_ y _nativas_.

No es más que una  __librería nativa de JavaScript__ que nos facilita el trabajo a la hora de __renderizar__ código, trabajar con __estados__ y mucho más.

## Functional Component

En __react__ los __componentes__ son __funciones__ que retornan un __elemento react__ y no un __elemento del DOM__

```js
/*
 * Function Component
 * @return {React.Element} ¡No retorna un DOM.Element'
*/
function XurxoApp () {
  return (<>Soy Xurxo</>)
}
```

## Impresión de variables

Un __componente react__ siempre retorna una __etiqueta de marcado__. Pero estas marcas no son __JavaScript__

```js
  return (<h1>Hola<h1>)
```

Si deseamos escribir JavaScript puro entre estas marcas o sea utilizar __expresiones__, en __React__ se deben utilizar las llaves de apertura y cierre: __{expresión}__. Mira el siguiente __Functional Component__:

```js
function Saludar () {
  const nombre = 'Xurxo'
  return (
    <h1>Hola {nombre}</h1>
  )
}
```

# Sesión 2
- Crear otro proyecto vite
- Mirar la plantilla que carga por defeto Vite (Antes de borrar contenido)
  - Errors eslint en ruta App.jsx
  - Mirar qué tipo de importanción realizar Apps
- Renombrar App por CounterApp
- Borra todo el contenido de la aplicación
- Ejercicio 3

## Ejercicios

1. [x] Crea un Componente botón y renderízalo en tu app
2. [x] Crear un fichero js con un __objeto literal__ con la información de tu nombre, apellidos y edad. Expórtalo y muestra los resultados en tu __app__
3. [] Intenta recrear la siguiente captura de pantalla

![Counter](./assets/counter.png)