const inputPrice = document.querySelector("#price")
const inputDiscount = document.querySelector("#discount")
const inputCoupon = document.querySelector("#coupon")
const paragraph = document.querySelector(".paragraph")
const calculateBtn = document.querySelector(".calculateBtn")
const couponBtn = document.querySelector(".couponBtn")

calculateBtn.addEventListener("click", calculateTheDiscountedPrice)
inputDiscount.addEventListener("onBlur", discountIsWithinTheRange)
couponBtn.addEventListener("click", extractDiscountCoupon)

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

const discountCouponsList = {
  VERANO20: 20,
  PLATZI15: 15,
  OFERTA10: 10,
}

function extractDiscountCoupon() {
  const couponKey = inputCoupon.value
  for (key in discountCouponsList) {
    if (key === couponKey) {
      inputDiscount.setAttribute("value", discountCouponsList[key])
      return
    }
  }
  paragraph.innerText = "Ese cupón no existe"
}

// Implementación de los cupones aplicando el descuento directamente al precio y mostrando el resultado

const inputPrice2 = document.querySelector("#price2")
const inputCoupon2 = document.querySelector("#coupon2")
const paragraph2 = document.querySelector(".paragraph2")
const couponBtn2 = document.querySelector(".couponBtn2")

// comprobar si existe o no el cupon

// si no existe mostrar el mensaje de error

// si existe, aplicar el descuento y mostrar el precio con descuento
