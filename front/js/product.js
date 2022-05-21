const productId = document.location.href;
console.log(productId);

//img = document.createElement("img");
//img.src = "../images/logo.png";
//document.querySelector(".item__img").appendChild(img);
////const image = document.getElementsByClassName("item__img");

//const titre = document.getElementById("title");
//title.innerHTML = "titre";

//const prix = document.getElementById("price");
//price.innerHTML = "256";

//const description = document.getElementById("description");
//description.innerHTML = "SUPER !"

//const couleurs = document.getElementById("colors");
//option1 = document.createElement("option");
//option2 = document.createElement("option");
//colors.appendChild(option1);
//colors.appendChild(option2);
//option1.setAttribute("value","");
//option2.setAttribute("value","");
//option1.innerHTML = "blanc";
//option2.innerHTML = "vert";

    //const colorus =["blanc","vert"];
    
    //for(let color of colorus){
        //const couleurs = document.getElementById("colors");
        //option = document.createElement("option");
        //colors.appendChild(option);
        //option.setAttribute("value","");
        //option.innerHTML = color;
    //}
 
 

fetch ("http://localhost:3000/api/products") 
.then((res)=> { 
        console.log("data",res); 
        return res.json(); 
})
.then((productId)=> {
    //const prix = document.getElementById("price");
    //price.innerHTML = products.price;

    //const description = document.getElementById("description");
    //description.innerHTML = products.description;

    //img = document.createElement("img");
    //img.src = products.imageURL;
    //document.querySelector(".item__img").appendChild(img);

    //const titre = document.getElementById("title");
    //title.innerHTML = products.name;

    //const couleurs = document.getElementById("colors");
    //options.forEach(colors => {
        //option = document.createElement("option");
        //colors.appendChild(option);
        //option.setAttribute("value","");
        //option.innerHTML = products.colors;
    //});
 
    for(let color of products.colors){
        const couleurs = document.getElementById("colors");
        option = document.createElement("option");
        colors.appendChild(option);
        option.setAttribute("value","");
        option.innerHTML = color;
    }
})
.catch((error)=>{
    console.log(error);
    alert(error)
});
