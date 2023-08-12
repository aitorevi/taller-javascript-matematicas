// Moda: El elemento que mas veces se repite en un array, si hay varios que se repiten las mismas veces se llama bimodal.

const valuesList = [30, 30, 30, 20, 20, 12, 1, 12, 5, 5, 5, 5, 1, 1, 1, 12, 12]

const repetitionsOfValue = []

action(valuesList, repetitionsOfValue)

function action(valuesList, repetitionsOfValue) {
  for (value of valuesList) {
    if (repetitionsOfValue.length == 0) {
      repetitionsOfValue.push({ valor: value, repeticiones: 1 })
    } else {
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

  // Hacer un HackMd con esto de abajo, super interesante la solución y muy elegante. Acceder a un array de objetos combinando Math.max con map.

  // Este bucle sustituirlo por Math.Max
  //   let maxValueRepetition = 0
  //   for (element of repetitionsOfValue) {
  //     if (element.repeticiones > maxValueRepetition) {
  //       maxValueRepetition = element.repeticiones
  //     }
  //   }

  const maxValueRepetition = Math.max(
    ...repetitionsOfValue.map((element) => element.repeticiones)
  )

  // Hacer un HackMd con esto de abajo

  // Este bucle for sustituirlo por filter
  //   let elementsRepit = []
  //   for (element of repetitionsOfValue) {
  //     if (element.repeticiones == maxValueRepetition) {
  //       elementsRepit.push(element)
  //     }
  //   }

  const elementsRepit = repetitionsOfValue.filter(
    (element) => element.repeticiones == maxValueRepetition
  )

  console.log("Linea 64")
  console.log(elementsRepit)

  elementsRepit.length == 1
    ? console.log("La moda es: " + elementsRepit[0].valor)
    : isBimodal(elementsRepit)
}

function isBimodal(elementsRepit) {
  let result = "La moda es bimodal y los valores son: "
  for (element of elementsRepit) {
    result = result + "(" + element.valor + ") "
  }
  console.log(result)
}

// Tarea: Refactorizar nombres, ver otras opciones de eliminar algún bucle for, intentar eliminar algún condicional if else.

// Reto: Hacerlo con TDD
