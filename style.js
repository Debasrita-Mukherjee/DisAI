// ==============================
// Add to Bag Button
// ==============================

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        alert("✅ Product added to bag!");

    });

});

// ==============================
// Search Function
// ==============================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    const products = document.querySelectorAll(".product-card");

    products.forEach((product) => {

        let productName = product.querySelector("h3").innerText.toLowerCase();

        if(productName.includes(value)){

            product.style.display = "block";

        }
        else{

            product.style.display = "none";

        }

    });

});

// ==============================
// Navbar Clickable Options
// ==============================

const navItems = document.querySelectorAll("nav ul li");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        alert("Opening " + item.innerText + " Section");

    });

});

// ==============================
// Icons Clickable
// ==============================

const icons = document.querySelectorAll(".icons div");

icons.forEach((icon) => {

    icon.addEventListener("click", () => {

        let text = icon.innerText;

        alert(text + " Page Opened");

    });

});

// ==============================
// Category Cards Clickable
// ==============================

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach((card) => {

    card.addEventListener("click", () => {

        let categoryName = card.querySelector("h3").innerText;

        alert(categoryName + " Category Opened");

    });

});

// ==============================
// Product Cards Clickable
// ==============================

const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {

    card.addEventListener("click", () => {

        let productName = card.querySelector("h3").innerText;

        alert("Opening Product: " + productName);

    });

});

// ==============================
// Hover Animation
// ==============================

navItems.forEach((item)=>{

    item.addEventListener("mouseover", ()=>{

        item.style.transform = "scale(1.1)";

    });

    item.addEventListener("mouseout", ()=>{

        item.style.transform = "scale(1)";

    });

});