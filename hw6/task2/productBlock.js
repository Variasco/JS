var i, product, img, title, price, btn, sum = 0;

for (i = 0; i < products.length; i++) { // верстаем блок product
    product = document.createElement("div");
    product.className = "product__unit";

    img = document.createElement("img");
    img.src = products[i].imgSrc;
    img.alt = products[i].title;
    img.className = "product__image margin";
    product.append(img);

    title = document.createElement("h3");
    title.innerText = products[i].title;
    title.className = "product__title margin";
    product.append(title);

    price = document.createElement("p");
    price.className = "product__price margin"
    price.innerText = products[i].price + ' ₽';
    product.append(price);

    btn = document.createElement("button");
    btn.className = "product__button";
    btn.innerText = "Купить";
    btn.index = i;
    btn.onclick = pushToCart;
    product.append(btn);

    document.querySelector(".product").append(product);
}

function pushToCart (event) {
    var box = document.querySelector(".cart__prod");
    var index = event.target.index;

    var title = document.createElement("h3");
    title.innerText = products[index].title;
    box.append(title);

    var price = document.createElement("p");
    price.innerText = products[index].price + ' ₽';
    price.className = "margin";
    box.append(price);

    sum += +products[index].price;
    document.querySelector(".cart__total").innerHTML = "Итого " + sum + ' ₽';
}