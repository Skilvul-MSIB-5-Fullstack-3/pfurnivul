document.addEventListener("DOMContentLoaded", function () {
  async function getProductById(productId) {
    try {
      const response = await fetch(
        `https://6524bed5ea560a22a4ea0e3b.mockapi.io/products/${productId}`
      );
      const data = await response.json();

      let price = data.price;
      let formattedPrice = price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      const checkoutList = document.getElementById("checkout-list");
      const checkoutDetail = () => {
        return `
      <div class="flex flex-col lg:flex-row gap-5 items-center my-4">
            <div class="">
              <img
                src="${data.product_image}"
                class="h-28"
                alt=""
              />
            </div>
            <div class="flex flex-col lg:flex-row gap-4">
              <h1>${data.product_name}</h1>
              <p>${formattedPrice}</p>
            </div>
      </div>
    `;
      };
      checkoutList.innerHTML = checkoutDetail();

      const toggleShipping = document.getElementById("toggle-shipping");
      const shippingList = document.getElementById("shipping-list");

      function setShippingText(text) {
        toggleShipping.firstElementChild.textContent = text;
        shippingList.classList.add("hidden");
      }
      const dataKurir = await fetch("../../data/kurir.json");
      const kurir = await dataKurir.json();

      function createShippingButton(text, price, time, ongkir) {
        const button = document.createElement("button");
        button.classList.add(
          "grid",
          "grid-rows-2",
          "w-full",
          "mb-2",
          "border",
          "rounded-lg",
          "py-2"
        );
        button.dataset.text = text;
        button.dataset.ongkir = ongkir;
        button.innerHTML = `
      <div class="flex flex-row justify-between text-md">
        <div class="px-4">${text}</div>
        <div class="px-4">${price}</div>
      </div>
      <div class="flex flex-row justify-between text-sm">
        <p class="px-4">Estimasi tiba,</p>
        <p class="px-4">${time}</p>
      </div>
    `;
        button.addEventListener("click", () => {
          const ongkirValue = parseInt(button.dataset.ongkir);
          setShippingText(text);
          ongkir = ongkirValue;
          const harga = hargaCard + ongkir;
          totalOngkir.textContent = `Rp. ${ongkir.toLocaleString("id-ID")},00`;
          totalBayar.textContent = `Rp. ${harga.toLocaleString("id-ID")},00`;
        });
        return button;
      }

      kurir.forEach((option) => {
        const button = createShippingButton(
          option.courier,
          option.cost,
          option.etd,
          option.cost
        );
        shippingList.appendChild(button);
      });

      function setShippingText(text) {
        toggleShipping.firstElementChild.textContent = text;
        shippingList.classList.add("hidden");
      }
      const pilihPembayaran = document.getElementById("pilih-pembayaran");
      pilihPembayaran.addEventListener("click", () => {
        if (
          toggleShipping.firstElementChild.textContent === "Pilih Pengiriman"
        ) {
          alert("Pilih kurir terlebih dahulu");
        } else {
          alert("Pembayaran berhasil");
        }
      });
      toggleShipping.addEventListener("click", () => {
        shippingList.classList.toggle("hidden");
      });

      const totalHarga = document.getElementById("total-harga");
      const totalOngkir = document.getElementById("total-ongkir");
      const potonganHarga = document.getElementById("potongan-harga");
      const totalBayar = document.getElementById("total-bayar");

      const hargaCard = data.price;
      const discount = 200000;
      let ongkir = 0;

      const harga = hargaCard + ongkir;
      const discountedPrice = harga - discount;
      totalHarga.textContent = `Rp. ${harga.toLocaleString("id-ID")},00`;
      totalOngkir.textContent = `Rp. ${ongkir.toLocaleString("id-ID")},00`;
      potonganHarga.textContent = `Rp. ${discount.toLocaleString("id-ID")},00`;
      totalBayar.textContent = `Rp. ${discountedPrice.toLocaleString(
        "id-ID"
      )},00`;
    } catch (error) {
      console.log(error);
    }
  }
  const productId = localStorage.getItem("productId");
  getProductById(productId);
});
