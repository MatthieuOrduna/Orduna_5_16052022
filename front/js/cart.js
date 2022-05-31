var recupDataN = localStorage.getItem("SelectionNumber");
var recupDataC = localStorage.getItem("SelectionColor");
var recupDataI = localStorage.getItem("SelectionImage");
var recupDataA = localStorage.getItem("SelectionAlt");
var recupDataName = localStorage.getItem("SelectionTitle");
console.log(recupDataN, recupDataC, recupDataI, recupDataA, recupDataName);

article = document.getElementById(cart__items);
article = document.createElement("article");
article.setAttribute("class","cart__item");
article.setAttribute("datat-id","product-ID");
article.setAttribute("data-color","product-color");
cart__items.appendChild(article);

console.log(article);

div = document.getElementById(cart__items);
div = document.createElement("div");
div.setAttribute("class","cart__item__img");
article.appendChild(div);

console.log(div);

img = document.getElementById(cart__items);
img = document.createElement("img");
img.src = recupDataI;
img.alt= recupDataA;
div.appendChild(img);

console.log(img);

div2 = document.createElement("div");
div2.setAttribute("class","cart__item__content");
article.appendChild(div2);
div3 = document.getElementById(cart__items);
div3 = document.createElement("div");
div3.setAttribute("class","cart__item__content__description");
div2.appendChild(div3);

console.log(div2, div3);

h2 = document.getElementById(cart__items);
h2 = document.createElement("h2");
h2.innerHTML = recupDataName;
div3.appendChild(h2);

console.log(h2);

p = document.getElementById(cart__items);
p = document.createElement("p");
p.innerHTML = recupDataC;
div3.appendChild(p);

console.log(p);

p2 = document.getElementById(cart__items);
p2 = document.createElement("p");
p2.innerHTML = "42,00€";// à modifier sans passer par localStorage!
div3.appendChild(p2);

console.log(p2);

div4 = document.createElement("div");
div4.setAttribute("class","cart__item__content__settings");
article.appendChild(div4);
div5 = document.createElement("div");
div5.setAttribute("class","cart__item__content__settings__quantity");
div4.appendChild(div5);
p3 = document.createElement("p");
p3.innerHTML = "Qté :";
div5.appendChild(p3);


input = document.getElementById(cart__items);
input = document.createElement("input");
input.setAttribute("type","number");
input.setAttribute("class","itemQuantity");
input.setAttribute("name","itemQuantity");
input.setAttribute("min","1");
input.setAttribute("max","100");
input.setAttribute("value",recupDataN);
div5.appendChild(input);

div6 = document.createElement("div");
div6.setAttribute("class","cart__item__content__settings__delete");
article.appendChild(div6);
p4 = document.getElementById(cart__items);
p4 = document.createElement("p");
p4.setAttribute("class", "deleteItem");
p4.innerHTML = "Supprimer";
div6.appendChild(p4);

console.log(recupDataN);
totalNumber = document.getElementById("totalQuantity");
//totalNumber.textContent = recupDataN; --> Fonctionne à moitié.
// recupDataN = totalNumber.textContent;
// totalNumber.textContent = input.setAttribute("value",recupDataN);
console.log("value",recupDataN);


const productId = new URL(document.location).searchParams.get("id");
console.log(productId);
console.log(document.location);

fetch(`http://localhost:3000/api/products`)
    .then((response) => {
        return response.json();
    })
    .then((product) => { 
            
        // products.name.forEach(recupDataName => {
        //     if (recupDataName = products.name){
        //         p2.innerHTML = products.price;
        //         totalPriceAll = document.getElementById("totalPrice");
        //         totalPriceAll.textContent = products.price * recupDataN;
        //     }
        // });
        console.log(product);

        // console.log(products.name.indexOf(1));

            
    })
    .catch((error)=>{
        console.log("etc",error);
        alert(error)
    });











