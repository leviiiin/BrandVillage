const burger = document.getElementById('burger');
if (burger) {
    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
    });
}

