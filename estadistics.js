const valuesList = [10, 20, 30]
let sumOfValues = 0

console.log(valuesList)

average(valuesList)

function average(valuesList) {
  for (value of valuesList) {
    sumOfValues = sumOfValues + value
  }
  const average = sumOfValues / valuesList.length
  console.log("promedio con bucle for of: " + average)
}

// Reto: Hacerlo con algún metodo de JavaScript
