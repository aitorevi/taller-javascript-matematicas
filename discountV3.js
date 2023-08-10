// Versión 3.0, utilizando el método find()

const inputPrice = document.querySelector("#price")
const inputCoupon = document.querySelector("#coupon")
const paragraph = document.querySelector(".paragraph")
const couponBtn = document.querySelector(".couponBtn")

couponBtn.addEventListener("click", applyDiscountCoupon)

const couponsList = [
  { name: "VERANO20", discount: 20 },
  { name: "PLATZI15", discount: 15 },
  { name: "OFERTA10", discount: 10 },
]

const MIN_PERCENTAGE_DISCOUNT = 0
const MAX_PERCENTAGE_DISCOUNT = 100

let couponDiscountValue

function applyDiscountCoupon() {
  const price = inputPrice.value
  const coupon = inputCoupon.value

  // inputsNotEmpty()
  if (!price || !coupon) {
    paragraph.innerText =
      "Debes rellenar el precio y el cupón para hacer el cálculo"
    return
  }

  // priceIsNotNegative()
  if (price < 0) {
    paragraph.innerText = "El precio no puede ser negativo"
    return
  }

  // couponExist()
  const couponExist = couponsList.find((element) => element.name == coupon)
  if (couponExist) {
    extractValueCoupon(couponExist)
  } else {
    paragraph.innerText = "El cupón no existe"
    return
  }

  // isWithinTheRange()
  if (
    couponDiscountValue < MIN_PERCENTAGE_DISCOUNT ||
    couponDiscountValue > MAX_PERCENTAGE_DISCOUNT
  ) {
    paragraph.innerText = "El descuento debe ser entre 0% y 100%"
    return
  }

  calculateDiscountedPrice(price, couponDiscountValue)
}

function inputsNotEmpty(price, coupon) {
  if (!price || !coupon) {
    paragraph.innerText =
      "Debes rellenar el precio y el cupón para hacer el cálculo"
    return
  }
  console.log("inputsNotEmpty ok")
}

function priceIsNotNegative(price) {
  if (price < 0) {
    paragraph.innerText = "El precio no puede ser negativo"
    return
  }
  console.log("priceIsNotNegative ok")
}

function couponExist(coupon) {
  const result = couponsList.find((element) => element.name == coupon)
  if (result) {
    couponDiscountValue = result.discount
  } else {
    paragraph.innerText = "El cupón no existe"
    return
  }
  console.log("couponExist ok")
}

// In use
function extractValueCoupon(coupon) {
  couponDiscountValue = coupon.discount
  console.log("extractValueCoupon ok")
}

function isWithinTheRange(discount) {
  if (
    discount < MIN_PERCENTAGE_DISCOUNT ||
    discount > MAX_PERCENTAGE_DISCOUNT
  ) {
    paragraph.innerText = "El descuento debe ser entre 0% y 100%"
    return
  }
  console.log("isWithinTheRange ok")
}

// In use
function calculateDiscountedPrice(price, discount) {
  const priceWithDiscountApplied = (price * (100 - discount)) / 100
  paragraph.innerText = "Precio con descuento: " + priceWithDiscountApplied
  console.log("calculateDiscountedPrice ok")
}
