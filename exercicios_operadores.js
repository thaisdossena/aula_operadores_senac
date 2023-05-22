    //Exercícios de interpretação de código

    //1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)//false, retorna 'true' se todos booleanos forem 'true'

let resultado1 = bool1 && bool2 && bool3
console.log("b. ", resultado1)//false, retorna 'true' se todos booleanos forem 'true'

let resultado2 = !resultado && (bool1 || bool2)
console.log("c. ", resultado2)//'true', retornaria faklse se todos booleanos fossem 'false'

console.log("d. ", typeof resultado, typeof resultado1,  typeof resultado2)

    //2.Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

let primeiroNumero = prompt("Digite um numero!")//vai retornar uma string, acrescentar Number()
let segundoNumero = prompt("Digite outro numero!")//vai retornar uma string, acrescentar Number()

const soma = primeiroNumero + segundoNumero

console.log(soma)

    //Exercícios de escrita de código

    // 1.Faça um programa que:        
        // a) Pergunte a idade do usuário        
        // b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga        
        // c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)        
        // d) Imprima no console a diferença de idade (não tem problema se sair um número negativo)

const idadeUsuario = Number(prompt("Qual a sua idade?"))
const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

let diferencaIdade = idadeUsuario > idadeMelhorAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", diferencaIdade)

let diferencaIdadeValor = idadeUsuario - idadeMelhorAmigo
console.log("A diferença de idade é igual a:", diferencaIdadeValor)

    // 2. Faça um programa que:        
    //     a) Peça ao usuário que insira um número par
    //     b) Imprima na console o resto da divisão desse número por 2.
    //     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código. //Se número é par resto da divisão é igual a zero
    //     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código. //Se número é impar resto da divisão é igual a um.
    
let numeroPar = Number(prompt("Insira um número par:"))

let restoDivisao = numeroPar % 2 === 0
console.log("O número é par?", restoDivisao)


    // 3.Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console     
    //     a) A idade do usuário em meses    
    //     b) A idade do usuário em dias    
    //     c) A idade do usuário em horas
    
let idadeEmAnos = Number(prompt("Qual a sua idade?"))

let idadeEmMeses = idadeEmAnos * 12
let idadeEmDias = idadeEmAnos * 365
let idadeEmHoras = idadeEmDias * 24

console.log("Sua idade em meses:", idadeEmMeses)
console.log("Sua idade em dias:", idadeEmDias)
console.log("Sua idade em horas:", idadeEmHoras)

    // 4.Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
    //     O primeiro numero é maior que segundo? true
    //     O primeiro numero é igual ao segundo? false
    //     O primeiro numero é divisível pelo segundo? true
    //     O segundo numero é divisível pelo primeiro? true

const primeiroNumero = Number(prompt("Digite um número"))
const segundoNumero = Number(prompt("Digite outro número"))

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)

console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)

console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)

console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)

    //Desafios

    // 1.Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    //     a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
    //     b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
    //     c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
    //     d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

let celsius = (fahrenheit - 32) * (5/9) + 273.15
let fahrenheit= (celsius) * (9/5) + 32

let fahrenheit = 77;
let celsius = (fahrenheit - 32) * (5 / 9) + 273.15;
console.log("77°F em K: " + celsius.toFixed(2) + "K");

celsius = 80;
fahrenheit = celsius * (9 / 5) + 32;
console.log("80°C EM Fahrenheit: " + fahrenheit.toFixed(2) + "°F");

celsius = 30;
fahrenheit = celsius * (9 / 5) + 32;
let kelvin = celsius + 273.15;
console.log("30°C em Fahrenheit: " + fahrenheit.toFixed(2) + "°F");
console.log("30°C em Kelvin: " + kelvin.toFixed(2) + "K");

celsius = 30;
fahrenheit = celsius * (9 / 5) + 32;
kelvin = celsius + 273.15;
console.log("30°C em Fahrenheit: " + fahrenheit.toFixed(2) + "°F");
console.log("30°C em Kelvin: " + kelvin.toFixed(2) + "K");


    // 2.Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.        
    //     a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
    //     b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.

const quantidadeQuilowatts = 280;
const descontoPercentual = 15;

function calcularValorPagamento(quantidadeQuilowatts, descontoPercentual) {
    const valorQuilowattHora = 0.05;
    const valorTotal = quantidadeQuilowatts * valorQuilowattHora;   
    const desconto = (descontoPercentual / 100) * valorTotal;
    
    let valorFinal = valorTotal - desconto;

    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`);   
}      
          
calcularValorPagamento(quantidadeQuilowatts, descontoPercentual);

    