 // Adiciona um ouvinte de evento ao botão de geração
 document.getElementById("generateBtn").addEventListener("click", function () {
    // Obtém o valor do input e a área do código de barras
    let inputString = document.getElementById("textInput").value;
    let barcodeArea = document.getElementById("barcodeArea");
    let errorMessage = document.getElementById("error-message");

    // Verifica se o input está vazio
    if (!inputString.trim()) {
        // Exibe uma mensagem de erro e limpa a área do código de barras
        errorMessage.textContent = 'DIGITE O NÚMERO DESEJADO';
        barcodeArea.innerHTML = '';
        return; // Sai da função se houver um erro
    }

    // Limpa a mensagem de erro
    errorMessage.textContent = '';

    // Limpa o código de barras anterior
    barcodeArea.innerHTML = '';

    // Itera sobre cada caractere do input
    for (let char of inputString) {
        // Converte o caractere para seu valor binário
        let binaryString = char.charCodeAt(0).toString(2);

        // Itera sobre cada bit do valor binário
        for (let bit of binaryString) {
            // Cria uma barra (preta ou branca) e a adiciona à área do código de barras
            let bar = document.createElement('div');
            bar.classList.add('bar', bit === '1' ? 'black' : 'white');
            barcodeArea.appendChild(bar);
        }

        // Adiciona um espaço entre os caracteres do código de barras
        let gap = document.createElement('div');
        gap.classList.add('bar', 'white');
        barcodeArea.appendChild(gap);
    }

    // Limpa o input após a geração do código de barras
    document.getElementById("textInput").value = '';
});

// Função para converter um número para binário
function toBinary(n) {
    return (n >>> 0).toString(2);
}