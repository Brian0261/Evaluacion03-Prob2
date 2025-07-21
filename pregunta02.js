function ordenarLista(array) {
  let numeros = array;
  let n = numeros.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (numeros[j] > numeros[j + 1]) {
        let temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
      }
    }
  }

  return numeros;
}

const array = [1, 5, 10, 258, 1, 0, 145];
const listaOrdenada = ordenarLista(array);
console.log(listaOrdenada);
