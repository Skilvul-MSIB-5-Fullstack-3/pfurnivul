let productListing = document.getElementById("list_product");

async function getProductListing() {
  let responses = await fetch(
    "https://6524bed5ea560a22a4ea0e3b.mockapi.io/products"
  );
  let products = await responses.json();
  console.log(products);

  products.map((product) => {
    let price = product.price;
    let formattedPrice = price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    let productCard = `


${product.product_name}

${product.product_review}

${formattedPrice}

`;
    productListing.innerHTML += productCard;
  });
}

getProductListing();
