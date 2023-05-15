// Definir una función de búsqueda heurística
function busquedaHeuristica(nodoInicial, calcularHeuristica, generarHijos, esMeta) {
    // Inicializar el conjunto abierto con el nodo inicial
    let conjuntoAbierto = [nodoInicial];
    // Inicializar el conjunto cerrado vacío
    let conjuntoCerrado = [];
  
    // Mientras el conjunto abierto no esté vacío
    while (conjuntoAbierto.length > 0) {
      // Ordenar los nodos en el conjunto abierto según su función heurística
      conjuntoAbierto.sort((a, b) => calcularHeuristica(a) - calcularHeuristica(b));
  
      // Seleccionar el nodo con la función heurística más baja
      let nodoActual = conjuntoAbierto.shift();
  
      // Si se ha alcanzado el estado meta, devolver la solución
      if (esMeta(nodoActual)) {
        return nodoActual;
      }
  
      // Generar los hijos del nodo actual
      let hijos = generarHijos(nodoActual);
  
      // Para cada hijo, calcular su función heurística y agregarlo al conjunto abierto
      for (let i = 0; i < hijos.length; i++) {
        let hijo = hijos[i];
        hijo.padre = nodoActual;
        hijo.f = calcularHeuristica(hijo) + hijo.costo;
  
        // Si el hijo no está en el conjunto cerrado ni en el conjunto abierto, agregarlo al conjunto abierto
        if (!conjuntoCerrado.includes(hijo) && !conjuntoAbierto.includes(hijo)) {
          conjuntoAbierto.push(hijo);
        }
      }
  
      // Agregar el nodo actual al conjunto cerrado
      conjuntoCerrado.push(nodoActual);
    }
  
    // Si no se ha encontrado solución, devolver nulo
    return null;
  }
  
const entrada = [h,b,b1,a,h1]; // Valor de entrada para la búsqueda heurística
const resultado = busquedaHeuristica(entrada); // Llama a la función de búsqueda heurística y guarda el resultado en la variable 'resultado'
console.log("El resultado de la búsqueda heurística es:", resultado); // Muestra el resultado por medio de console.log



