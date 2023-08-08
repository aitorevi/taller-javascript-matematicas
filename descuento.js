const inputPrice = document.querySelector("#price")
const inputDiscount = document.querySelector("#discount")
const paragraph = document.querySelector(".paragraph")
const calculateBtn = document.querySelector(".calculateBtn")

calculateBtn.addEventListener("click", calculateTheDiscountedPrice)
inputDiscount.addEventListener("onBlur", discountIsWithinTheRange)

const MIN_PERCENTAGE_DISCOUNT = 0
const MAX_PERCENTAGE_DISCOUNT = 100

function calculateTheDiscountedPrice() {
  const discount = inputDiscount.value
  const price = inputPrice.value
  if (discountIsWithinTheRange(discount) && inputHasAValue(price, discount)) {
    const priceWithDiscountApplied = (price * (100 - discount)) / 100
    paragraph.innerText = "Precio con descuento: " + priceWithDiscountApplied
  }
}

function discountIsWithinTheRange(discount) {
  if (
    discount < MIN_PERCENTAGE_DISCOUNT ||
    discount > MAX_PERCENTAGE_DISCOUNT
  ) {
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
