// //CODIGO AQUI
// let saldo
// saldo = 15
// saldo = saldo + 22.40
// console.log("soma", saldo);

// saldo-=12.34
// //saldo= saldo -12.34
// console.log("subtração", saldo);

// saldo =saldo/3
// console.log("divisao", saldo);

// saldo =saldo*3.42
// console.log("multiplicação", saldo); 

// saldo = saldo%3
// console.log("resto", saldo);

// const multEsoma1 = 2*2+2
// console.log("MS1", multEsoma1);

// const multEsoma2 = 2*(2+2)
// console.log("MS2", multEsoma2);

// const resultado1 = 5===5
// console.log("R1", resultado1);
// const resultado2 = 5!==5
// console.log("R2", resultado2);
// const resultado3 = 5!=="5"
// console.log("R3", resultado3);
// const resultado4 = "5"==="cinco"
// console.log("R4", resultado4);
// const resultado5 = typeof 5 === typeof 20 
// console.log("R5", resultado5);
// const resultado6 = typeof "5" === typeof "cinco"
// console.log("R6", resultado6);

// //MENOR E MANIOR
// console.log("MENOR E MAIOR");

// const primeiroNum = 35
// const segundoNum = 10

// console.log("O primeiro numero é igual ao segundo numero?", primeiroNum == segundoNum,);
// console.log("O primeiro numero é menor ou igual ao segundo numero?", primeiroNum <= segundoNum);
// console.log("O primeiro numero é maior ou igual ao segundo numero?", primeiroNum >= segundoNum);
// console.log("O primeiro numero é maior que o segundo numero?", primeiroNum > segundoNum);
// console.log("O primeiro numero é menor que o segundo numero?", primeiroNum < segundoNum);

//Logica

// const a= "Quero dirigir um Celta 2012";
// const b= "Sou maior de idade";
// const c= "Consigo comprar um celta por R$22.000 Reais";
// const d= "Consigo Alugar o Celta";
// const e= "Tenho carteira de motorista";

// //Quero dirigir o Celta 2012
// Não sou maior de idade
// Sou maior de idade e não tenho carteira de motorista
// Sou maior de idade e consigo comprar ou alugar o celta
// Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta 

// No código, as frases ficariam assim:

// a
// !b (!b ainda pode ser algo como idade < 18, por exemplo)
// b && !e
// b && (c || d) (c ainda pode ser algo como saldo > 22000)
// (b && e) && !a

// Faça um programa que:
// Pergunte sua idade;
// Pergunte a idade do seu melhor amigo ou da sua melhor amiga;
// Imprima a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false);
// Imprima na console a diferença de idade (não tem problema se sair um número negativo).

const minhaIdade = prompt("Qual sua idade");
const idadeAmiga = prompt("Qual a idade da sua melhor amiga?")

console.log("Minha idade é maior do que a da minha melhor amiga?", minhaIdade > idadeAmiga);
console.log("A nossa diferença de idade é de", minhaIdade - idadeAmiga, "anos");

// Considere as seguintes afirmações, e crie variáveis para elas.
// a: “vou para a praia!” 
// b: “sou maior de idade”
// c: “posso tomar uma cervejinha”
// d: “quero passear de carro”

// Com as afirmações criadas, escreva as operações lógicas para as frases abaixo:

// Não sou maior de idade e quero passear de carro;
// Sou maior de idade e vou para a praia, e não quero passear de carro
// Vou para a praia ou quero passear de carro
// Posso tomar uma cervejinha e não vou passear de carro

// !b && d
// (b && a) && !d 
// a || d 
// c && !d

