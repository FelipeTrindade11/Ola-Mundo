function contar() {
    var inicio = Number(window.document.getElementById('tinicio').value)
    var fim = Number(window.document.getElementById('tfim').value)
    var passo = Number(window.document.getElementById('tpasso').value)
    var res = window.document.getElementById('res')
    if (passo == 0) {
        passo = 1
        window.alert('Passo não pode ser 0, será considerado 1')
    }
    if (inicio < fim) {
        res.innerHTML = `&#128073;`
            for (inicio; inicio <= fim; inicio += passo){
                res.innerHTML += `${inicio} &#128073;`
            }
        res.innerHTML += `Fim`
    } else {
        res.innerHTML = `&#128073;`
            for (inicio; inicio >= fim; inicio -= passo){
                res.innerHTML += `${inicio} &#128073;`
            }
        res.innerHTML += `Fim`
    }
}


