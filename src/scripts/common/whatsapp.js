let botao_contato = document.getElementById('contact-button')
let whatsapp_icon = document.querySelector('div.whatsapp-icon')

whatsapp_icon.onmouseover = function () {
    botao_contato.removeAttribute('class', 'd-none')
    botao_contato.setAttribute('class', 'd-block btn-contato')
}

whatsapp_icon.onmouseout = function () {
    botao_contato.removeAttribute('class', 'd-block')
    botao_contato.setAttribute('class', 'd-none')
}