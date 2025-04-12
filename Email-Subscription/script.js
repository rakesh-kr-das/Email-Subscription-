const scriptURL =
  "https://script.google.com/macros/s/AKfycbzLyVtvZuyCvpML3mBkhSUAHE9l45Cot994zuvHnbVRJhYzz2DMiZvnpsS8yObSVamerg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.Email.value.trim();
  if (!email || !email.includes("@")) {
    msg.innerHTML = "Please enter a valid email.";
    msg.style.display = "block";
    msg.style.color = "red";
    return;
  }

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Subscribing!";
      msg.style.display = "block";
      msg.style.color = "#61b752";
      setTimeout(() => {
        msg.style.display = "none";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      msg.innerHTML = "Something went wrong!";
      msg.style.display = "block";
      msg.style.color = "red";
    });
});
