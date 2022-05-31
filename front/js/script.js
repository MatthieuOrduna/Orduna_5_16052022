fetch ("http://localhost:3000/api/products") 
//Fetch est une méthode du langage JS dont on se sert pour appeler (user) l'API du projet via une requête HTTP.
.then((res)=> { //res = response (c'est une promesse de réponse).
        console.log("raw data",res); //console.log nous permet de voir "res".
        return res.json(); //La réponse attendue sera alors transformé en .json en JavaScript.
})
.then((products)=> {
    let items = document.getElementById('items');
    console.log("items",items);
    //On retrouve l'élément "items".
    console.log("products",products);
    products.forEach (product =>{ //On boucle pour obtenir tous les produits en une fois.
        a = document.createElement("a");//On créer de nouveau élément.
        article = document.createElement("article");
        img = document.createElement("img");
        h3 = document.createElement("h3");
        h3.classList.add("productName");//On ajoute des classes.
        p = document.createElement("p");
        p.classList.add("productDescription");

        items.appendChild(a); //On ajoute des enfants à "items".
        a.appendChild(article);
        [img,h3,p].forEach(element=>article.appendChild(element));


        productUrl = "./product.html?id=" + product._id;//C'est ce qui manqué pour obtenir l'Id.
        a.setAttribute("href",productUrl)//On défini les attribus de "a".
      
       
        console.log(a);
        img.src = product.imageUrl;
        img.alt = product.altTxt;
        h3.innerHTML = product.name;//On modifi directement l'élément et on en fait du texte.
        p.innerHTML = product.description;
        
        
        
    })
})
.catch((error)=>{
    console.log(error);
    alert(error)
});