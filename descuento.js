const price = document.querySelector(".price")
const discount = document.querySelector(".discount")
const paragraph = document.querySelector(".paragraph")
const calculateBtn = document.querySelector(".calculateBtn")

calculateBtn.addEventListener("click", calculate)

function calculate() {
  const result = (price.value * (100 - discount.value)) / 100
  paragraph.innerText = "Precio con descuento:: " + result
}
