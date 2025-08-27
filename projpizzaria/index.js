// Aguarde o conteúdo do HTML ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Seleção dos elementos DOM
    const addButton = document.getElementById('add-item-btn')
    const clearButton = document.getElementById('clear-cart-btn')
    const totalPriceEl = document.getElementById('total-price')

    // Variável para armazenar o valor total do pedido
    let valorTotalPedido = 0

    // Estrutura de Dados para Preços
    const precos = {
        BA: {
            P: 16.00,
            M: 18.00,
            G: 22.00
        },
        FF: {
            P: 15.00,
            M: 17.00,
            G: 21.00
        }
    }

    /**
     * Obtém o preço de um item com base no sabor e tamanho.
     * @param {string} sabor - O código do sabor (ex: 'BA').
     * @param {string} tamanho - O código do tamanho (ex: 'P').
     * @returns {number} - O preço do item ou 0 se não for encontrado. 
     */
    function getPrice(sabor, tamanho) {
        return preços[sabor]?.[tamanho] || 0
    }

    /**
     * Adiciona o valor do item selecionado ao total do pedido.
     */
    function addItemToOrder() {
        // Seleciona o input de sabor que está marcado
        const saborSelecionado = document.querySelector('input[name="sabor"]:checked')
        // Seleciona o input de tamanho que está marcado
        const tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked')

        // Verifica se ambas as opções foram selecionadas
        if (!saborSelecionado || !tamanhoSelecionado) {
            alert('Por favor, selecione um sabor e um tamanho.')
            return
        }

        const sabor = saborSelecionado.value 
        const tamanho = tamanhoSelecionado.value

        // Obtém o preço do item
        const itemPrice = getPrice(sabor, tamanho)

        // Adiciona o preço ao valor total
        valorTotalPedido += itemPrice

        // Atualiza o texto na tela com o novo total formatado
        updateTotalPrice()
    }

    /**
     * Limpa o valor total do pedido e redefine a exibição.
     */
    function clearCart() {
        valorTotalPedido = 0
        updateTotalPrice()
    }

    /**
     * Atualiza o elemento de preço total na tela com o valor formatado.
     */
    function updateTotalPrice() {
        totalPriceEl.textContent = valorTotalPedido.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    addButton.addEventListener('click', addItemToOrder)
    clearButton.addEventListener('click', clearcart)
})