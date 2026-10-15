const Calculadora = require("./Calculadora");

const calculadora = new Calculadora();
let operador;

do {
    // PEDIR OPERADOR
    operador = calculadora.conseguirOperador();

    // SALIR
    if (operador === '0') {
        console.log("Saliendo de la calculadora...");
        break;
    }

    // PEDIR NUMEROS
    calculadora.pedirNumeros();

    // REALIZAR OPERACION Y MOSTRAR RESULTADO
    const resultado = calculadora.realizarOperacion();

    console.clear();
    console.log("🌟 El resultado final es: " + resultado + " 🌟\n");

} while (operador !== '0');