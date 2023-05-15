// Definir el espacio de búsqueda
const posiciones = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
];

// Definir la función objetivo
function funcionObjetivo(posicion) {
  // Calcular la cantidad de desplazamientos
  let desplazamientos = 0;
  // Implementar la lógica para calcular la cantidad de desplazamientos
  return desplazamientos;
}

// Definir la función de búsqueda exhaustiva
function busquedaExhaustiva() {
  let mejorSolucion = posiciones[0];
  let mejorValor = funcionObjetivo(mejorSolucion);

  for (let i = 1; i < posiciones.length; i++) {
    const solucionActual = posiciones[i];
    const valorActual = funcionObjetivo(solucionActual);

    if (valorActual < mejorValor) {
      mejorSolucion = solucionActual;
      mejorValor = valorActual;
    }
  }

  return mejorSolucion;
}

// Ejecutar la búsqueda exhaustiva
const mejorPosicion = busquedaExhaustiva();

console.log("La mejor posición es:", mejorPosicion);
console.log("Con un valor de:", funcionObjetivo(mejorPosicion));





// Función que realiza la búsqueda exhaustiva
function busquedaExhaustiva(elementos, objetivo) {
  const n = elementos.length;

  // Variable para almacenar la mejor solución encontrada
  let mejorSolucion = null;
  let mejorDistancia = Infinity;

  // Función auxiliar para generar todas las permutaciones
  function permutaciones(arr, indice) {
    if (indice === n) {
      // Calcula la distancia entre la permutación actual y el objetivo
      const distancia = calcularDistancia(arr);
      
      // Actualiza la mejor solución si la distancia es menor
      if (distancia < mejorDistancia) {
        mejorSolucion = [...arr];
        mejorDistancia = distancia;
      }
    }

    for (let i = indice; i < n; i++) {
      [arr[indice], arr[i]] = [arr[i], arr[indice]]; // Intercambia los elementos
      permutaciones(arr, indice + 1);
      [arr[indice], arr[i]] = [arr[i], arr[indice]]; // Revierte el intercambio
    }
  }

  // Función auxiliar para calcular la distancia entre una permutación y el objetivo
  function calcularDistancia(arr) {
    let distancia = 0;
    for (let i = 0; i < n; i++) {
      distancia += Math.abs(arr[i] - objetivo[i]);
    }
    return distancia;
  }

  // Llama a la función de permutaciones para generar todas las posibles soluciones
  permutaciones(elementos, 0);

  return mejorSolucion;
}

// Ejemplo de uso
const elementos = [1, 2, 3];
const objetivo = [3, 1, 2];

const mejorSolucion = busquedaExhaustiva(elementos, objetivo);
console.log("Mejor solución encontrada:", mejorSolucion);

