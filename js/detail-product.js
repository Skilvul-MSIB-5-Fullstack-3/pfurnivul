// detailproduct.js

document.addEventListener("DOMContentLoaded", function () {
  async function getProductById(productId) {
    try {
      const response = await fetch(
        `https://6524bed5ea560a22a4ea0e3b.mockapi.io/products/${productId}`
      );
      const data = await response.json();

      console.log(data);
      let price = data.price;
      console.log(price);
      let formattedPrice = price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      console.log(data.id);
      const productDetail = () => {
        return `
      <div class="flex flex-col text-left justify-center mx-auto my-10">
          <h1 class="text-xl lg:text-3xl font-semibold">${data.product_name}</h1>
          <h2 class="text-lg lg:text-2xl">${data.product_material}</h2>
          <div class="text-lg lg:text-2xl my-10">
              <div class="flex gap-2">
                  <img src="../../assets/svg/StarOutline.svg" class="" alt="" />
                  <p>${data.product_rate} dari 30 pembeli</p>
              </div>
              <div class="flex gap-2">
                  <img src="../../assets/svg/ShoppingBagOutline.svg" alt="" />
                  <p>${data.product_sold} terjual</p>
              </div>
              <div class="flex gap-2">
              <img src="../../assets/svg/AnnotationOutline.svg" alt="" />
              <p>${data.product_review} ulasan pembeli</p>
              </div>
          </div>
  
          <div class="my-10 flex lg:flex-row flex-col justify-center lg:justify-between text-xl lg:text-3xl gap-6">
              <h1 class="font-semibold mx-auto lg:mx-0">${formattedPrice}</h1>
              <a href="../../pages/cartt/cart.html"
                 class="flex bg-[#ffb703] px-4 py-2 rounded-lg border items-center gap-4 mx-auto lg:mx-10 w-max text-xl" 
                 data-product-id="${data.id}">
                  <img src="../../assets/svg/cart-plus.svg" alt="cart" />
                  Checkout
                  <img src="../../assets/svg/arrow-right.svg" alt="arrow" />
              </a>
          </div>
      </div>
      
      <div class="flex flex-col text-left justify-center mx-auto lg:my-10">
  
          <img src="${data.product_image}" class="w-[300x] h-[400px] rounded-lg object-cover" alt="${data.product_name}" />
      </div>
        `;
      };

      const description = () => {
        return `
    <div class="text-left">
        <div class="mb-10">
            <h1 class="text-xl lg:text-3xl font-semibold mb-4">${
              data.product_name
            }</h1>
            <p class="text-lg lg:text-xl font-light leading-loose" id="product-description-text">
                ${data.product_description.slice(0, 250)}
            </p>
            <button class="text-blue-500 hover:text-blue-700 float-right" id="show-more-button">Lihat Selengkapnya</button>
        </div>
        <div class="mb-10">
            <h2 class="text-xl lg:text-2xl font-semibold">Bahan:</h2>
            <p class="text-lg lg:text-xl">${data.product_material}</p>
        </div>
        <div class="mb-10">
            <h2 class="text-xl lg:text-2xl font-semibold">Kategori:</h2>
            <p class="text-lg lg:text-xl">${data.product_category}</p>
        </div>
        <div class="mb-10">
            <h2 class="text-xl lg:text-2xl font-semibold">Tipe:</h2>
            <p class="text-lg lg:text-xl">${data.product_type}</p>
        </div>
    </div>
    `;
      };
      const detailProductContainer = document.getElementById(
        "detail-product-container"
      );
      const descDetailContainer = document.getElementById(
        "product-description"
      );

      detailProductContainer.innerHTML = productDetail();
      descDetailContainer.innerHTML = description();

      const productDescriptionText = document.getElementById(
        "product-description-text"
      );
      const showMoreButton = document.getElementById("show-more-button");

      showMoreButton.addEventListener("click", function () {
        if (productDescriptionText.textContent.length > 250) {
          productDescriptionText.textContent = data.product_description.slice(
            0,
            250
          );
          showMoreButton.textContent = "Lihat Selengkapnya";
        } else {
          productDescriptionText.textContent = data.product_description;
          showMoreButton.textContent = "Tampilkan Lebih Sedikit";
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const productId = localStorage.getItem("productId");
  const descriptionLink = document.getElementById("description-link");
  descriptionLink.href = `../../pages/detailproduct/detailproduc-desc.html?id=${productId}`;

  const reviewLink = document.getElementById("review-link");
  reviewLink.href = `../../pages/detailproduct/detailproduc-review.html?id=${productId}`;

  const discussLink = document.getElementById("discuss-link");
  discussLink.href = `../../pages/detailproduct/detailproduc-discuss.html?id=${productId}`;
  getProductById(productId);
});
