var fruta = prompt("Digite uma fruta:").toLowerCase();

let frutas = ["maçã", "morango", "manga"];

if (frutas.includes(fruta)) {
    alert(`A fruta "${fruta}" já está na lista!`);
} else {
    frutas.push(fruta);
    alert("Fruta adicionada! Lista atual: " + frutas.join(", "));
}

console.log("Lista de frutas:", frutas);

let primeiraFrutaRemovida = frutas.shift();
alert("Fruta removida: " + primeiraFrutaRemovida);
console.log("Fruta removida:", primeiraFrutaRemovida);

alert("Fruta digitada: " + fruta);
console.log("Fruta digitada:", fruta);