function sumarElementos(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) { // Error aquí
        suma += numeros[i];
    }

    return suma;
}

const resultado = sumarElementos([1, 2, 3, 4, 5]);
console.log("La suma es:", resultado);
