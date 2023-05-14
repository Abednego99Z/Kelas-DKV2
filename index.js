// class
const navigasi = document.querySelector('.navbar-nav');
const menu = document.querySelector('#menu');
const x = document.querySelector('#close');
// toggle menu
document.querySelector('#menu').
onclick = () => {
    navigasi.classList.toggle('active');
    menu.classList.toggle('button-hide');
    x.classList.toggle('button-show');
};
// toggle button
document.querySelector('#close').
onclick = () => {
    navigasi.classList.toggle('active');
    menu.classList.toggle('button-hide');
    x.classList.toggle('button-show');
}
// close without x-mark
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navigasi.contains(e.target)) {
        navigasi.classList.remove('active');
        x.classList.remove('button-show');
    }
    if (!menu.contains(e.target) && !navigasi.contains(e.target) && !x.contains(e.target)) {
        menu.classList.remove('button-hide');
    }
});