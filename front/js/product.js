
img = document.createElement("img");
img.src = "../images/logo.png";
document.querySelector(".item__img").appendChild(img);
//const image = document.getElementsByClassName("item__img");

const titre = document.getElementById("title");
title.innerHTML = "titre";

const prix = document.getElementById("price");
price.innerHTML = "256";

const description = document.getElementById("description");
description.innerHTML = "SUPER !"

const couleurs = document.getElementById("colors");
option1 = document.createElement("option");
option2 = document.createElement("option");
colors.appendChild(option1);
colors.appendChild(option2);
option1.setAttribute("value","");
option2.setAttribute("value","");
option1.innerHTML = "blanc";
option2.innerHTML = "vert";

