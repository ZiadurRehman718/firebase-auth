import {
    onAuthStateChanged,
    signOut,
  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
  import { auth } from "./config.js";
  
  const checkbox = document.querySelector(".checkbox");
  const nav = document.querySelector(".nav");
  const icon = document.querySelector(".icon");
  const postnav = document.querySelector(".post-container");
  const logout = document.querySelector(".logout");
  const pfp = document.querySelector(".pfp-holder");
  const body = document.body;
  
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      body.classList.add("dark-mode");
      icon.classList.add("dark-mode");
      nav.classList.add("dark-mode");
      postnav.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
      nav.classList.remove("dark-mode");
      icon.classList.remove("dark-mode");
      postnav.classList.remove("dark-mode");
    }
  });
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      if (user) {
        pfp.innerHTML = `<img style="object-fill;   border-radius:50%; width:50px ; height:50px;" src=${user.photoURL} class="rounded-full">`;
      } else {
        pfp.innerHTML = "Profile Image not available";
      }
    } else {
      console.log("No user logged in");
    }
    logout.addEventListener("click", () => {
      signOut(auth);
      if (user) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logged Out",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Already Logged Out",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  });