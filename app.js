alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random(0, 100) * 100 + 1);
console.log("numeroSecreto");
let chute;
let contador = 0;

//enquanto
while (chute != numeroSecreto) {
  //contador = contador + 1
  contador++;
  chute = prompt("Escolha um número entre 1 e 100");

  // se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if (numeroSecreto > chute) {
      alert("O número secreto é maior que o " + chute);
    } else {
      alert("O número secreto é menor que o " + chute);
    }
  }
}
let palavraTentativa = contador > 1 ? "tentativas" : "tentativa";
alert(
  "Isso ai! Você descobriu o número secreto " +
    numeroSecreto +
    " com " +
    contador +
    " " +
    palavraTentativa
);

//if (contador == 1){
//alert("Isso ai! Você descobriu o número secreto "+ numeroSecreto + " com " + contador + " Tentativa")
//}else{
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${contador} tentativas.`);
//}
