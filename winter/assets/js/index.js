// Səbət ikonlarına tıklanıldığında məlumatları yerli yaddaşa əlavə etmək üçün funksiya
document.querySelectorAll('.cart-icon').forEach(icon => {
    icon.addEventListener('click', function (event) {
        event.preventDefault();

        // Məhsul məlumatlarını al
        const productId = this.getAttribute('data-id');
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');

        // LocalStorage-dan mövcud səbət məlumatlarını al
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Məhsul obyektini yaradın
        const product = { id: productId, name: productName, price: productPrice };

        // Məhsulu səbətə əlavə edin
        cart.push(product);

        // Yenilənmiş səbəti yerli yaddaşa yazın
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});



















// Sepet sayısını güncellemek için bir fonksiyon tanımla
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    
    // localStorage'daki sepeti al, yoksa boş dizi başlat
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length; // Ürün sayısını göster
}

// Tüm "Alışveriş Sepetine Ekle" ikonlarını seç
const cartIcons = document.querySelectorAll('.cartOne');

// Her ikon için tıklama olayını dinle
cartIcons.forEach(icon => {
    icon.addEventListener('click', async (e) => {
        e.preventDefault(); // Sayfanın yenilenmesini engelle

        // Ürün bilgilerini bul
        const productDiv = icon.closest('.blueDiv');
        const productName = productDiv.querySelector('h3').textContent;
        const productPrice = productDiv.querySelector('h4').textContent;

        // Yeni bir ürün objesi oluştur
        const product = {
            name: productName,
            price: productPrice
        };

        try {
            // Ürünü sunucuya POST isteğiyle gönder
            await axios.post('/api/cart', product);

            // localStorage'a eklemek için mevcut sepeti al
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product); // Ürünü sepete ekle
            localStorage.setItem('cart', JSON.stringify(cart)); // Güncellenmiş sepeti kaydet
            
            updateCartCount(); // Sepet sayısını güncelle
        } catch (error) {
            console.error('Ürün sepete eklenirken hata oluştu:', error);
        }
    });
});

// Sayfa yüklendiğinde sepet sayısını güncelle
updateCartCount();
