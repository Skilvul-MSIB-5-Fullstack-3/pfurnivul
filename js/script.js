const toggleBtn = document.getElementById("toggle-btn");
const mobileNavigation = document.getElementById("mobile-nav");

toggleBtn.addEventListener("click", function () {
  mobileNavigation.classList.toggle("hidden");
});

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

let swiperproduct = document.getElementById("swiper-product");
async function getProducts() {
  try {
    const response = await fetch(
      "https://6524bed5ea560a22a4ea0e3b.mockapi.io/products"
    );
    const data = await response.json();

    console.log(data);

    const products = data.map(function (product) {
      return `
      <div class="swiper-slide">
      <div class="flex lg:flex-col flex-col p-4 bg-[#023047] border border-black rounded-xl mx-auto w-max">
        <img
          src="${product.product_image}"
          alt="living room"
          class="flex bg-white mx-auto rounded-xl w-[200px] h-[182px] object-contain"
        />
        <div class="my-2 text-white">
          <h3 class="text-lg font-semibold my-4">${
            product.product_name.slice(0, 30) + "..."
          }</h3>
          <p class="text-base font-medium my-4">${product.product_category}</p>
          <h3 class="text-base font-medium my-4">${product.product_price}</h3>
          <p class="text-base font-medium my-4">Tersedia banyak pilihan</p>
          <a href="#" class="bg-[#ffb703] mt-8 py-2 px-4 rounded-xl border border-black text-[#023047] shadow w-max flex items-center gap-6 ml-auto"
            ><span>Detail Product</span>
            <img src="./assets/svg/arrow-right.svg" alt=""
          /></a>
        </div>
      </div>
      </div>
      </div>
      `;
    });
    swiperproduct.innerHTML = products.join("");
  } catch (err) {
    console.log(err);
  }
}
getProducts();
