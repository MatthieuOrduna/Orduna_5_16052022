const productId = new URL(document.location).searchParams.get("id");
console.log(productId);

fetch(`http://localhost:3000/api/products/${productId}`)
        .then((response) => {
            return response.json();
        })
        .then((product) => { 
            
            console.log(product);
            const price = document.getElementById("price");
            price.innerHTML = product.price;

            const description = document.getElementById("description");
            description.innerHTML = product.description;
            

            const img = document.createElement("img");
            document.querySelector(".item__img").appendChild(img);
            img.src = product.imageUrl;
            img.alt = product.altTxt;
            
           

            const title = document.getElementById("title");
            title.innerHTML = product.name;

            const colors = document.getElementById("colors");
    
            product.colors.forEach(productColor => {
                const option = document.createElement("option");
                colors.appendChild(option);
                option.setAttribute("value","");
                option.innerHTML = productColor;
            });

        const addToCart = document.getElementById("addToCart");
        addToCart.addEventListener("click", (transferData) => {
            const quantityK = document.getElementById("quantity");
            const optionK = document.getElementsByTagName("option");
            const list = document.getElementById("colors").options;

            const texte = list[document.getElementById("colors").selectedIndex].text;

            console.log(quantityK.value, texte);

            const cartItem = {
                quantity : quantityK.value,
                color : texte,
                productId : product._id,
            }

            const cartItems = JSON.parse(localStorage.getItem("cartItems"))||[];
            if (cartItems.some(item => item.productId === cartItem.productId && item.color=== cartItem.color)){
                const foundItem = cartItems.find(item => item.productId ===cartItem.productId && item.color=== cartItem.color)
                foundItem.quantity += cartItem.quantity
                cartItems.splice(cartItems.map(item => item.productId).indexOf(cartItem.productId),1,foundItem) 
                localStorage.setItem("cartItems",JSON.stringify(cartItems))           
            }

            else{
                localStorage.setItem("cartItems",JSON.stringify(cartItems.concat(cartItem)))  
            }

            // localStorage.setItem("SelectionNumber",quantityK.value);
            // localStorage.setItem("SelectionColor", texte);
            // localStorage.setItem("SelectionImage", img.src);
            // localStorage.setItem("SelectionAlt", img.alt);
            // localStorage.setItem("SelectionTitle", title.innerHTML);
            // console.log(localStorage);

            productUrl = "./cart.html?id=" + product._id;
            link = document.getElementById("addToCart");
            link.setAttribute("href",productUrl);
       
            console.log(link);

        return null;//? Cela modifie-t-il quelque chose à mon code?
});
 
})
        .catch((error)=>{
            console.log("etc",error);
            alert(error)
        });
