export class DOM {
    static mostrarClientes(array) {
        const container = document.querySelector(".container")
        array.forEach((cliente) => {
            const li = document.createElement("li")
            li.classList.add("card")
            const nome = document.createElement("h2")
            nome.innerText = cliente.nome
            const divDadosPessoais = document.createElement("div")
            const dadosPessoais = document.createElement("h3")
            dadosPessoais.innerText = "Dados Pessoais"
            const email = document.createElement("p")
            email.innerText = `email: ${cliente.email}`
            const idade = document.createElement ("p")
            idade.innerText = `idade: ${cliente.idade}`
            const cpf = document.createElement("p")
            cpf.innerText = `cpf: ${cliente.cpf}`
            const sexo = document.createElement("p")
            sexo.innerText = `sexo: ${cliente.sexo}`
            const divEndereco = document.createElement("div")
            const endereco = document.createElement("h3")
            endereco.innerText = "Endereço"
            const cep = document.createElement("p")
            cep.innerText = `CEP: ${cliente.endereco.cep}`
            const estado = document.createElement("p")
            estado.innerText = `Estado: ${cliente.endereco.estado}`
            const cidade = document.createElement("p")
            cidade.innerText = `Cidade: ${cliente.endereco.cidade}`
            const bairro = document.createElement("p")
            bairro.innerText = `Bairro: ${cliente.endereco.bairro}`
            const rua = document.createElement("p")
            rua.innerText = `Rua: ${cliente.endereco.rua}`
            const numero = document.createElement("p")
            numero.innerText = `Numero: ${cliente.endereco.numero}`

            container.appendChild(li)
            li.appendChild(nome)
            li.appendChild(divDadosPessoais)
            divDadosPessoais.appendChild(dadosPessoais)
            divDadosPessoais.appendChild(email)
            divDadosPessoais.appendChild(idade)
            divDadosPessoais.appendChild(cpf)
            divDadosPessoais.appendChild(sexo)
            li.appendChild(divEndereco)
            divEndereco.appendChild(endereco)
            divEndereco.appendChild(cep)
            divEndereco.appendChild(estado)
            divEndereco.appendChild(cidade)
            divEndereco.appendChild(bairro)
            divEndereco.appendChild(rua)
            divEndereco.appendChild(numero)



        });
    }
}