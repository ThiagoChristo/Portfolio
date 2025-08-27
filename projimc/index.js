// Adiciona um listener que executa o código apenas quando todo o HTML foi carregado.
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os elementos do HTML com os quais vamos interagir
    const imcForm = document.getElementById('imc-form')
    const weightInput = document.getElementById('weight')
    const heightInput = document.getElementById('height')
    const clearButton = document.getElementById('btn-clear')
    const resultContainer = document.getElementById('result-container')
    const imcResultEl = document.getElementById('imc-result')
    const imcDescriptionEl = document.getElementById('imc-description')

    /**
     * Função principal que calcula o IMC.
     * @param {Event} e - O evento de submissão do formulário.
     */
    function calculateIMC(e) {
        // Previne o comportamento padrão do formulário, que é recarregar a página.
        e.preventDefault()

        // Obtém e converte os valores dos inputs para números.
        const weight = parseFloat(weightInput.value)
        const height = parseFloat(heightInput.value)

        // Validação par agarantir que os número inseridos são válidos.
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert("Por favor, preencha os campos de peso e altura com valores válidos.")
            return
        }

        // Converte a altura de centímetros par ametros.
        const heightInMeters = height / 100

        const imc = (weight / (heightInMeters * heightInMeters)).toFixed(2)

        displayResult(imc)
    }

    /**
     * Exibe o resultado do IMC na tela e fornece uma descrição.
     * @param {number} imc - O valor do IMC calculado.
     */
    function displayResult(imc) {
        let description = ''

        // Estrutura condicional para determinar a classificação do IMC.
        if (imc < 18.5) {
            description = 'Você está abaixo do peso ideal.'
        } else if (imc >= 18.5 && imc < 25) {
            description = 'Você está com o peso normal. Parabéns!'
        } else if (imc >= 25 && imc < 30) {
            description = 'Você está com sobrepeso.'
        } else if (imc >= 30 && imc < 35) {
            description = 'Você está com Obesidade Grau I.'
        } else if (imc >= 35 && imc < 40) {
            description = 'Você está com Obesidade Grau II.'
        } else {
            description = 'Você está com Obesidade Grau III (Mórbida).'
        }

        // Atualiza o conteúdo dos elementos no HTML com o resultado.
        imcResultEl.textContent = `Seu IMC é ${imc}`
        imcDescriptionEl.textContent = description

        // Remove a classe 'hidden' para que o contéiner de resultado apareça.
        resultContainer.classList.remove('hidden')
    }

    /**
     * Limpa os campos do formulário e esconde o resultado.
     */
    function clearFields() {
        weightInput.value = ''
        heightInput.value = ''
        // Adiciona a classe 'hidden' para esconder o resultado novamente
        resultContainer.classList.add('hidden')
    }

    // Adiciona um listener para o evento de 'submit' do formulário, que chama a função de cálculo.
    imcForm.addEventListener('submit', calculateIMC)

    // Adiciona um litener para o evento de 'click' no botão de limpar.
    clearButton.addEventListener('click', clearFields)
})