# Ejercicios con SHALLOW CLONE y DEEP CLONE


1. Haz un clonado superfical con __spread operator__

```js
const numeros = [1, 2, 3, 4, 5];
const numerosCopia = numeros.slice(); // Una forma de hacer una copia superficial
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosCopia); // [1, 2, 3, 4, 5]

// Realiza lo mismo  con el array de números pero con spread operator

```

2. Realiza un clonado superficial del siguiente objeto

```js
const objetoOriginal = {
  nombre: 'Juan',
  edad: 30,
}

// Tu código aquí

```

3. Añadiendo elementos a un array

```jsx
const miNombre = 'Xurxo'
const [nombres, setNombres] = useState(['Manolo', 'Andrés'])

// Añade miNombre al Array nombres mediante un clonado superficial
```

4. Realiza un clonado profundo del siguiente objeto

```js
const objetoOriginal = {
  nombre: 'Juan',
  edad: 30,
  datos: {
    numero: 1,
  },
};

// Tu código aquí


```