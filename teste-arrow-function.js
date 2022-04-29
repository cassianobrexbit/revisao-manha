// Forma convencional
soma = function(a,b) {
    return a + b;
}

var resultado = soma(1,2)

console.log("Resultado da função convencional: " + resultado)

// Arrow function apontando para o retorno da função 
soma = (a,b) => a + b

var resultado = soma(4,20)

console.log("Resultado da arrow function: " + resultado)
  