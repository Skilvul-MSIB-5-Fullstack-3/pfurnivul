let btnSend = document.getElementById("btn-login");

btnSend.addEventListener("click", () => {
  // Get the email and password from the input fields
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Assuming you want to send the email as a query parameter to the API
  let apiUrl = `https://65274ef6917d673fd76d8edf.mockapi.io/usersFurnivul`;

  // Send a GET request to the API
  fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json(); // Parse the JSON response
      } else {
        alert("User not found");
      }
    })
    .then((data) => {
      // Check if the password matches the retrieved user's password
      if (data && data.length > 0 && data[0].password === password) {
        alert("Login successful");
        // You can redirect the user or perform other actions on success.
      } else {
        alert("Login failed");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
