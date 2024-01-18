alert("Boas vindas ao jogo do número secreto");
let numeroMax = prompt("Digite qual o valor máximo que pode ser escolhido ");
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log("numeroSecreto");
let chute;
let contador = 0;

//enquanto
while (chute != numeroSecreto) {
  //contador = contador + 1
  contador++;
  chute = prompt("Escolha um número entre 1 e "+ numeroMax);

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
