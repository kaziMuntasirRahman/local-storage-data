const productField = document.getElementById('product-name');
const quantityField = document.getElementById('product-quantity');
const cartContainer = document.getElementById('carts');

function addToCart() {
  const productName = productField.value;
  const quantity = quantityField.value;
  if(productName && quantity){
    [productField.value, quantityField.value] = ['',''];
    saveProductToLocalStorage(productName,quantity);
    displayProductCart(getLocalStorageCart());
  }
}



function displayProductCart(obj) {
  cartContainer.innerHTML = '';
  for(const i in obj){
      cartContainer.innerHTML += `
      <div class="flex justify-between shadow-inner gap-5 bg-gray-200 rounded-sm px-1">
      <h2>${i}</h2>
      <h2>${obj[i]}</h2>
    </div>
      `
  }
}


function getLocalStorageCart() {
  let cart = {};
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }

  return cart;
}

function saveProductToLocalStorage(product, quantity) {
  const cart = getLocalStorageCart();
  cart[product] = quantity;
  cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
}

function clearData(){
  localStorage.clear();
  displayProductFromLocalStorage();
}

function displayProductFromLocalStorage(){
  displayProductCart(getLocalStorageCart());
}


displayProductFromLocalStorage();
