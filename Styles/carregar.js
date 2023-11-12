function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 6 && hora < 12) {
        // Bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#00aeff'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#c75208'
    } else {
        // Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#0d1a2a'
    }
}
