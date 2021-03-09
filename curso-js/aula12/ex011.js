var idade = 75
console.log(`Você tem ${idade}`)
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18 || idade > 65) {
        console.log('Vota, mas não obrigatório')
    } else {
        console.log('Voto obrigatório')
    }
}