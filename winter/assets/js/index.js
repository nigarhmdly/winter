
document.querySelectorAll('.cart-icon').forEach(icon => {
    icon.addEventListener('click', function (event) {
        event.preventDefault();

   
        const productId = this.getAttribute('data-id');
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');

     
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        
        const product = { id: productId, name: productName, price: productPrice };

      
        cart.push(product);

     
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});




















function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    
   
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length; 
}


const cartIcons = document.querySelectorAll('.cartOne');


cartIcons.forEach(icon => {
    icon.addEventListener('click', async (e) => {
        e.preventDefault(); 

         
        const productDiv = icon.closest('.blueDiv');
        const productName = productDiv.querySelector('h3').textContent;
        const productPrice = productDiv.querySelector('h4').textContent;

         
        const product = {
            name: productName,
            price: productPrice
        };

        try {
             
            await axios.post('/api/cart', product);

            
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);  
            localStorage.setItem('cart', JSON.stringify(cart));  
            
            updateCartCount();  
        } catch (error) {
            console.error('Ürün sepete eklenirken hata oluştu:', error);
        }
    });
});

 
updateCartCount();
