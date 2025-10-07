var nota1 = parseFloat(prompt("Informe a primeira nota: "));
var nota2 = parseFloat(prompt("Informe a segunda nota: "));
var nota3 = parseFloat(prompt("Informe a terceira nota: "));



function media() {
    const notas = (nota1 + nota2 + nota3) / 3
    const formatado = notas.toFixed(1);


    if (formatado >= 7) {
        alert("Sua nota é " + formatado + " ....Parabéns você foi aprovado!");
    } else if (("Sua nota é " + formatado >= 5) && (formatado < 7)) {
        alert("Sua nota é " + formatado + ", eita... está de recuperação");
    } else {
        alert("Sua nota é " + formatado + " ,você está reprovado")
    }


}

console.log(media())







