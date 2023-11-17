import {
    createUserWithEmailAndPassword,
    updateProfile,
  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
  import { auth, db, storage } from "./config.js";
  import {
    collection,
    addDoc,
  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
  import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";
  
  const email = document.querySelector("#username");
  const name = document.querySelector("#name");
  const pass = document.querySelector("#password");
  const form = document.querySelector("form");
  
  const pfpInput = document.getElementById("fileInp");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const file = pfpInput.files[0];
    if (!file) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Add Picture",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        pass.value
      );
      await updateProfile(userCredential.user, {
        displayName: name.value,
      });
      const storageRef = ref(storage, name.value);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await updateProfile(userCredential.user, {
        photoURL: url,
      });
      await addDoc(collection(db, "users"), {
        name: name.value,
        email: email.value,
        uid: userCredential.user.uid,
        profileUrl: url,
      });
  
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Account Created",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      const errorMessage = error.message;
  
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: errorMessage,
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(errorMessage);
    }
    name.value = "";
    email.value = "";
    pass.value = "";
    window.location = "./index.html";
  });