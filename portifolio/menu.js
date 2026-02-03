
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let btnFechar = document.getElementById('btn-fechar')
let overlay = document.getElementById('overlay-menu')

// abrir menu
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

// fechar menu no X
btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

// fechar menu clicando no fundo
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})