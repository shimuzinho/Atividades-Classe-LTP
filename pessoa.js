class Pessoa {
    constructor (nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}`)
    }
    
    verificarMaioridade() {
        if (this.idade >= 18) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

    quantidadeDeDias() {
        console.log(this.idade * 365)
    }

    verificarIdosa() {
        if (this.idade >= 60) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

    idadeProximoAno() {
        console.log(this.idade + 1)
    }

    despedida() {
        console.log(`Até logo, ${this.nome}!`)
    }

    saudacaoFormal() {
        if (this.idade > 59) {
            console.log(`Olá Sr.${this.nome}`)
        } else {
            console.log(`Olá ${this.nome}`)
        }
    }
}

let eu = new Pessoa ("Pedro", 16)

eu.saudacao()
eu.verificarMaioridade()
eu.quantidadeDeDias()
eu.verificarIdosa()
eu.idadeProximoAno()
eu.despedida()
eu.saudacaoFormal()