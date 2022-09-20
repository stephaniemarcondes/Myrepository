class Elevador {
    constructor(andarAtual, totalDeAndares, capacidade, totalDePessoas) {
      this.andarAtual = andarAtual;
      this.totalDeAndares = totalDeAndares;
      this.capacidade = capacidade;
      this.totalDePessoas = totalDePessoas;
      
    }

    entrar(capacidade, totalDePessoas) {
        if (totalDePessoas < capacidade) {
            return totalDePessoas + 1
        }
        else {}
    }

    sair(capacidade, totalDePessoas) {
        if (totalDePessoas > 0) {
            return totalDePessoas - 1
        }
        else {}
    }

    subir(andarAtual, totalDeAndares) {
        if(andarAtual < totalDeAndares) {
            return andarAtual += 1
        }
        else {}
    }

    descer(andarAtual) {
        if (andarAtual > 1) {
            return andarAtual -= 1
        }
        else {}
    }
}