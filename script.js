  
  // Function that will add header and footer into all pages through the data-attribute include
async function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');
  for (let el of includes) {
    const url = el.getAttribute('data-include');
    try {
      const res  = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      el.innerHTML = await res.text();
    } catch (err) {
      console.error(`Failed to include ${url}:`, err);
    }
  }
}
document.addEventListener('DOMContentLoaded', includeHTML);


  //Getting the values from the input quantity and transforming into number
  const productQuantity= parseFloat(document.querySelector(".shop-cart-controls p").textContent)
  const productPrice = parseFloat(document.querySelector(".container-shop-cart p").textContent);

  let product;


  //When the page is loaded I will get all my controls elements
  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.container-shop-cart').forEach(control=>{
        const minus = control.querySelector('.shop-cart-controls .ph-minus');
        const plus = control.querySelector('.shop-cart-controls .ph-plus');
        const quantityProduct = control.querySelector('.shop-cart-controls p');
        const btnCart = control.querySelector(".btn-shop-cart");

        minus.addEventListener("click", ()=>{
           let value = parseInt(quantityProduct.textContent.trim(), 10) || 0;
            if (value > 1) quantityProduct.textContent = value - 1;
        })

        plus.addEventListener("click",()=>{
            let value = parseInt(quantityProduct.textContent.trim(), 10) || 0;
            quantityProduct.textContent = value + 1;
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

 


 
 
 
 
 
 
 

  