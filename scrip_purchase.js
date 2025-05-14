// async function includeHTML() {
//   const includes = document.querySelectorAll('[data-include]');
//   for (let el of includes) {
//     const url = el.getAttribute('data-include');
//     try {
//       const res = await fetch(url);
//       if (!res.ok) throw new Error(res.statusText);
//       el.innerHTML = await res.text();
//     } catch (err) {
//       console.error(`Failed to include ${url}:`, err);
//     }
//   }
// }
// document.addEventListener('DOMContentLoaded', includeHTML);


document.addEventListener('DOMContentLoaded', () => {

  // await includeHTML();

  const burger = document.querySelector('.btn-hamburger');
  const nav = document.querySelector('.main-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });


  document.querySelectorAll('.controls').forEach(control => {
    const minus = control.querySelector('.shop-cart-controls .ph-minus');
    const plus = control.querySelector('.shop-cart-controls .ph-plus');
    const quantityProduct = control.querySelector('.shop-cart-controls p');
    const deleteProduct = control.querySelector('.shop-cart-controls ph-trash')


    minus.addEventListener("click", () => {
      let value = parseInt(quantityProduct.textContent.trim(), 10) || 0;
      if (value > 1) {
        quantityProduct.textContent = value - 1

      }
    })

    plus.addEventListener("click", () => {
      let value = parseInt(quantityProduct.textContent.trim(), 10) || 0;
      quantityProduct.textContent = value + 1;

    })

    const qtyStr = localStorage.getItem('coffeeQuantity') || '0';
    const priceStr = localStorage.getItem('coffeePrice') || '0.00';
    const qty = parseInt(qtyStr, 10);
    const total = parseFloat(priceStr);

    const feeText = document.querySelector('.fee-delivery p:last-child').textContent;
    const fee = parsePrice(feeText);

    console.log(qty)
    console.log(total.toFixed(2))
    console.log((total + fee).toFixed(2))

    //updating the DOM with the new values
    document.getElementById('checkout-qty').textContent = qty;
    document.getElementById('checkout-total').textContent = total.toFixed(2);
    document.getElementById('checkout-total-purchase').textContent = (total + fee).toFixed(2);


  })
})


/**Function REGEX to clean the string price */
function parsePrice(str) {
  // str might be "AU$ 3,50" or "3.50"
  // REGEX to remove anything that isn’t a digit, comma or dot
  let cleaned = str.replace(/[^\d.,]/g, '');
  // replace comma with dot
  cleaned = cleaned.replace(',', '.');

  return parseFloat(cleaned) || 0;
}


