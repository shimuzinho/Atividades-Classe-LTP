class Carro {
    constructor (marca, modelo, cor) {
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
    }
}

let meuCarro = new Carro ("Toyota", "Corolla", "Prata")
let carroFilho = new Carro ("Ferrari", "458", "Vermelho")
let carroPai = new Carro ("Volkswagen", "Fusca", "Azul")
let carroMae = new Carro ("Chevrolet", "Bel Air", "Prata")

console.log(meuCarro, carroFilho, carroMae, carroPai)