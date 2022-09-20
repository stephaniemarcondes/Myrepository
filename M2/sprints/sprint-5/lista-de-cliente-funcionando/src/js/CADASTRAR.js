import { API } from "./API.js";
import { getInputValueById } from "./UTILS.js";


class CADASTRAR {
    
   static adicionaEvento() {
    
    const btnCadastro = document.getElementById("btn-cadastrar")
    btnCadastro.addEventListener("click", function(event){
        const data = {
            nome: getInputValueById("nome"),
            email:getInputValueById("email"),
            idade:getInputValueById("idade"),
            cpf: getInputValueById("cpf"),
            sexo:getInputValueById("sexo"),

            endereco: {
                cep: getInputValueById("cep"),
                rua: getInputValueById("rua"),
                numero: getInputValueById("numero"),
                bairro: getInputValueById("bairro"),
                cidade: getInputValueById("cidade"),
                estado: getInputValueById("estado")
            }
        }
        console.log(data)
        API.cadastrarCliente(data)
    });
    
  }
  
 
}

CADASTRAR.adicionaEvento()