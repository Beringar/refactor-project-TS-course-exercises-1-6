# Ejercicios TypeScript

# Ejercicios TypeScript

## Ejercicio 1

Crea una variable donde vas a guardar el grado de dificultad de un juego. Los grados de dificultad pueden ser: "Easy", "Medium" o "Hard". Crea un alias para ello.

## Ejercicio 2

Crea un _enum_ para los cuatro estados que puede tener un pedido en un ecommerce. Un pedido puede estar pendiente, en proceso, entregado o devuelto.

Crea una variable donde vas a guardar el estado de un pedido. Utiliza el enum para ello.

## Ejercicio 3

Estás desarrollando una tienda online de videojuegos. Borra las dos variables que has creado en los puntos anteriores, pero deja los tipados.

Modela todas las _id_ de este ejercicio como `string`.

1. Crea un tipado para modelar un juego. Un juego debe contener la siguiente información:

- Un id de juego
- Un nombre
- Una descripción
- Una dificultad
- Un precio
- Un listado de plataformas disponibles

2. Crea un tipado para modelar un comprador. Un comprador debe contener la siguiente información:

- Un id de comprador
- Un nombre
- Un email
- Una edad
- Un username
- Una contraseña

3. Crea un tipado para modelar un pedido. Un pedido debe contener la siguiente información:

- Un id de pedido
- Un comprador (con todos sus datos)
- Un listado de juegos comprados
- Un estado de pedido
- Un importe total de pedido

4. Crea una variable que almacene tres juegos. Ayúdate de Intellisense para añadir correctamente los datos.

5. Crea una variable que almacene un comprador.

6. Crea una función `createOrder` que reciba un listado de juegos y un comprador y devuelva un pedido con todos los datos. Debe comprobar que el comprador tiene 18 años o más. Si no es así, debe lanzar un error.

7. Crea una variable que almacene un pedido. Utiliza la función `createOrder` para crear el pedido.

8. Crea una función `getOrderStatus` que reciba un pedido y devuelva el estado del pedido.

9. Crea una función `getOrderTotal` que reciba un pedido y devuelva el importe total del pedido.

10. Crea una función `getOrderGames` que reciba un pedido y devuelva el listado de juegos del pedido.

## Ejercicio 4

Crea una función llamada `getWrappedValue` que reciba un valor de cualquier tipo y devuelva un objeto con una propiedad `value` que apunte al valor recibido.

P.e.:

```
getWrappedValue(5) // { value: 5 }
getWrappedValue("hola") // { value: "hola" }
```

## Ejercicio 5

Crea una interfaz para modelar un libro. Un libro tendrá título, autor, género y año de publicación.

Crea una interfaz para modelar la información ampliada de un libro, que tendrá, además de las propiedades del libro, un formato papel o digital.

Crea una función llamada `getBookInfo` que reciba un objeto de tipo libro y devuelva un string con el siguiente formato:

```
"El libro <título> escrito por <autor> se publicó en el año <año>"
```

Crea una función llamada `getBookExtendedInfo` que reciba un objeto de tipo libro y devuelva un string con el siguiente formato:

```
"El libro <título> escrito por <autor> se publicó en el año <año> en formato <formato>"
```

Crea una función llamada `getPaperBooks` que reciba un array de libros y devuelva un array con los libros que sean en formato papel.

Crea una variable para almacenar las estadísticas de la tienda de libros. Los datos que tiene que llevar son:

- Número total de libros
- Número total de libros en formato papel
- Número total de libros en formato digital
- Número total de libros de Edgar Allan Poe
- Número total de libros de Mary Shelley
- Si el libro "Frankenstein" está disponible en formato papel

Si para resolver este ejercicio necesitas crear funciones auxiliares, hazlo.

# Ejercicio 6

Crea una función que haga exactamente lo mismo que `map()` pero sin usar `map()`. La única diferencia (aparte del nombre) será que la función que crees tiene que recibir el array como parámetro.

Ejemplo de uso:

```
myMap([1, 2, 3], (number) => number * 2) // [2, 4, 6]
```
