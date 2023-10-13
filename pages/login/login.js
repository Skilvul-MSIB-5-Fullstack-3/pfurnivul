const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  //url
  const apiUrl = "https://65274ef6917d673fd76d8edf.mockapi.io/usersFurnivul";

  // Kirim permintaan ke MockAPI
  fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Login gagal.");
      }
    })
    .then((data) => {
      // Data yang diterima dari MockAPI
      console.log("Login berhasil:", data);
      alert("Login berhasil");
    })
    .catch((error) => {
      console.error("Login gagal:", error);
      alert("Login gagal");
    });
});
