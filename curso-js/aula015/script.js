// Criando um vetor chamado "num"
let num = [5 , 5, 4, 3]

// Adicionando o valor "1" na casa "4" do vetor "num" 
num[4] = 1

// Adicionando o valor "0" na casa ultima casa do vetor "num" utilizando um método "push()"
num.push(0)

// A variável "tam" recebe o tamanho do vetor "num"
var tam = num.length

// Variável "ordem" recebe os valores do vetor "num" em ordem crescente
var ordem = num.sort()

console.log(`Os valores em num é: ${num}`)
console.log(`O tamanho do vetor é ${tam}`)
console.log(`Em ordem crescente os valores ficam: ${ordem}`)

// A variável "oposto" recebe os valores do vetor "num" ao contrário
var oposto = num.reverse()
console.log(ale)

/*
O método "indexOf()" procura o valor desejado.
Se encontrar retorna o valor da casa, se não ele retorna o valor "-1"
*/
var encontrar = num.indexOf(9)
console.log(encontrar)

// A seguir dois jeitos de utilizar o método "for()" para retornar os valores
for(let pos = 0;pos<num.length;pos++){
    console.log(num[pos])
}

for(let posi in num){
    console.log(num[posi])
}