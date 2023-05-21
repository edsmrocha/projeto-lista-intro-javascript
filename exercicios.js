// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo (altura,largura) {
  altura = Number(prompt("Qual sua Altura?"))
  largura = Number(prompt("Qual sua Largura?"))
  console.log(altura*largura);
}


// EXERCÍCIO 02
function imprimeIdade(anoAtual, nascimento) {
  anoAtual = Number(prompt("Qual ano atual?"))
  nascimento = Number(prompt("Qual ano de Nascimento?"))
  console.log(anoAtual-nascimento);
  
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso /(altura*altura)
  

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = Number(prompt("Qual sua idade?"))
  const email = prompt("Qual seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const suaCor1 = prompt("Sua primeira cor favorita?")
  const suaCor2 = prompt("Sua segunda cor favorita?")
  const suaCor3 = prompt("Sua terceira cor favorita?")
  console.log([suaCor1,suaCor2,suaCor3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
  // implemente sua lógica aqui
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
 
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiro = array[0]
  let segundo = array[array.length -1]
  array[0] = segundo
  array[array.length -1] = primeiro
  return array
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  return string1.toUpperCase() === string2.toUpperCase()

  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number (prompt("Qual ano atual?"))
  const anoNasc = Number (prompt("Qual ano de nascimento?"))
  const emissaoAno = Number (prompt("Qual ano foi emitida sua idenditade?"))

  const idade = anoAtual - anoNasc
  const tempoIdentitade = anoAtual - emissaoAno

  return tempoIdentitade - idade
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}