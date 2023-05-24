# React

[Invitació a Classroom](https://classroom.google.com/c/NTg0NTY4MTAxMTg4?cjc=eyufnhy)

## Librerías de React

Para trabajar con __reactjs__ son imprecindibles dos __dependencias__

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
```

Estas serán colocadas en el __entry point__ de nuestro proyecto. Por ejemplo en __vitejs__ sería __main.jsx__

## Impresión de variables

Las __expresiones__ en react se puden escribir en nuestros elementos __React__. Lo único que hay que utilizar son las llaves de apertura y cierre. Mira el siguiente __function component__:

```js
function Saludar () {
  const nombre = 'Xurxo'
  return (
    <p>Hola me llamo {nombre}</p>
  )
}
```

## Function Component

En __react__ los __componentes__ son __funciones__ que retornan un __elemento react__ y no un __elemento del DOM__

```js
/*
 * Function Component
 * @return {React.Element} ¡No retorna un Elemento del DOM'
*/
function XurxoApp () {
  return (<>Soy Xurxo</>)
}
```

## Ejercicios

- [] Crea un Componente botón y renderízalo en tu app
- [] Crear un fichero js con un __objeto literal__ con la información de tu nombre, apellidos y edad. Expórtalo y muestra los resultados en tu __app__