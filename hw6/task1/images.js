var images, i;
images = document.querySelectorAll(".small");
for (i = 0; i < images.length; i++) { // задаем всем картинкам событие onclick c функцей
    images[i].onclick = bigPicture;
}

function bigPicture(event) { // выводит большую картинку
    var box = document.querySelector("#bigPicture");
    box.innerHTML = "";
    var img = document.createElement("img");
    img.src = event.target.src.replace('small', 'large');
    img.alt = event.target.alt;
    img.className = "large";
    box.append(img);
    img.onerror = function () {
        box.innerHTML = "";
        alert("Ошибка. Файл не найден.");
    }
}

// function bigPictureModified(event) { // использует те же картинки, меняется css: width
//    var box = document.querySelector("#bigPicture");
//    box.innerHTML = "";
//    var img = document.createElement("img");
//    img.src = event.target.src;
//    img.alt = event.target.alt;
//    img.className = "large";
//    box.append(img);
//    var err = +event.target.id;
//    if (err === 3) {
//        box.innerHTML = "";
//        alert("Ошибка. Файл не найден.");
//    }
// }