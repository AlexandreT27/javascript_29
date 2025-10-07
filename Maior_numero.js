var num1 = parseInt(prompt("Digite um número: "));
var num2 = parseInt(prompt("Digite um número: "));
var num3 = parseInt(prompt("Digite um número: "));

function maoirNumero(num1, num2, num3) {
    if (num1 > num2 > num3) {
        alert("O número maior é: " + num1);
    } else if (num2 > num1 > num3) {
        alert("O número maior é: " + num2);
    } else {
        alert("O número maior é: " + num3);
    }
}
