function calculateInvoice() {
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;

  if (price && quantity) {
    let total = price * quantity;
    document.getElementById("result").textContent = "الإجمالي: " + total + " ريال";
  } else {
    document.getElementById("result").textContent = "الرجاء إدخال السعر والكمية";
  }
}
window.addEventListener('load', () => {
  const message = document.getElementById('welcome-message');
  setTimeout(() => {
    message.style.opacity = '0';
    setTimeout(() => {
      message.remove();
    }, 1000); // بعد ما يختفي، نحذفه من الصفحة
  }, 3000); // يبقى 3 ثواني
});