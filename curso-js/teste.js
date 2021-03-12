var contador = 0
var numero = 2
var avaliador = 0
while (contador <= 9900){
    var divisor = 1
        while (divisor <= numero) {
        var resultado = numero % divisor
        if (resultado == 0) {
            avaliador++
        }
        divisor++
    }
    if (avaliador <= 2) {
        console.log(`${numero} é primo`)
    }/* else {
        console.log(`${numero} não é primo`)
    }*/
    avaliador = 0
    contador++
    numero++
}