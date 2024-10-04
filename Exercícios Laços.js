///////////////// Exercicios interpretação de código
//1

/*let valor = 0
for(let i = 0; i<5; i++) {
	valor += i 
} 
console.log(valor)*/
/*Será impresso no console o número 10*/

//2

/*const lista = [10, 11, 12, 15, 18, 19, 20, 21, 23, 25, 27, 30]
for(let numero of lista) {
	if (numero>18) {
		console.log(numero)
	}
}*/

/*a) Imprime no console todos os números maiores que 18
b) */

//3

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
} */

/*Será impresso linhas com asteriscos, indo até o número digitado pelo usuário, nesse caso 4*/



/////////////Exercícios de escrita de código

//1
/*let pets = Number(prompt("Quantos animais de estimação você tem?"))

if (pets === 0) {
 console.log ("Que pena! Você pode adotar um pet!");

} else {
	let nomePets = [];
	for (let i = 0; i< pets; i++) {
		let nomes = prompt("Digite o nome do seu pet" + (i + 1) + ":");
		nomePets.push(nomes); 
	} 
 console.log ("Os nomes dos seus pets são: " + nomePets+ (","));
	
	console.log(nomePets);
}*/

//2
let arrayOriginal = [10, 20, 30, 40, 45, 50, 55] 
//a
/*for(let numero of arrayOriginal) {
	console.log(numero)
}*/

//b
/*function arrayzao(arrayOriginal) {
	for (let i = 0; i < arrayOriginal.length; i++) { 
		console.log(arrayOriginal[i] / 10)
	}
}
arrayzao(arrayOriginal)*/

//c
/*function arrayPares (array) {
	let numerosPares = [];
	for(let i = 0; i< array.length; i++) {
if(arrayOriginal[i]%2===0) {
	numerosPares.push(array[i]);
}
	} console.log(numerosPares)
}
 arrayPares(arrayOriginal)*/

//d
function novaArrayString(array) {
let novaArray = [];
for(let i = 0; i<arrayOriginal.length; i++) {
	novaArray.push("O elemento do índex " + i + " é: " + arrayOriginal[i])
}
 console.log(novaArray)
}
novaArrayString(arrayOriginal)


//e

