import { API } from "./API.js";


class DELETAR {
    
   
    static async options() {
        
    
    const clienteDeletar = document.getElementById("clienteDeletar")
    let capturarClientes = await API.listarClientes()
     

    capturarClientes.forEach((cliente) => {
        const option = document.createElement("option")
        option.innerText = cliente.nome
        option.value = cliente.id;
        clienteDeletar.appendChild(option)
    } ) 
   
 }


   
   

 }
 const btnDeletar = document.getElementById("btnDeletar")
 btnDeletar.addEventListener("click", async function (event) {
    const clienteDeletar = document.getElementById("clienteDeletar")
    const id = clienteDeletar.value;
    await API.deletarCliente(id) }
    )

 DELETAR.options()
 