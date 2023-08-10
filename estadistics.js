const valuesList = [10, 20, 30]
let sumOfValues = 0

console.log(valuesList)

averageForOf(valuesList)
averageReduce(valuesList)

function averageForOf(valuesList) {
  for (value of valuesList) {
    sumOfValues = sumOfValues + value
  }
  const average = sumOfValues / valuesList.length
  console.log("promedio con bucle for of: " + average)
}

function averageReduce(valuesList) {
  const sumOfValues = valuesList.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
  const quantityOfValues = valuesList.length
  const average = sumOfValues / quantityOfValues

  console.log("promedio con método reduce: " + average)
}
