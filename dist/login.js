import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

import { auth } from "./config.js";

const email = document.querySelector("#username");
const pass = document.querySelector("#password");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Successfuly logged in as " + user.email,
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: errorMessage,
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(errorMessage);
    });

  email.value = "";
  pass.value = "";
});