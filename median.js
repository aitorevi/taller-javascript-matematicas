const valuesList = [30, 10, 25, 8]

console.log("La mediana es: " + calculateMedian(valuesList))

function calculateMedian(valuesList) {
  const sortedValuesList = valuesList.sort((a, b) => a - b)
  if (isOdd(sortedValuesList)) {
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

function isOdd(sortedValuesList) {
  const quantityOfElements = sortedValuesList.length
  if (quantityOfElements % 2 == 0) {
    return false
  }
  return true
}
