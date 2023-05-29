const products=[{id:1,name:"Футболка Staff white snake logo",price:20,size:"XS",image:"img/01.jpeg"},{id:2,name:"Футболка Staff feel good",price:25,size:"L",image:"img/02.jpeg"},{id:3,name:"Футболка Staff dragon reflective",price:22,size:"M",image:"img/03.jpeg"},{id:4,name:"Джинсові шорти Staff haw blue slim",price:32,size:"S",image:"img/04.jpeg"},{id:5,name:"Штани Staff cargo copp khaki",price:67,size:"XL",image:"img/05.jpeg"},{id:6,name:"Пляжні шорти Staff ch khaki",price:89,size:"S",image:"img/06.jpeg"},{id:7,name:"Пляжні шорти Staff ho black",price:120,size:"L",image:"img/07.jpeg"},{id:8,name:"Джинсові шорти Staff haw blue slim",price:32,size:"S",image:"img/04.jpeg"},{id:9,name:"Штани Staff cargo copp khaki",price:14,size:"XL",image:"img/05.jpeg"},{id:10,name:"Пляжні шорти Staff ch khaki",price:144,size:"S",image:"img/06.jpeg"},{id:11,name:"Пляжні шорти Staff ho black",price:189,size:"L",image:"img/07.jpeg"},{id:12,name:"Футболка Staff white snake logo",price:48,size:"XS",image:"img/01.jpeg"},{id:13,name:"Футболка Staff feel good",price:74,size:"L",image:"img/02.jpeg"},{id:14,name:"Футболка Staff dragon reflective",price:17,size:"M",image:"img/03.jpeg"},{id:15,name:"Джинсові шорти Staff haw blue slim",price:200,size:"S",image:"img/04.jpeg"},{id:16,name:"Штани Staff cargo copp khaki",price:60,size:"XL",image:"img/05.jpeg"},{id:17,name:"Пляжні шорти Staff ch khaki",price:111,size:"S",image:"img/06.jpeg"},{id:18,name:"Пляжні шорти Staff ho black",price:135,size:"L",image:"img/07.jpeg"}];let itemsPerPage=6;function generateProductCard(e){return`
        <div class="product-card">
          <img src="${e.image}" alt="${e.name}" class="product-card__image">
          <h5 class="product-card__name">${e.name}</h5>
          <p class="product-card__price">$${e.price}</p>
          <p class="product-card__size">Розмір: ${e.size}</p>
        </div>
      `}function generatePagination(e){var i=Math.ceil(e.length/itemsPerPage);let a="";for(let e=1;e<=i;e++)a+=`<button class="pagination-button">${e}</button>`;return a}function displayProducts(e,i){var e=(e-1)*itemsPerPage,a=e+itemsPerPage,i=i.slice(e,a),t=document.getElementById("product-container");t.innerHTML="";for(const r of i){var n=generateProductCard(r);t.innerHTML+=n}}function handlePaginationClick(e){displayProducts(parseInt(e.target.textContent),getFilteredProducts())}function updatePagination(e){var i=document.getElementById("pagination"),e=generatePagination(e),i=(i.innerHTML=e,document.querySelectorAll(".pagination-button"));for(const a of i)a.addEventListener("click",handlePaginationClick)}function getFilteredProducts(){const t=searchInput.value.toLowerCase(),n=sizeSelect.value,r=priceRange.value;return products.filter(e=>{var i=e.name.toLowerCase(),a=e.size.toLowerCase(),i=i.includes(t),a=""===n||a===n,e=e.price>=r;return i&&a&&e})}function updateProductDisplay(e){Math.ceil(e.length/itemsPerPage);displayProducts(1,e),updatePagination(e)}const searchInput=document.querySelector(".search__input"),sizeSelect=document.querySelector(".filter__size-select"),priceRange=document.querySelector(".filter__price-range");function updatePriceLabel(){document.querySelector(".filter__price-label").textContent="$"+priceRange.value}function handleSearch(e){updateProductDisplay(getFilteredProducts())}function handleSizeFilter(e){updateProductDisplay(getFilteredProducts())}function handlePriceFilter(e){updateProductDisplay(getFilteredProducts()),updatePriceLabel()}searchInput.addEventListener("input",handleSearch),sizeSelect.addEventListener("change",handleSizeFilter),priceRange.addEventListener("input",handlePriceFilter),window.addEventListener("DOMContentLoaded",()=>{var e=getFilteredProducts();displayProducts(1,e),updatePagination(e),updatePriceLabel()});