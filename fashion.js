// Moda: El elemento que mas veces se repite en un array, si hay varios que se repiten las mismas veces se llama bimodal.

// Primero la solución sencilla, después implementaré la solución en la que dos números se repitan las mismas veces.ç

//  ¿Qué necesito?

// un array con valores repetidos
const valuesList = [30, 30, 30, 20, 20, 12, 1, 12, 3, 1]

// recorrer el array, comprobar si el valor existe en un array de objetos, este array de objetos, tiene objetos con el valor y el numero de veces que ha salido ese valor.

const repetitionsOfValue = []

// tendria que ser una funcion que reciba el valuesList, el repetitionsOfValue

action(valuesList, repetitionsOfValue)

function action(valuesList, repetitionsOfValue) {
  for (value of valuesList) {
    if (repetitionsOfValue.length == 0) {
      repetitionsOfValue.push({ valor: value, repeticiones: 1 })
    } else {
      //
      const contieneElNumero = repetitionsOfValue.findIndex(
        (element) => element.valor == value
      )
      if (contieneElNumero != -1) {
        repetitionsOfValue[contieneElNumero].repeticiones =
          repetitionsOfValue[contieneElNumero].repeticiones + 1
      } else {
        repetitionsOfValue.push({ valor: value, repeticiones: 1 })
      }
    }
  }
  console.log(repetitionsOfValue)
  maxRepetitions(repetitionsOfValue)
}

function maxRepetitions(repetitionsOfValue) {
  let fashion = 0
  for (element of repetitionsOfValue) {
    if (element.repeticiones > fashion) {
      fashion = element.valor
    }
  }
  console.log("La moda es: " + fashion)
}
