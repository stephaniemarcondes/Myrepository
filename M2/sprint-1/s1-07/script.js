// Esta é a base de dados da Livraria
const dataBase = [
  {
    title: "Dom Quixote, Miguel de Cervantes, 1605",
    inventory: 25,
  },
  {
    title: "Ulisses, James Joyce, 1922",
    inventory: 55,
  },

  {
    title: "A Divina Comédia, Dante Alighieri, 1321",
    inventory: 489,
  },
  {
    title: "A Divina Comédia, Dante Alighieri, 1321",
    inventory: 489,
  },
  {
    title: "1984, George Orwell, 1949",
    inventory: 354,
  },
  {
    title: "Ilíada e Odisseia, Homero, século 8 a.c.",
    inventory: 35,
  },
  {
    title: "As Viagens de Gulliver, Jonathan Swift, 1726",
    inventory: 0,
  },
  {
    title: "As Viagens de Gulliver, Jonathan Swift, 1726",
    inventory: 0,
  },
  {
    title: "O Lobo da Estepe, Herman Hesse, 1927",
    inventory: 0,
  },
  {
    title: "A Peste, Albert Camus, 1947",
    inventory: 689,
  },
  {
    title: "Admirável Mundo Novo, Aldous Huxley, 1932",
    inventory: 3,
  },
  {
    title: "Admirável Mundo Novo, Aldous Huxley, 1932",
    inventory: 3,
  },
  {
    title: "O Senhor dos Anéis, de J.R.R. Tolkien",
    inventory: 102,
  },
  {
    title: "O Guia do Mochileiro das Galáxias, de Douglas Adams ",
    inventory: 0,
  },
  {
    title: "As Crônicas de Gelo e Fogo, de George R. R. Martin",
    inventory: 122,
  },
];

//
// function trabalhoEmDobro(array) {
//   novoArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if ((i > 0)) {
//       if (array[i].title != array[i - 1].title) {
//         novoArray.push(array[i]);
//       }
//     } else {
//       novoArray.push(array[i]);
//     }
//   }
//   return novoArray
// }
// trabalhoEmDobro(dataBase);
// console.log(trabalhoEmDobro(dataBase))

function zerosNoFim(dataBase) {
  novoArray = [];
  array2 = [];
  for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].inventory != 0) {
      novoArray.push(dataBase[i]);
    } else if (dataBase[i].inventory == 0) {
      array2.push(dataBase[i]);
    }
  }

//   for (let i = 0; i < array2.length; i++)
//   {

// novoArray.push(array2[i])

//   }

// concat concatena os itens de um array pro outro
let resultado = novoArray.concat(array2)
console.log(resultado)
  //console.log(novoArray)
 // return novoArray
}
zerosNoFim(dataBase);

