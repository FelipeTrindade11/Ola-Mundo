function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = Math.floor(Math.random() * 13 + Math.random() * 13)
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora <= 12) {
        //Bom dia
        img.src = 'manha.png'
        window.document.body.style.background = '#f2caa7'
    } else if (hora > 12 && hora < 18) {
        //Boa tarde
        img.src = 'tarde.png'
        window.document.body.style.background = '#b76e39'
    } else {
        //Boa noite
        img.src = 'noite.png'
        window.document.body.style.background = '#032139'
    }
}


