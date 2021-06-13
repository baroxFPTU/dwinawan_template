const btnNav = document.querySelector('.btn-nav');
const menuElm = document.querySelector('.header__menu');
const btnClose = document.querySelector('.btn-close')
const line = document.querySelector('.line');
const headerLinkActive = document.querySelector('.header__link.active');
const headerLinks = document.querySelectorAll('.header__link');

headerLinks.forEach((item) => {
    item.onclick = () => {
        document.querySelector('.header__link.active').classList.remove('active');

        item.classList.add('active');
        scaleLine(item)
    }
})

btnNav.addEventListener('click',() => {
    document.querySelector('body').style = 'overflow: hidden;'
    menuElm.classList.add('active');
})

btnClose.addEventListener('click',() => {
    document.querySelector('body').style = 'overflow: auto;'

    menuElm.classList.remove('active');
})

window.onload = () => {
    scaleLine(headerLinkActive)
}

function scaleLine(elm) {
    line.style = `
    left:${elm.offsetLeft}px;
    width:${elm.offsetWidth}px;`
}