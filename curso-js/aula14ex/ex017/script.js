function calcular() {
    var num = window.document.getElementById('tnum')
    var tab = window.document.getElementById('seltab')
    
    var n = Number(num.value)
    var c = 1
    tab.innerHTML = ''
    while (c <= 10) {
        var res = n * c
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${res}`
        tab.appendChild(item)
        c++
    }
}