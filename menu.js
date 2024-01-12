function menu() {
    let menuMobile = document.querySelector('.lista-mobile');
    if (menuMobile.classList.contains('abrir')) {
        menuMobile.classList.remove('abrir');
        document.querySelector('.img').src = "abrir.svg";
    } else {
        menuMobile.classList.add('abrir');
        document.querySelector('.img').src = "fechar.svg"
    }
}