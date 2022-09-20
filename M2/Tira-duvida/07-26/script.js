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

// criar body via quetselector e ul via createelement
  const body = document.querySelector("body");
 let ul = document.createElement("ul");

 //append do body no ul
 document.body.appendChild(ul);
 
 



function listarProdutos (lojinha) {

    for(let i = 0; i < lista.length; i++) {
//pegar a lista[i] e criar um produto
        let produtos = lista[i]
        //o card é a função de baixo mais o produto, ou seja, mais a lista[i]
        let card = criarCard(produtos)
        //append da ul no card
        ul.append(card)
    }
}
listarProdutos (lojinha)



function criarCard (produtos) {
// dar nome aos bois
let nome = produtos.nome
let valor = produtos.valor
let img = produtos.img 

//criar os elementos
let li = document.createElement("li");
let nomeProduto = document.createElement("h2");
let valorProduto = document.createElement("h3");
let imgProduto = document.createElement("img");

//o que vai conter dentro de cada elemento
nomeProduto.innerText = nome
valorProduto.innerText = valor
imgProduto.src = img

//appendezao
li.append(nomeProduto, valorProduto, imgProduto)

return li

}

