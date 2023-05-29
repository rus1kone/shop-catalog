// Массив с данными о товарах
const products = [
    {
      id: 1,
      name: "T-shirt Staff white snake logo",
      price: 20,
      size: "XS",
      image: "img/01.jpeg",
    },
    {
      id: 2,
      name: "T-shirt Staff feel good",
      price: 25,
      size: "L",
      image: "img/02.jpeg",
    },
    {
      id: 3,
      name: "T-shirt Staff dragon reflective",
      price: 22,
      size: "M",
      image: "img/03.jpeg",
    },
    {
      id: 4,
      name: "Denim shorts Staff haw blue slim",
      price: 32,
      size: "S",
      image: "img/04.jpeg",
    },
    {
      id: 5,
      name: "Trousers Staff cargo copp khaki",
      price: 67,
      size: "XL",
      image: "img/05.jpeg",
    },
    {
      id: 6,
      name: "Beach shorts Staff ch khaki",
      price: 89,
      size: "S",
      image: "img/06.jpeg",
    },
    {
      id: 7,
      name: "Beach shorts Staff ho black",
      price: 120,
      size: "L",
      image: "img/07.jpeg",
    },
    {
      id: 8,
      name: "Denim shorts Staff haw blue slim",
      price: 32,
      size: "S",
      image: "img/04.jpeg",
    },
    {
      id: 9,
      name: "Trousers Staff cargo copp khaki",
      price: 14,
      size: "XL",
      image: "img/05.jpeg",
    },
    {
      id: 10,
      name: "Beach shorts Staff ch khaki",
      price: 144,
      size: "S",
      image: "img/06.jpeg",
    },
    {
      id: 11,
      name: "Beach shorts Staff ho black",
      price: 189,
      size: "L",
      image: "img/07.jpeg",
    },
    {
      id: 12,
      name: "T-shirt Staff white snake logo",
      price: 48,
      size: "XS",
      image: "img/01.jpeg",
    },
    {
      id: 13,
      name: "T-shirt Staff feel good",
      price: 74,
      size: "L",
      image: "img/02.jpeg",
    },
    {
      id: 14,
      name: "T-shirt Staff dragon reflective",
      price: 17,
      size: "M",
      image: "img/03.jpeg",
    },
    {
      id: 15,
      name: "Denim shorts Staff haw blue slim",
      price: 200,
      size: "S",
      image: "img/04.jpeg",
    },
    {
      id: 16,
      name: "Trousers Staff cargo copp khaki",
      price: 60,
      size: "XL",
      image: "img/05.jpeg",
    },
    {
      id: 17,
      name: "Beach shorts Staff ch khaki",
      price: 111,
      size: "S",
      image: "img/06.jpeg",
    },
    {
      id: 18,
      name: "Beach shorts Staff ho black",
      price: 135,
      size: "L",
      image: "img/07.jpeg",
    },
    // Добавьте остальные товары здесь
  ];
  
  // Количество товаров на странице
  let itemsPerPage = 6;
  
  // Функция для генерации карточки товара
  function generateProductCard(product) {
    return `
          <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-card__image">
            <h5 class="product-card__name">${product.name}</h5>
            <p class="product-card__price">$${product.price}</p>
            <p class="product-card__size">Size: ${product.size}</p>
          </div>
        `;
  }
  
  // Функция для генерации пагинации на основе отфильтрованных товаров
  function generatePagination(filteredProducts) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    let paginationHTML = "";
  
    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<button class="pagination-button">${i}</button>`;
    }
  
    return paginationHTML;
  }
  
  // Функция для отображения отфильтрованных товаров на странице
  function displayProducts(page, filteredProducts) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
  
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";
  
    for (const product of productsToDisplay) {
      const productCard = generateProductCard(product);
      productContainer.innerHTML += productCard;
    }
  }
  
  // Функция для обработки нажатия на кнопки пагинации
  function handlePaginationClick(event) {
    const pageNumber = parseInt(event.target.textContent);
    const filteredProducts = getFilteredProducts();
    displayProducts(pageNumber, filteredProducts);
  }
  
  // Обновление пагинации при изменении фильтров
  function updatePagination(filteredProducts) {
    const paginationContainer = document.getElementById("pagination");
    const paginationHTML = generatePagination(filteredProducts);
    paginationContainer.innerHTML = paginationHTML;
  
    // Добавление обработчиков событий для кнопок пагинации
    const paginationButtons = document.querySelectorAll(".pagination-button");
    for (const button of paginationButtons) {
      button.addEventListener("click", handlePaginationClick);
    }
  }
  
  // Функция для фильтрации товаров
  function getFilteredProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedSize = sizeSelect.value;
    const minPrice = priceRange.value;
  
    const filteredProducts = products.filter((product) => {
      const productName = product.name.toLowerCase();
      const productSize = product.size.toLowerCase();
  
      const matchesSearchTerm = productName.includes(searchTerm);
      const matchesSize = selectedSize === "" || productSize === selectedSize;
      const matchesPrice = product.price >= minPrice;
  
      return matchesSearchTerm && matchesSize && matchesPrice;
    });
  
    return filteredProducts;
  }
  
  // Функция для обновления отображения товаров после фильтрации
  function updateProductDisplay(filteredProducts) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
    displayProducts(1, filteredProducts);
    updatePagination(filteredProducts);
  }
  
  // Получение ссылок на элементы HTML
  const searchInput = document.querySelector(".search__input");
  const sizeSelect = document.querySelector(".filter__size-select");
  const priceRange = document.querySelector(".filter__price-range");
  
  // Функция для обновления значения цены на ползунке
  function updatePriceLabel() {
    const priceLabel = document.querySelector(".filter__price-label");
    priceLabel.textContent = `$${priceRange.value}`;
  }
  
  // Добавление обработчиков событий для полей поиска, выбора размера и ползунка цены
  searchInput.addEventListener("input", handleSearch);
  sizeSelect.addEventListener("change", handleSizeFilter);
  priceRange.addEventListener("input", handlePriceFilter);
  
  // Обработчик события загрузки страницы
  window.addEventListener("DOMContentLoaded", () => {
    // Вычисление отфильтрованных товаров при загрузке страницы
    const filteredProducts = getFilteredProducts();
  
    // Отображение первой страницы товаров при загрузке страницы
    displayProducts(1, filteredProducts);
  
    // Обновление пагинации при загрузке страницы
    updatePagination(filteredProducts);
  
    // Обновление значения цены на ползунке при загрузке страницы
    updatePriceLabel();
  });
  
  // Функция для обработки события изменения значения в поле поиска
  function handleSearch(event) {
    const filteredProducts = getFilteredProducts();
    updateProductDisplay(filteredProducts);
  }
  
  // Функция для обработки события изменения значения в поле выбора размера
  function handleSizeFilter(event) {
    const filteredProducts = getFilteredProducts();
    updateProductDisplay(filteredProducts);
  }
  
  // Функция для обработки события изменения значения ползунка цены
  function handlePriceFilter(event) {
    const filteredProducts = getFilteredProducts();
    updateProductDisplay(filteredProducts);
    updatePriceLabel();
  }
  

  
  
  
  
  