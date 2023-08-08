const inputPrice = document.querySelector("#price")
const inputDiscount = document.querySelector("#discount")
const paragraph = document.querySelector(".paragraph")
const calculateBtn = document.querySelector(".calculateBtn")

calculateBtn.addEventListener("click", calculate)
inputDiscount.addEventListener("onBlur", validateDiscount)

function calculate() {
  if (
    validateDiscount(inputDiscount.value) &&
    inputHasAValue(inputPrice.value, inputDiscount.value)
  ) {
    const price = inputPrice.value
    const discount = inputDiscount.value
    const result = (price * (100 - discount)) / 100
    paragraph.innerText = "Precio con descuento: " + result
  }
}

function validateDiscount(value) {
  if (value < 0 || value > 100) {
    paragraph.innerText = "El descuento debe ser entre 0% y 100%"
    return false
  }
  return true
}

function inputHasAValue(price, discount) {
  if (!price || !discount) {
    paragraph.innerText = "Debes rellenar el precio y el descuento"
    return false
  }
  return true
}

// crear cupones de descuento
