class Produto {
    constructor (nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    valorTotal () {
        return this.preco * this.quantidade
    }

    atualizarQuatidade (quantidadeNova) {
        this.quantidade = quantidadeNova
    }

    verificarDisponibilidade () {
        if (this.quantidade > 0) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

    aplicarDesconto (desconto) {
        let descontoEmPorcentagem = desconto / 100
        let descontoEmValor = this.valor * descontoEmPorcentagem
        this.valor -= descontoEmValor
    }

    calcularPrecoTotal (suaQuantidade) {
        console.log(suaQuantidade * this.preco)
    }

    verificarPromocao (meuPreco) {
        if (meuPreco < this.preco) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
    
    removerEstoque (unidades) {
        if (unidades > this.quantidade) {
            this.quantidade = 0
        } else {
            this.quantidade -= unidades
        }
    }

    aumentarPrecoTotal (porcentagem) {
        porcentagem = porcentagem / 100 + 1
        this.preco = this.preco * porcentagem
    }

    calcularPrecoUnitario () {
        console.log(this.preco)
    }

    verificarEstoqueMinimo (estoqueMinimoDesejado) {
        if (estoqueMinimoDesejado >= this.quantidade) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

    duplicarEstoque () {
        this.quantidade = this.quantidade * 2
    }

    calcularValorVenda (margemDeLucro) {
        let margemDeLucroPorcentagem = margemDeLucro / 100 + 1
        console.log(this.preco * margemDeLucroPorcentagem)
    }

    calcularValorTotalEstoque () {
        console.log(this.quantidade * this.preco)
    }

    verificarEstoqueBaixo (estoqueMinimoDesejado) {
        if (estoqueMinimoDesejado >= this.quantidade) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

    reiniciarEstoque () {
        this.quantidade = 0
    }

    reabastecerEstoque (quantidadeNova) {
        this.quantidade = quantidadeNova
    }

    calcularValorMedio () {
        console.log(this.valorTotal() / this.quantidade)
    }

    calcularPrecoComImposto (imposto) {
        let impostoEmPorcentagem = imposto / 100 + 1
        console.log(this.preco * impostoEmPorcentagem)
    }
}

let arroz = new Produto ("Arroz", 30, 10)

console.log(arroz.valorTotal())
arroz.atualizarQuatidade(20)
arroz.verificarDisponibilidade()
arroz.aplicarDesconto(30)
arroz.calcularPrecoTotal(40)
arroz.verificarPromocao(15)
arroz.removerEstoque(14)
arroz.aumentarPrecoTotal(10)
arroz.calcularPrecoUnitario()
arroz.verificarEstoqueMinimo(10)
arroz.duplicarEstoque()
arroz.calcularValorVenda(50)
arroz.calcularValorTotalEstoque()
arroz.verificarEstoqueBaixo(28)
arroz.reiniciarEstoque()
arroz.reabastecerEstoque(10)
arroz.calcularValorMedio()
arroz.calcularPrecoComImposto(10)