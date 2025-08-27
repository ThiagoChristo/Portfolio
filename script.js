document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão "Voltar ao Topo" pelo seu ID
    const backToTopButton = document.getElementById('voltar-ao-topo-btn')

    window.addEventListener('scroll', () => {
        // Se o usuário rolou mais de 200 pixels para baixo
        if (window.scrollY > 200) {
            backToTopButton.classList.add('hidden')
        } else {
            backToTopButton.classList.remove('hidden')
        }
    })
})