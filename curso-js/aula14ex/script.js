function contar() {
    var inicio = Number(window.document.getElementById('tinicio').value)
    var fim = Number(window.document.getElementById('tfim').value)
    var passo = Number(window.document.getElementById('tpasso').value)
    var res = window.document.getElementById('res')
    if (inicio >= fim || inicio <= fim) {
        if (passo == 0 && inicio <= fim){
            passo = 1
            res.innerHTML = `&#128073;`
            for (inicio; inicio <= fim; inicio += passo){
                res.innerHTML += `${inicio} &#128073;`
            }
            res.innerHTML += `Fim`
        }else if (passo == 0 && inicio >= fim) {
            passo = 1
            res.innerHTML = `&#128073;`
            for (inicio; inicio <= fim; inicio -= passo){
                res.innerHTML += `${inicio} &#128073;`
            }
            res.innerHTML += `Fim`
        } else {
            res.innerHTML = `&#128073;`
            for (inicio; inicio <= fim; inicio -= passo){
                res.innerHTML += `${inicio} &#128073;`
            }
            res.innerHTML += `Fim`
        }
    } else {
        window.alert('[ERRO] - dados inválidos')
    }
}


