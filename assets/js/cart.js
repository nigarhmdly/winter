let main = document.querySelector(".main");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
    main.innerHTML = ` `;
} else {
    cart.forEach((element) => {
        let box = document.createElement("div");
        box.classList.add("product-box");

        box.innerHTML = `
            <img class="cardimg" src="${element.images[0]}" alt="${element.title}">
            <p >${element.title}</p>
            <p >$${element.price}</p>
            <p class="cardp">Count: ${element.count}</p>
        `;
        
        main.appendChild(box);
    });
}


