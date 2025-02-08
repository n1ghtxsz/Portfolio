function centralizarModal() {
    let modal = document.getElementById("modal");
    let larguraTela = window.innerWidth;
    let alturaTela = window.innerHeight;

    let larguraModal = modal.offsetWidth;
    let alturaModal = modal.offsetHeight;

    modal.style.position = "fixed";
    modal.style.top = (alturaTela - alturaModal) / 2 + "px";
    modal.style.left = (larguraTela - larguraModal) / 2 + "px";
}

// Chamar a função ao abrir o modal
function abrirModal() {
    let modal = document.getElementById("modal");
    modal.classList.remove('d-none')
    modal.style.display = "block";
    document.body.style.overflow = 'hidden'
    centralizarModal();

    let overlay = document.createElement("div");
    overlay.id = "modalOverlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "999";
    
    document.body.appendChild(overlay);
    modal.style.display = "block";

    overlay.onclick = fecharModal; 
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = 'auto'
    let overlay = document.getElementById("modalOverlay");
    if (overlay) overlay.remove();
}

// Atualizar posição ao redimensionar a tela
window.addEventListener("resize", centralizarModal);