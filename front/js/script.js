fetch ("http://localhost:3000/api/products")
.then((res)=> {
        console.log("raw data",res);
        return res.json();
})
.then((products)=> {
    let items = document.getElementById('items');
    console.log("items",items);
    console.log("products",products);
    products.forEach (product =>{
        a = document.createElement("a");
        article = document.createElement("article");
        img = document.createElement("img");
        h3 = document.createElement("h3");
        h3.classList.add("productName");
        p = document.createElement("p");
        p.classList.add("productDescription");

        items.appendChild(a);
        a.appendChild(article);
        [img,h3,p].forEach(element=>article.appendChild(element));



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