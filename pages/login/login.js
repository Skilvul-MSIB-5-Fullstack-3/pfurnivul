let btnSend = document.getElementById("btn-login");

btnSend.addEventListener("click", () => {
  let newUser = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  fetch("https://65274ef6917d673fd76d8edf.mockapi.io/usersFurnivul", {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  }).then((res) => {
    alert("akun anda berhasil dibuat");
    console.log(res);
  });
});
