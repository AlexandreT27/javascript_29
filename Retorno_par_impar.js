function verificarParImpar(){
  var num = parseInt( prompt("Digite um número: "));

  if (num % 2 == 0) {
    alert("Número par");
    console.log("Número par")
  } else {
    alert("Número impar");
    console.log("Número impar")
   
  }

}
console.log(verificarParImpar())