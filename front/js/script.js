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

        a.setAttribute("href","product.html")

        //<a href="./product.html?id=42">
            //<article>
              //<img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
              //<h3 class="productName">Kanap name1</h3>
              //<p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            //</article>
          //</a> -->
    })
})
.catch((error)=>{
    console.log(error);
});