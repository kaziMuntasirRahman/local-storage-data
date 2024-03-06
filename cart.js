const productNameField = document.getElementById('product-name');
const productQuantityField = document.getElementById('product-quantity');
const cartContainer = document.getElementById('carts');

function addToCart(){
  const productName = productNameField.value;
  const productQuantity = productQuantityField.value;
  
  if(productName && productQuantity){
    saveCartDataToLocalStorage(productName, productQuantity);
    displayCartInfo(cartStoredData());
    [productNameField.value, productQuantityField.value] = ['', ''];
  }
}



function displayCartInfo(obj){
  cartContainer.innerHTML = '';
  for(const item in obj){
    cartContainer.innerHTML += `
    <div class="flex justify-between gap-5 bg-gray-200 rounded-sm">
    <h2>${item}</h2>
    <h2>${obj[item]}</h2>
  </div>
    `
  }
}

function cartStoredData(){
  let cart = {};
  const cartStringifiedData = localStorage.getItem('cart');
  if(cartStringifiedData){
    cart = JSON.parse(cartStringifiedData);
  }
  return cart;
}

function saveCartDataToLocalStorage(product, quantity){
  const cart = cartStoredData();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
}

function clearLocalStorageData(){
  localStorage.removeItem('cart');
  displayCartInfo(cartStoredData());
}


displayCartInfo(cartStoredData());