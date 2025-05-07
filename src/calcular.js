// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  let nu1 = num1
  let nu2 = num2
  let opera = operador
  if(!isNaN(nu1) && !isNaN(nu2)){
    return "Erro: parâmetros inválidos"
  }
  else{

    if(nu1 == 0 || nu2 == 0){
      return "Erro: divisão por zero"
    }else{
      if(opera != "*" && opera != "/" && opera != "+" && opera != "-"){
        return "Erro: operação inválida"
      }else{

        if(opera == "*"){
          return nu1 * nu2
        }
        else if(opera == "/"){
          return nu1 / nu2
        }
        else if (opera == "+"){
          return nu1 + nu2
        }
        else if (opera == "-"){
          return nu1 - nu2
        }


      }
    }

  }
  
  
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };