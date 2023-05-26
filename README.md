# React

[Invitación a Classroom](https://classroom.google.com/c/NTg0NTY4MTAxMTg4?cjc=eyufnhy)

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

Si deseamos escribir JavaScript puro entre estas marcas o sea utilizar __expresiones__, en __React__ se puden utilizar las llaves de apertura y cierre: __{expresión}__. Mira el siguiente __Functional Component__:

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

- [x] Crea un Componente botón y renderízalo en tu app
- [x] Crear un fichero js con un __objeto literal__ con la información de tu nombre, apellidos y edad. Expórtalo y muestra los resultados en tu __app__
- [] Intenta recrear al siguiente captura de pantalla

![Counter](./assets/counter.png)