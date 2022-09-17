altura = 0
largura = 0
vidas = 1

// Escolher nivel
function iniciarJogo() {
    nivel = document.getElementById("nivel").value

    if (nivel == "") {
        alert("Escolha um nível primeiro!")
    } else {
        window.location.href = "game.html?" + nivel
    }
}

/// Nivel
function dificuldadeJogo() {
    nivel = window.location.search.replace('?', '')

    switch (nivel) {
        case 'noob' : tempo = 15
        break

        case 'pro' : tempo = 10
        break

        case 'profissional' : tempo = 7.5
        break
    }
}

// posRandomica
function tamanhoTela() {
    altura = window.innerHeight
    largura = window.innerWidth
}

tamanhoTela()
dificuldadeJogo()

let resetarTempo = 30

setInterval(function () { 
    tempo -= 1
    
    if (tempo == 0) {
        clearInterval(resetarTempo)
        clearInterval(criarMosquito)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('tempoJogo').innerHTML = tempo
    }
}, 1000)