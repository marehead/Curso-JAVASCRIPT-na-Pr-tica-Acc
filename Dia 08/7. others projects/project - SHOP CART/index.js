const PHONE = "77991998770";

let productsInCart = JSON.parse(sessionStorage.getItem('shoppingJavascript'));
if(!productsInCart){
	productsInCart = [];
}

function clearsessionStorage() {
  productsInCart = [];
  updateShoppingCartHTML();
}

const lanchesImages = {
  imgXtudo: 'https://i.ibb.co/PMD1qP1/X-TUDO.jpg',
  imgXcalabresa: 'https://i.ibb.co/XXLr1fc/X-CALABRESA.jpg',
  imgXegg: 'https://i.ibb.co/mhhhWPb/X-EGG.png',
  imgAmericano: 'https://i.ibb.co/bR0rhLb/AMERICANO.jpg',
  imgXsalada: 'https://i.ibb.co/4j0Dzwc/X-SALADA.jpg',
  imgXfrango: 'https://i.ibb.co/RCF0P5T/X-FRANGO.png',
  imgXburguer: 'https://i.ibb.co/nDVzL0j/X-BURGUER.jpg',
  imgMistao: 'https://i.ibb.co/p3Mrfhb/MISTAO.jpg'
}

const catLanches = [
  {
    id: '1tab1.1',
    number: 1,
    name:"X-Tudo",
    description: "Hambúrguer, bacon, salsicha, ovo, queijo, presunto, catupiry, alface, tomate, milho e molho.",
    price:"R$ 13,00",
    priceNumb: 13.00,
    img: lanchesImages.imgXtudo
  },
  {
    id: '1tab1.2',
    number: 2,
    name:"X-Calabresa",
    description: "Hambúrguer, calabresa, queijo, cebola, alface, tomate e molho.",
    price:"R$ 10,00",
    priceNumb: 10.00,
    img: lanchesImages.imgXcalabresa
  },
  {
    id: '1tab1.3',
    number: 3,
    name:"X-Egg",
    description: "Hambúrguer, ovo, queijo, alface, tomate e molho.",
    price:"R$ 9,00",
    priceNumb: 9.00,
    img: lanchesImages.imgXegg
  },
  {
    id: '1tab1.4',
    number: 4,
    name:"Americano",
    description: "Queijo, presunto, ovo, alface e tomate.",
    price:"R$ 7,50",
    priceNumb: 7.50,
    img: lanchesImages.imgAmericano
  },
  {
    id: '1tab1.5',
    number: 5,
    name:"X-Salada",
    description: "Hambúrguer, alface, tomate e milho.",
    price:"R$ 7,00",
    priceNumb: 7.00,
    img: lanchesImages.imgXsalada
  },
  {
    id: '1tab1.6',
    number: 6,
    name:"X-Frango",
    description: "Peito de frango, queijo, alface, tomate e molho.",
    price:"R$ 7,00",
    priceNumb: 7.00,
    img: lanchesImages.imgXfrango
  },
  {
    id: '1tab1.7',
    number: 7,
    name:"X-Burguer",
    description: "Hambúrguer, queijo e molho.",
    price:"R$ 6,00",
    priceNumb: 6.00,
    img: lanchesImages.imgXburguer
  },
  {
    id: '1tab1.8',
    number: 8,
    name:"Mistão",
    description: "Queijo e presunto.",
    price:"R$ 5,00",
    priceNumb: 5.00,
    img: lanchesImages.imgMistao
  }
]

document.getElementById('catLanches').innerHTML = catLanches.map(prod => 
    `<div>
      <div id="${prod.id}" class="containerProd">
        <div class="image">
            <img src="${prod.img}" alt="${prod.name}">
        </div>

        <div class="content">
            <div class="info">
                <h3> <span>0${prod.number}.</span> ${prod.name}</h3>
                <text class="priceCatalog">${prod.price}</text>
                <p>${prod.description}</p>
                <button
                  class="btnCart btnCart-small addToCart"
                  data-product-id=${prod.id}
                  onclick="addItemToCart({
                    id: '${prod.id}',
                    name: '${prod.name}',
                    priceOne: ${prod.priceNumb},
                    priceNumb: ${prod.priceNumb},
                    img: '${prod.img}',
                    count: 1
                  })">
                    &#128722; Adicionar item
                </button>
            </div>
        </div>
      </div>
    </div>`
).join("");

/*Scroll to top when arrow up clicked BEGIN*/ 
$(window).ready(() => {
  $(window).scroll(() => {
    let height = $(window).scrollTop();
    //console.log(height);
    height > 100 ? $('#back2Top').fadeIn() : $('#back2Top').fadeOut();
  });

  $('#back2Top').click((event) => {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $('.bagDiv, #closeButton').click((event) => {
    $('.producstOnCart').toggle('hide');
    return false;
  });
});

function changeCountOfItens(idProd, IsIncrease) {
  for (let i = 0; i < productsInCart.length; i++) {
		if (productsInCart[i].id == idProd) {
      if (IsIncrease) {
        productsInCart[i].count = productsInCart[i].count + 1;
      } else {
        productsInCart[i].count = productsInCart[i].count - 1;
      }
			productsInCart[i].priceNumb = productsInCart[i].priceOne*productsInCart[i].count;
      if (productsInCart[i].count <= 0) {
				productsInCart.splice(i, 1);
			}
		}
	}
  updateShoppingCartHTML();
}

function convertToReal(value) {
  return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}

function addItemToCart(prodObj) {
  for (let i = 0; i < productsInCart.length; i++) {
		if (productsInCart[i].id == prodObj.id) {
			productsInCart[i].count = productsInCart[i].count + 1;
			productsInCart[i].priceNumb = productsInCart[i].priceOne*productsInCart[i].count;
      updateShoppingCartHTML();
			return;
		}
	}
	productsInCart.push(prodObj);
  updateShoppingCartHTML();
}

const parentElement = document.querySelector('#buyItems');

const updateShoppingCartHTML = function () { 
	sessionStorage.setItem('shoppingJavascript', JSON.stringify(productsInCart));
	if (productsInCart.length > 0) {
    let numberOfItens = 0;
    let stringItems = 'Olá! O meu pedido é:';
    let sumTotal = 0;

		let result = productsInCart.map(product => {
      numberOfItens = numberOfItens + product.count;
      stringItems = `${stringItems}\n\n- *${product.name}* (${product.count} unid.) [${convertToReal(product.priceNumb)}]`;
      sumTotal  = sumTotal + product.priceNumb;
			return `
				<li class="buyItem">
					<img src="${product.img}">
					<div>
						<h5 class="cartProdName">${product.name}</h5>
						<h6>${convertToReal(product.priceNumb)}</h6>
            <div class="adittionals">${product.adittionals ? product.adittionals : ''}</div>
						<div>
							<button onclick="changeCountOfItens('${product.id}', false)">
                -
              </button>
							<span class="countOfProduct">${product.count}</span>
							<button onclick="changeCountOfItens('${product.id}', true)">
                +
              </button>
						</div>
					</div>
				</li>
        `
		});
   
    let maskedSumTotal = convertToReal(sumTotal);
    stringItems = `${stringItems}\n\n*****************\nSubtotal: *${maskedSumTotal}* \n*****************\nObservações: `;
    
		parentElement.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
    document.getElementById("badgeId").innerText = `${numberOfItens>99 ? '99+' : numberOfItens}`;
    document.getElementById("buttonWhatsapp").href=`https://api.whatsapp.com/send?phone=+55${PHONE}&text=${encodeURI(stringItems)}`;
    document.getElementById("cartSumTotal").innerHTML = `<span title="Limpar Sacola" onclick="clearsessionStorage()">&#128465;</span>${maskedSumTotal}`;
	}else {
		document.querySelector('.checkout').classList.add('hidden');
		parentElement.innerHTML = '<h4 class="empty">Sua sacola está vazia!</h4>';
    document.getElementById("badgeId").innerText = '0';
    document.getElementById("cartSumTotal").innerText = '';
	}
}

updateShoppingCartHTML();