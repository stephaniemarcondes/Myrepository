let lojinha = [ {
    img: "./aneis.jpg",
    nome: "Anel",
    valor: 20},
  
   {
    img: "./brincos.jpg",
    nome: "Brincos",
    valor: 20
  },
  
  {
    img: "./brusinha.jpg",
    nome: "Brusinha",
    valor: 20
  },
  
   {
    img: "./tornozeleira.jpg",
    nome: "Tornozeleira",
    valor: 20
  }]

  document.querySelector("body")
  document.createElement("ul")
  document.body.appendChild(ul)

  function listarProdutos (lista) {
for (let i = 0; i < lista.length; i++)
let produtos = lista[i]
let card = criarCard(produtos)
document.ul.appendChild.card


  }
  listarProdutos (lojinha)

  function criarCard (produtos) {
let nome = produtos.nome
let valor = produtos.valor
let img = produtos.img

let li = document.createElement("li")
let nomeProduto = document.createElement("h2")
let valorProduto = document.createElement("h3")
let imgProduto = document.createElement("img")

nomeProduto.innerText = nome
valorProduto.innerText = valor
imgProduto.src = img

document.li.append(nomeProduto, valorProduto, imgProduto)


  }