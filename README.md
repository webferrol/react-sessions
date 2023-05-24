# React

## Librerías de React

Para trabajar con __reactjs__ son imprecindibles dos __dependencias__

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
```

Estas serán colocadas en el __entry point__ de nuestro proyecto. Por ejemplo en __vitejs__ sería __main.jsx__


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

## Ejercicio

- [] Crea un Componente botón y renderízalo en tu app