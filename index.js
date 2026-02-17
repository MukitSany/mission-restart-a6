const loadCategory = async() => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();
    
    const categoryContainer = document.getElementById("category-bar");
    // console.log(data);
    data.forEach((item) => {
        const div = document.createElement("div");
        // console.log(item);
        div.innerHTML = `<button class="btn btn-outline"><img src="/assets/fa-book-open.png" alt="">${item}</button>`;
        // console.log(item);
        
      
        categoryContainer.appendChild(div);
    });
    
  }


  loadCategory(1);


  