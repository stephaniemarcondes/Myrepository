class Pessoa {
    constructor(nome, anoDeNascimento, cidade) {
      this.nome = nome;
      this.anoDeNascimento = anoDeNascimento;
      this.cidade = cidade;
      
    }

    calcularIdade(nome) {
const idade = 2022 - this.anoDeNascimento
        return idade
    }
    apresentar(nome) {
        return  console.log(`${this.nome} possui ${2022 - this.anoDeNascimento} anos de idade e atualmente está morando em ${this.cidade}.`)
    }
}