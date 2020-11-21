var numberOfPictures = 5, images = [], box, i, j = 0, prev, next;

box = document.querySelector(".container");
for (i = 0; i < numberOfPictures; i++) { // Верстаем картинки на страницу, количество = numberOfPictures
    images[i] = document.createElement("img");
    images[i].src = 'img/' + (i + 1) + '.jpg';
    images[i].alt = "image" + (i + 1);
    if (i !== 0) {
        images[i].style.display = "none";
    }
    box.append(images[i]);
}

prev = document.querySelector(".prev");
prev.onclick = function () { // Определяем действие по нажатию кнопки "<"
    images[j].style.display = "none";
    j--;
    if (j === -1) {
        j = images.length - 1;
    }
    images[j].style.display = "block";
};

next = document.querySelector(".next");
next.onclick = function () { // Определяем действие по нажатию кнопки ">"
    images[j].style.display = "none";
    j++;
    if (j === images.length) {
        j = 0;
    }
    images[j].style.display = "block";
}