let div_contato = document.getElementById('contato')
let div_certificados = document.getElementById('certificados')

document.getElementById('txt_contato').onclick = function () {
    div_contato.classList.remove('d-none')
    div_certificados.classList.add('d-none')
    document.getElementById('txt_contato').classList.add('select')
    document.getElementById('txt_certificados').classList.remove('select')
}
document.getElementById('txt_certificados').onclick = function () {
    div_contato.classList.add('d-none')
    div_certificados.classList.remove('d-none')
    document.getElementById('txt_contato').classList.remove('select')
    document.getElementById('txt_certificados').classList.add('select')
}