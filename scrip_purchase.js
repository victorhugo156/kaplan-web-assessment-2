
//When the page is loaded I will get all my controls elements
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.controls').forEach(control=>{
        const minus = control.querySelector('.shop-cart-controls .ph-minus');
        const plus = control.querySelector('.shop-cart-controls .ph-plus');
        const quantityProduct = control.querySelector('.shop-cart-controls p');
        const deleteProduct = control.querySelector('.shop-cart-controls ph-trash')
        const btnCart = control.querySelector(".btn-shop-cart");
        const price = control.getElementById('checkout-total').textContent;

        console.log(`This is the price of the controls function ${price}`);

        minus.addEventListener("click", ()=>{
           let value = parseInt(quantityProduct.textContent.trim(), 10) || 0;
            if (value > 1){
                quantityProduct.textContent = value - 1

            }
        })

        plus.addEventListener("click",()=>{
            let value = parseInt(quantityProduct.textContent.trim(), 10) || 0;
            quantityProduct.textContent = value + 1;

            let priceUpdated = parseFloat(price);

            priceUpdated = priceUpdated + 9.80;

            console.log(priceUpdated)
        })

        
        btnCart.addEventListener("click", ()=>{

            let qty = parseInt(quantityProduct.textContent.trim(), 10) || 0;
            let price = parseFloat(priceElement.textContent.trim()) || 0;

            //Store the data into  the Local Storage
            localStorage.setItem("coffeeQuantity", qty);
            localStorage.setItem("coffeePrice", (qty * price).toFixed(2));

            window.location.href = "purchase.html";
        })
    }) 
  })


const checkoutRoot = document.querySelector('.checkout');

if (checkoutRoot) {
    const qtyStr   = localStorage.getItem('coffeeQuantity') || '0';
    const priceStr = localStorage.getItem('coffeePrice') || '0.00';
    const qty      = parseInt(qtyStr, 10);
    const total    = parseFloat(priceStr);
  
    // NEW: parse the delivery fee from your HTML
    const feeText = document.querySelector('.fee-delivery p:last-child').textContent;
    const fee     = parsePrice(feeText);
  
    // update the DOM
    document.getElementById('checkout-qty').textContent = qty;
    document.getElementById('checkout-total').textContent = `AU$ ${total.toFixed(2)}`;
    document.getElementById('checkout-total-purchase').textContent = (total + fee).toFixed(2);
  }



  function parsePrice(str) {
    // str might be "AU$ 3,50" or "3.50"
    // 1) remove anything that isn’t a digit, comma or dot
    let cleaned = str.replace(/[^\d.,]/g, '');
    // 2) replace comma with dot
    cleaned = cleaned.replace(',', '.');
    // 3) parse as a float
    return parseFloat(cleaned) || 0;
  }
  

  