// Mediana de los salarios de Juanita

function findObjectByPersonName(personToFind) {
  const objectJuanita = salarios.find((person) => person.name == personToFind)
  return objectJuanita
}

const personToFind = "Juanita"

const personFound = findObjectByPersonName(personToFind)

console.log(personFound) // delete

const jobsOfPerson = personFound.trabajos

console.log(jobsOfPerson) // delete

const salariesOfPerson = jobsOfPerson.map((job) => job.salario)

console.log(salariesOfPerson) // delete

const medianOfPerson = PlatziMath.calculateMedian(salariesOfPerson) // Llamar a la clase y acceder al método

console.log(medianOfPerson)

// PlatziMath.proyection(salariesOfPerson)

// hacer un array de incrementos de salario en porcentajes
const percentageSalaryIncreaseList =
  PlatziMath.percentageSalaryIncrease(salariesOfPerson)

console.log(percentageSalaryIncreaseList)

// calcular la mediana de ese array
const medianpercentageSalaryIncrease = PlatziMath.calculateMedian(
  percentageSalaryIncreaseList
)

console.log(medianpercentageSalaryIncrease)

// calcular la proyeccion con ese dato

const currentSalary = salariesOfPerson[salariesOfPerson.length - 1]

const proyectionSalary = PlatziMath.proyection(
  currentSalary,
  medianpercentageSalaryIncrease
)

console.log(proyectionSalary)
