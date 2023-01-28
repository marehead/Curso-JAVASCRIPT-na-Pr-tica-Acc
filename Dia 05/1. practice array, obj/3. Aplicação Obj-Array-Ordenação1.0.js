const cards = {
  "MA==": {
    "clients": [
      {
        "items": [
          {
            "amount": 2,
            "category": "Bebidas",
            "date": "2022-01-14T00:02:00.000Z",
            "name": "Suco caju",
            "notes": "1 quente",
            "price": 1.5,
            "status": "waiting"
          },
          {
            "amount": 1,
            "category": "Salgados Fritos",
            "date": "2022-01-14T01:56:00.000Z",
            "name": "Coxinha",
            "notes": "levar",
            "price": 4,
            "status": "waiting"
          }
        ],
        "name": "Manoel"
      }
    ],
    "date": "2022-01-14T00:02:00.000Z"
  },
  "MQ==": {
    "clients": [
      {
        "items": [
          {
            "amount": 1,
            "category": "Pizzaria",
            "date": "2022-01-13T22:22:00.000Z",
            "name": "Pizza",
            "notes": "M - Calabresa/Frango Catupiry",
            "price": 29,
            "status": "waiting"
          }
        ],
        "name": "Anna Paula"
      }
    ],
    "date": "2022-01-13T22:22:00.000Z"
  },
  "Mg==": {
    "clients": [
      {
        "items": [
          {
            "amount": 1,
            "category": "Lanches",
            "date": "2022-01-22T19:54:00.000Z",
            "name": "X-Tudo",
            "notes": "Hambúrguer, bacon, salsicha, ovo, queijo, presunto, catupiry, alface, tomate, milho e molho.",
            "price": 13,
            "status": "waiting"
          },
          {
            "amount": 1,
            "category": "Lanches",
            "date": "2022-01-22T20:16:00.000Z",
            "name": "X-Frango",
            "notes": "Peito de frango, queijo, alface, tomate e molho.",
            "price": 7,
            "status": "done"
          }
        ],
        "name": "Geruza Vania"
      },
      {
        "items": [
          {
            "amount": 1,
            "category": "Porções",
            "date": "2022-01-22T19:15:00.000Z",
            "name": "Batata Frita",
            "price": 10,
            "status": "delivered"
          },
          {
            "amount": 1,
            "category": "Porções",
            "date": "2022-01-22T19:05:00.000Z",
            "name": "Isca de Frango",
            "price": 20,
            "status": "waiting"
          }
        ],
        "name": "Eno Prado"
      }
    ],
    "date": "2022-01-22T19:54:00.000Z"
  },
  "Mjk=": {
    "clients": [
      {
        "items": [
          {
            "amount": 1,
            "category": "Pizzaria",
            "date": "2022-01-18T12:08:00.000Z",
            "isServed": true,
            "name": "Pizza",
            "notes": "M - Calabresa/Frango Catupiry",
            "price": 29,
            "status": "waiting"
          }
        ],
        "name": "Scooby"
      }
    ],
    "date": "2022-01-18T12:08:00.000Z"
  },
  "Mw==": {
    "clients": [
      {
        "items": [
          {
            "amount": 1,
            "category": "Lanches",
            "date": "2022-01-28T23:34:00.000Z",
            "name": "X-Tudo",
            "notes": "Hambúrguer, bacon, salsicha, ovo, queijo, presunto, catupiry, alface, tomate, milho e molho.",
            "price": 13,
            "status": "done"
          },
          {
            "amount": 1,
            "category": "Lanches",
            "date": "2022-01-28T22:54:00.000Z",
            "name": "X-Frango",
            "notes": "Peito de frango, queijo, alface, tomate e molho.",
            "price": 7,
            "status": "preparing"
          }
        ],
        "name": "Lucas Prado"
      },
      {
        "items": [
          {
            "amount": 1,
            "category": "Porções",
            "date": "2022-01-27T09:15:00.000Z",
            "name": "Batata Frita",
            "price": 10,
            "status": "waiting"
          },
          {
            "amount": 1,
            "category": "Pizzaria",
            "date": "2022-01-27T08:55:00.000Z",
            "name": "Pizza",
            "price": 20,
            "status": "waiting"
          }
        ],
        "name": "Cleidimar"
      }
    ],
    "date": "2022-01-28T22:54:00.000Z"
  }
};

function decodeBase64(string){
  return atob(string)
}

function encodeBase64(string){
  return btoa(string)
}

const cardsVisible = [];

//Object.keys(cards) => ['key1', 'key2', 'key3']

Object.keys(cards).forEach(keyCard => {

  cards[keyCard].clients.forEach(client => {
    
    client.items.forEach(item => {
      if(item.status!=='delivered') {
        let obj = {
          number: decodeBase64(keyCard),
          name: client.name,
          product: item.name,
          status: item.status,
          date: item.date
        }
        item.isServed && (obj.isServed = true);

        cardsVisible.push(obj)
      }
    })
  })

});
console.log('------------------')
console.log('1 - cardsVisible')
console.log(cardsVisible)

// [
//   {
//     name: 'dasd',
//     status: 'waiting'
//   },
//   {},
//   {}
// ]

const cardsByStatus = cardsVisible.reduce(function (acumulator, value) {
  // if(!acumulator[value.status]){
  //   acumulator[value.status] = [];
  // }
  acumulator[value.status] = acumulator[value.status] || [];
  acumulator[value.status].push(value);
  return acumulator;
}, {});

//{}

// {
//   "waiting": [],
//   "done": [],
//   "preparing": []
// }

// {
//   "waiting": [
//     {
//       "name": "cellphone",
//       "price": 2250,
//       "status": "waiting"
//     }
//   ],
//   "done": [],
//   "preparing": [{
//       "name": "cellphone",
//       "price": 2250,
//       "status": "preparing"
//     }]
// }


console.log('------------------')
console.log('2- cardsByStatus');
console.log(cardsByStatus);

console.log('sort:')

let arraySortedByDate = [];

// Object.keys(cardsByStatus).map((key) => {
//   arraySortedByDate = [...arraySortedByDate, ...cardsByStatus[key].sort((a, b) => {
//     let dateA = new Date(a.date);
//     let dateB = new Date(b.date);
//     if (dateA < dateB) {//a é menor que b em algum critério de ordenação
//       return -1;
//     }
//     if (dateA > dateB) {//a é maior que b em algum critério de ordenação
//       return 1;
//     }
//     return 0;//a deve ser igual a b
//   })]
// });

//ou

Object.keys(cardsByStatus).map((key) => {
  let arrStatusSorted = cardsByStatus[key].sort((a, b) => {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    if (dateA < dateB) {//a é menor que b em algum critério de ordenação
      return -1;
    }
    if (dateA > dateB) {//a é maior que b em algum critério de ordenação
      return 1;
    }
    return 0;//a deve ser igual a b
  });

  arraySortedByDate.push(...arrStatusSorted)
});

console.log('------------------')
console.log('3 - arraySortedByDate')
console.log(arraySortedByDate);

const arraySortedStatus = [...arraySortedByDate];

arraySortedStatus.sort(function (a, b) {
  //done  preparing   waiting
  if (a.status < b.status) {//a é menor que b em algum critério de ordenação
    return -1;
  }
  if (a.status > b.status) {//a é maior que b em algum critério de ordenação
    return 1;
  }
  return 0;//a deve ser igual a b
});

console.log('------------------')
console.log('4 - SortedStatus')
console.log(arraySortedStatus)