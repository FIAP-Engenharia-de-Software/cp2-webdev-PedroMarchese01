// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  let note = nota
  if (note >= 6){
    return "Aprovado"
  }else if (note<=6){
    return "Reprovado"
  }else{
    return "Nota inválida"
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };