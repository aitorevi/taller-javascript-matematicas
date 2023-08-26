const PlatziMath = {}

// Media con For of
PlatziMath.averageForOf = function averageForOf(valuesList) {
  let sumOfValues = 0
  for (let value of valuesList) {
    sumOfValues = sumOfValues + value
  }
  const quantityOfValues = valuesList.length
  const average = sumOfValues / quantityOfValues
  console.log("promedio con bucle for of: " + average)
  sumOfValues = 0
}

// Media con reduce
PlatziMath.averageReduce = function averageReduce(valuesList) {
  const sumOfValues = valuesList.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
  const quantityOfValues = valuesList.length
  const average = sumOfValues / quantityOfValues

  console.log("promedio con método reduce: " + average)
}

// Mediana
PlatziMath.calculateMedian = function calculateMedian(valuesList) {
  const sortedValuesList = valuesList.sort((a, b) => a - b)
  if (PlatziMath.isOdd(sortedValuesList)) {
    // const median = sortedValuesList[Math.trunc(valuesList.length / 2)]
    const median = sortedValuesList[Math.floor(sortedValuesList.length / 2)]
    return median
  } else {
    const firstCoreValue = sortedValuesList[sortedValuesList.length / 2 - 1]
    const secondCoreValue = sortedValuesList[sortedValuesList.length / 2]
    const coreValues = [firstCoreValue, secondCoreValue]
    const median = coreValues.reduce((a, b) => a + b) / 2
    return median
  }
}

PlatziMath.isOdd = function isOdd(sortedValuesList) {
  const quantityOfElements = sortedValuesList.length
  if (quantityOfElements % 2 == 0) {
    return false
  }
  return true
}

// Moda
PlatziMath.fashion = function fashion(valuesList) {
  const repetitionsOfValue = []
  for (let value of valuesList) {
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

  const maxValueRepetition = Math.max(
    ...repetitionsOfValue.map((element) => element.repeticiones)
  )

  const elementsRepit = repetitionsOfValue.filter(
    (element) => element.repeticiones == maxValueRepetition
  )

  elementsRepit.length == 1
    ? console.log("La moda es: " + elementsRepit[0].valor)
    : PlatziMath.isBimodal(elementsRepit)
}

PlatziMath.isBimodal = function isBimodal(elementsRepit) {
  let result = "La moda es bimodal y los valores son: "
  for (element of elementsRepit) {
    result = result + "(" + element.valor + ") "
  }
  console.log(result)
}
