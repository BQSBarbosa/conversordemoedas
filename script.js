function Converter() {
  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmDolar = (valorEmRealNumerico / 5.23).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Dólar é U$ " + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmEuro = (valorEmRealNumerico / 5.19).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Euro é € " + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmBitcoin = (valorEmRealNumerico / 99889.52).toFixed(6);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Bitcoin é BTC " + valorEmBitcoin;
  elementoValorConvertido.innerHTML = valorConvertido;
}