const valuesList = [30, 10, 40, 25, 8]

const sortedValuesList = valuesList.sort((a, b) => a - b)

if (isOdd(valuesList)) {
  // const median = valuesList[Math.trunc(valuesList.length / 2)]
  const median = valuesList[Math.floor(valuesList.length / 2)]
  console.log("La mediana es: " + median)
} else {
  const firstCoreValue = valuesList[valuesList.length / 2 - 1]
  const secondCoreValue = valuesList[valuesList.length / 2]
  const coreValues = [firstCoreValue, secondCoreValue]
  const median = coreValues.reduce((a, b) => a + b) / 2
  console.log("La mediana es: " + median)
}

function isOdd(valuesList) {
  const quantityOfElements = valuesList.length
  if (quantityOfElements % 2 == 0) {
    return false
  }
  return true
}
