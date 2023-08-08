console.group("Cuadrado")

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
    }
}

console.groupEnd("Cuadrado")

console.group("Circulo")

const radioCirculo = 3
const diametroCirculo = radioCirculo *2
const PI = 3.1415

const circunferencia = diametroCirculo * PI
const areaCirculo = (radioCirculo ** 2) * PI

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
        area: (radio **2) * PI,
        area2: radioAlCuadrado * PI,
        area3: radioAlCuadrado * Math.PI,
        area4: radioAlCuadrado * Math.PI.toFixed(5), // toFixed limita los decimales de Math.PI
    }
}

console.groupEnd("Circulo")