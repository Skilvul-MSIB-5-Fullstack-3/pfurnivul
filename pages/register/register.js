let btnSend = document.getElementById("btn-submit");

btnSend.addEventListener("click", () => {
  let newUser = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  fetch("https://65274ef6917d673fd76d8edf.mockapi.io/usersFurnivul", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  }).then((res) => {
    alert("akun anda berhasil dibuats");
    console.log(res);
  });
});
