var idade = parseFloat(prompt("Digite a sua idade"));

if (idade >= 18) {
  console.log("Idade permitida para dirigir");
} else if (idade >= 1) {
  console.log("Sua idade não permite dirigir");
} else {
  console.log("Idade invalida");
}