fetch("data/products.json")
.then(response => response.json())
.then(products => {

const container = document.getElementById("products");

products.forEach(pc => {

container.innerHTML += `

<div class="product">

<img src="${pc.image}">

<div class="product-content">

<h2>${pc.name}</h2>

<p><strong>CPU:</strong> ${pc.cpu}</p>

<p><strong>GPU:</strong> ${pc.gpu}</p>

<p><strong>RAM:</strong> ${pc.ram}</p>

<p><strong>Storage:</strong> ${pc.storage}</p>

<p><strong>PSU:</strong> ${pc.psu}</p>

<p><strong>Motherboard:</strong> ${pc.motherboard}</p>

<div class="price">$${pc.price}</div>

<button class="buy-btn">
Add To Cart
</button>

</div>

</div>

`;

});

});