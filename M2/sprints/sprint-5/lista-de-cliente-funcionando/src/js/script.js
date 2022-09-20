import { API } from "./API.js";
import { DOM } from "./DOM.js";

const clientes = await API.listarClientes()






DOM.mostrarClientes(clientes)
let cadastrar = new CADASTRAR()
let editar = new EDITAR()
let deletar = new DELETAR() 