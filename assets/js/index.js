function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.count += 1;
    } else {
        product.count = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}







document.querySelectorAll('.cartOne .add1').forEach((button, ind) => {
    button.addEventListener("click", () => {

        const product = {
            id: 1,
            title: "Thermo Ball Etip Gloves",
            price: 45743,
            images: ["https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"]
        };
        addToCart(product);
    });
});






function addToCart2(product2) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === product2.id);
    if (existingProduct) {
        existingProduct.count += 1;
    } else {
        product2.count = 1;
        cart.push(product2);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

document.querySelectorAll('.cartTwo .add2').forEach((button, ind) => {
    button.addEventListener("click", () => {

        const product2 = {
            id: 2,
            title: "Thermo Ball Etip Gloves",
            price: 45743,
            images: ["https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"]
        };
        addToCart2(product2);
    });
});




function addToCart3(product3) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === product3.id);
    if (existingProduct) {
        existingProduct.count += 1;
    } else {
        product3.count = 1;
        cart.push(product3);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

document.querySelectorAll('.cartThree .add3').forEach((button, ind) => {
    button.addEventListener("click", () => {

        const product3 = {
            id: 3,
            title: "Thermo Ball Etip Gloves",
            price: 45743,
            images: ["https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"]
        };
        addToCart3(product3);
    });
});











function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalCount = cart.reduce((sum, item) => sum + item.count, 0); 
    document.querySelector(".cart-count").textContent = totalCount; 
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.count += 1;
    } else {
        product.count = 1;
        cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount(); 
}


document.addEventListener("DOMContentLoaded", updateCartCount);






























function addTo(produc) {
    let wish = JSON.parse(localStorage.getItem("wish")) || [];

    const existingProduct = wish.find(item => item.id === produc.id);
    if (existingProduct) {
        existingProduct.count += 1;
    } else {
        produc.count = 1;
        wish.push(produc);
    }

    localStorage.setItem("wish", JSON.stringify(wish));
}

document.querySelectorAll('.wish .ad1').forEach((button, ind) => {
    button.addEventListener("click", () => {

        const produc = {
            id: 1,
            title: "Thermo Ball Etip Gloves",
            price: 45743,
            images: ["https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"]
        };
        addTo(produc);
    });
});






function addTo2(produc2) {
    let wish = JSON.parse(localStorage.getItem("wish")) || [];

    const existingProduct = wish.find(item => item.id === produc2.id);
    if (existingProduct) {
        existingProduct.count += 1;
    } else {
        produc2.count = 1;
        wish.push(produc2);
    }

    localStorage.setItem("wish", JSON.stringify(wish));
}

document.querySelectorAll('.wish .ad2').forEach((button, ind) => {
    button.addEventListener("click", () => {

        const produc2 = {
            id: 2,
            title: "Thermo Ball Etip Gloves",
            price: 45743,
            images: ["https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"]
        };
        addTo2(produc2);
    });
});




function addTo3(produc3) {
    let wish = JSON.parse(localStorage.getItem("wish")) || [];

    const existingProduct = wish.find(item => item.id === produc3.id);
    if (existingProduct) {
        existingProduct.count += 1;
    } else {
        produc3.count = 1;
        wish.push(produc3);
    }

    localStorage.setItem("wish", JSON.stringify(wish));
}

document.querySelectorAll('.wish .ad3').forEach((button, ind) => {
    button.addEventListener("click", () => {

        const produc3 = {
            id: 3,
            title: "Thermo Ball Etip Gloves",
            price: 45743,
            images: ["https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"]
        };
        addTo3(produc3);
    });
});


