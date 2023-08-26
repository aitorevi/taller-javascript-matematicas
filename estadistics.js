// const valuesList = [10, 20, 30]

// console.log(valuesList)

// averageForOf(valuesList)
// averageReduce(valuesList)

const PlatziMath2 = {}

PlatziMath2.averageForOf = (valuesList) => {
  let sumOfValues = 0
  for (value of valuesList) {
    sumOfValues = sumOfValues + value
  }
  const quantityOfValues = valuesList.length
  const average = sumOfValues / quantityOfValues
  console.log("promedio con bucle for of: " + average)
  sumOfValues = 0
}

function averageReduce(valuesList) {
  const sumOfValues = valuesList.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
  const quantityOfValues = valuesList.length
  const average = sumOfValues / quantityOfValues

  console.log("promedio con método reduce: " + average)
}
