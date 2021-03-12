function verificar() {
    var ano = 2021
    var fano = Number(window.document.getElementById('txtano').value)
    var res = document.getElementById('res')
    if (fano.length == 0 || fano > ano){
        window.alert('Dados incorretos, digite e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade <= 5){
                img.setAttribute('src', 'bebe-homem-250.png')
            } else if (idade <= 13) {    
                img.setAttribute('src', 'crianca-homem-250.png')
            } else if (idade <= 18) {
                img.setAttribute('src', 'jovem-homem-250.png')
            } else if (idade <= 45) {
                img.setAttribute('src', 'adulto-homem-250.png')
            } else {
                img.setAttribute('src', 'idoso-homem-250.png')
            }
        } else {
            gen = 'Mulher'
            if (idade >= 0 && idade <= 5){
                img.setAttribute('src', 'bebe-mulher-250.png')
            } else if (idade <= 13) {
                img.setAttribute('src', 'crianca-mulher-250.png')
            } else if (idade <= 18) {
                img.setAttribute('src', 'jovem-mulher-250.png')
            } else if (idade <= 45) {
                img.setAttribute('src', 'adulto-mulher-250.png')
            } else {
                img.setAttribute('src', 'idoso-mulher-250.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<strong>Sexo:</strong>${gen}  <strong>idade:</strong>${idade} anos.`
        res.appendChild(img)
        img.style.marginTop = '8px'
    }

}