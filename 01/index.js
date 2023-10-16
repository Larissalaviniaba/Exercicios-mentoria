// const numeros = [2, 3, 4, 6];

const precos = [5, 10, 3];

solucao(precos);

function solucao(precos) {
  //seu codigo aqui
  let menorValor = Infinity;

  for (let i = 0; i < precos.length; i++) {
    for (let y = i + 1; y < precos.length; y++) {
      const compra = precos[i];
      const venda = precos[y];
      const result = compra - venda;

      if (!(result < 0)) {
        menorValor = result < menorValor ? result : menorValor;
      }
    }
  }
  console.log(menorValor);
}
