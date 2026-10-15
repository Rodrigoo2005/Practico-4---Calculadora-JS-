# Explicacion de caracteristicas de POO (Ejercicio 2)

## -Caracteristicas Utilizadas e Implementadas

### Abstraccion
Se represento el concepto de una calculadora mediante la creacion de la clase `Calculadora`. Se identificaron unicamente los atributos esenciales para el problema (`#resultado`, `#operador`, `#numero1`, `#numero2`) y los metodos necesarios para gestionar las operaciones y entradas del usuario (`conseguirOperador()`, `pedirNumeros()`, `realizarOperacion()`, etc.)

### Encapsulamiento y principio de ocultacion
Se agruparon los datos de la calculadora junto con los metodos que operan sobre ellos dentro de una unica unidad (`class Calculadora`). Tambien se restringe el acceso directo a los atributos internos desde fuera de la clase. De esta manera, el modulo externo (`Menu.js`) interactua solamente a traves de una interfaz de metodos publicos, evitando modificaciones accidentales del estado

### Modularidad
Dividiendo el sistema en dos archivos independientes (`Calculadora.js` y `Menu.js`). El primero se encarga exclusivamente de la definicion de la clase y la logica de calculo, mientras que el segundo gestiona la ejecucion principal del programa..

---

## -Caracteristicas no usadas

### Herencia
En este ejercicio, al tratarse de una unica entidad `Calculadora` con un conjunto definido de operaciones, no fue necesario establecer una jerarquia de clases base y subclases.

### Polimorfismo
Al existir unicamente un tipo de objeto en la ejecución del programa, no se presentaron escenarios donde fuera necesario tratar multiples tipos de objetos