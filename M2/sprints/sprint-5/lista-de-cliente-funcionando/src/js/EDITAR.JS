import { API } from "./API.js";
import { getInputValueById } from "./UTILS.js";

class EDITAR {
  static async options() {
    const btnBuscar = document.getElementById("btnBuscar");

    const labelEditar = document.getElementById("labelEditar");
    let capturarClientes = await API.listarClientes();

    capturarClientes.forEach((cliente) => {
      const option = document.createElement("option");
      option.innerText = cliente.nome;
      option.value = cliente.id;
      labelEditar.appendChild(option);
    });

    

    
  }



  static input() {
    const btnEditar = document.getElementById("btn-editar");
    btnEditar.addEventListener("click", function (event) {
      const labelEditar = document.getElementById("labelEditar");
      const id = labelEditar.value;
      const data = {
        nome: getInputValueById("nome"),
        email: getInputValueById("email"),
        idade: getInputValueById("idade"),
        cpf: getInputValueById("cpf"),
        sexo: getInputValueById("sexo"),

        endereco: {
          cep: getInputValueById("cep"),
          rua: getInputValueById("rua"),
          numero: getInputValueById("numero"),
          bairro: getInputValueById("bairro"),
          cidade: getInputValueById("cidade"),
          estado: getInputValueById("estado"),
        },
      };
      console.log(data);
      API.editarCliente(id, data);
    });
  }
}
EDITAR.options();
EDITAR.input();
