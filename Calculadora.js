const prompt = require("prompt-sync")();

class Calculadora {

    // ATRIBUTOS PRIVADOS
    #resultado;
    #operador;
    #numero1;
    #numero2;

    // INICIALIZAR
    constructor() {
        this.#resultado = 0;
        this.#operador = "";
        this.#numero1 = 0;
        this.#numero2 = 0;
    }

    // GETTER
    get resultado() {
        return this.#resultado;
    }

    // CONSEGUIR OPERADOR
    conseguirOperador() {
        let operador;
        const operadoresValidos = ['+', '-', '*', '/', '0'];

        do {
            operador = prompt("Ingrese el operador (+, -, *, / o 0 para salir): ");
            console.clear();

            if (!operadoresValidos.includes(operador)) {
                console.log("Ingrese un operador valido. ❌");
            }
        } while (!operadoresValidos.includes(operador));

        this.#operador = operador;
        return operador;
    }

    // PEDIR NUMEROS
    pedirNumeros() {
        // NUMERO 1
        do {
            this.#numero1 = Number(prompt("Ingrese el primer numero: "));
            console.clear();

            if (isNaN(this.#numero1)) {
                console.log("Ingrese un numero valido. ❌");
            }
        } while (isNaN(this.#numero1));

        // NUMERO 2
        do {
            this.#numero2 = Number(prompt("Ingrese el segundo numero: "));
            console.clear();

            if (isNaN(this.#numero2)) {
                console.log("Ingrese un numero valido. ❌");
            } else if (this.#operador === '/' && this.#numero2 === 0) {
                console.log("No se puede dividir por cero. ❌");
            }
        } while (isNaN(this.#numero2) || (this.#operador === '/' && this.#numero2 === 0));
    }

    // OPERACIONES INDIVIDUALES
    sumar() { return this.#numero1 + this.#numero2; }
    restar() { return this.#numero1 - this.#numero2; }
    multiplicar() { return this.#numero1 * this.#numero2; }
    dividir() { return this.#numero1 / this.#numero2; }

    // REALIZAR OPERACION
    realizarOperacion() {
        switch (this.#operador) {
            case '+':
                this.#resultado = this.sumar();
                break;
            case '-':
                this.#resultado = this.restar();
                break;
            case '*':
                this.#resultado = this.multiplicar();
                break;
            case '/':
                this.#resultado = this.dividir();
                break;
            default:
                this.#resultado = 0;
        }

        return this.#resultado;
    }
}

module.exports = Calculadora;