const loadCat = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  displayCat(data);
}

const displayCat = (category) => {
  const productName = document.getElementById("category-bar");
  productName.innerHTML = "";

  category.forEach((categ) => {
    // console.log(categ);
    const div = document.createElement("div");
    div.innerHTML =  `<button onclick ="loadProduct(${categ})" class="btn btn-dash btn-primary">${categ}</button>`;
  productName.append(div);
  });
};



loadCat()


const loadProduct = async(productTitle) => {
  console.log(productTitle);
  const res = await fetch(`https://fakestoreapi.com/products/category/${productTitle}`);
  const data = await res.json();
  const productDetail = document.getElementById("product-detail")
  // console.log(data);
  data.forEach((item) => {
    // console.log(item);
    const div = document.createElement("div");
    div.innerHTML =  `
    <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${item.image}"
      class = "w-48 h-48"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <div class="flex justify-between">
      <h2 class="badge badge-outline bg-gray-300 text-blue-500 font-semibold">
      ${item.category}
    </h2>
      <h2 class="badge badge-outline bg-gray-300 text-blue-500 font-semibold">
      <span><i class="fa-solid fa-star"></i></span>${item.rating.rate}
    </h2>

    </div>
    <p class="card-title text-xl font-bold">${item.title.slice(0,50)}</p>
    <p class="card-title text-xl font-bold">$${item.price}</p>
    <div class="card-actions justify-between">
      <div class="btn btn-outline w-40">Detail</div>
      <div class="btn btn-primary w-40">ADD</div>
    </div>
  </div>
</div>`;

productDetail.appendChild(div)
  });
}


loadProduct()