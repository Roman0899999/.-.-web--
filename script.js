document.addEventListener('DOMContentLoaded', () => {

    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(products => {
   
        const productContainer = document.getElementById('product-container');
  

        products.forEach(product => {
          const productCard = createProductCard(product);
          productContainer.appendChild(productCard);
        });
      });
  
   
    function createProductCard(product) {
      const card = document.createElement('div');
      card.classList.add('product-card');
  
  
      const title = document.createElement('h2');
      title.textContent = product.name;
  
      const price = document.createElement('p');
      price.textContent = `Price: ${product.price}`;
  
      const description = document.createElement('p');
      description.textContent = product.description;
  
      
      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(description);
  
      return card;
    }
  });