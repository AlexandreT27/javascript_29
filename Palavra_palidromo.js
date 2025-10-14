var palavra = prompt("Digite uma palavra:");

function verificarPalindromo(palavra) {
    const palavraLimpa = palavra.toLowerCase().replace(/[^a-z0-9]/gi, ''); // Remove caracteres especiais
    const palavraInvertida = palavraLimpa.split('').reverse().join('');
    return palavraLimpa === palavraInvertida;
}

if (verificarPalindromo(palavra)) {
    alert(`"${palavra}" é um palíndromo!`);
} else {
    alert(`"${palavra}" não é um palíndromo.`);
}