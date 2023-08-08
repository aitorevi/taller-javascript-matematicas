console.group("Cuadrado")

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
  }
}

console.groupEnd("Cuadrado")

console.group("Circulo")

const radioCirculo = 3
const diametroCirculo = radioCirculo * 2
const PI = 3.1415

const circunferencia = diametroCirculo * PI
const areaCirculo = radioCirculo ** 2 * PI

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
})

function calcularCirculo(radio) {
  const diametro = radio * 2
  const radioAlCuadrado = Math.pow(radio, 2) // Math.pow sirve para potencias
  return {
    circunferencia: diametro * PI,
    circunferencia2: diametro * Math.PI,
    area: radio ** 2 * PI,
    area2: radioAlCuadrado * PI,
    area3: radioAlCuadrado * Math.PI,
    area4: radioAlCuadrado * Math.PI.toFixed(5), // toFixed limita los decimales de Math.PI
  }
}

console.groupEnd("Circulo")

console.group("Triangulo Isosceles")

const base = 4
const lado = 5

const altura = Math.sqrt(Math.pow(lado, 2) - Math.pow(base, 2) / 4)

console.log({
  base: base,
  lado: lado,
  altura: altura,
})

function calcularAlturaTrianguloIsosceles(base, lado) {
  const altura = Math.sqrt(Math.pow(lado, 2) - Math.pow(base, 2) / 4)
  return {
    base: base,
    lado: lado,
    altura: altura,
  }
}

function calcularAlturaTrianguloIsosceles2(lado1, lado2, base) {
  const altura = Math.sqrt(Math.pow(lado1, 2) - Math.pow(base, 2) / 4)
  lado1 !== lado2 || base === lado1
    ? console.warn(
        "Error, los lados deben ser iguales y la base diferente a los lados"
      )
    : console.log({
        base: base,
        lado: lado1,
        altura: altura,
      })
}

function calcularAlturaTrianguloIsosceles3(lado, base) {
  const altura = Math.sqrt(Math.pow(lado, 2) - Math.pow(base, 2) / 4)
  base === lado
    ? console.warn("Error, la base diferente a los lados, este no es un")
    : console.log({
        base: base,
        lado: lado,
        altura: altura,
      })
}
console.groupEnd("Triangulo Isosceles")

console.group("Triangulo Escaleno")

const lado1 = 5
const lado2 = 5
const base2 = 4
const semiperimetro = (lado1 + lado2 + base2) / 2
const altura2 =
  (2 / base2) *
  Math.sqrt(
    semiperimetro *
      (semiperimetro - base2) *
      (semiperimetro - lado1) *
      (semiperimetro - lado2)
  )

console.log({
  lado1: lado1,
  lado2: lado2,
  base: base2,
  altura: altura2,
})

function calcularAlturaTrianguloEscaleno(lado1, lado2, base) {
  const semiperimetro = (lado1 + lado2 + base2) / 2
  const altura =
    (2 / base) *
    Math.sqrt(
      semiperimetro *
        (semiperimetro - base) *
        (semiperimetro - lado1) *
        (semiperimetro - lado2)
    )

  return {
    lado1: lado1,
    lado2: lado2,
    base: base,
    altura: altura,
  }
}

console.groupEnd("Triangulo Escaleno")
