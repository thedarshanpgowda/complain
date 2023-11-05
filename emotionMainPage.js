document.addEventListener("DOMContentLoaded", () => {
  const img = [
    "https://images.unsplash.com/photo-1542865763-0339b28c4a34?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1vdGlvbnN8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1527236438218-d82077ae1f85?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGVtb3Rpb258ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1553465528-5a213ccc0c7b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGVtb3Rpb258ZW58MHwxfDB8fHww",
  ];

  const inputEmail = document.querySelector('input[type = "email"]');
  const BlockforEmail = document.querySelector(".BlockforEmail");
  const inputPassword = document.querySelector('input[type = "password"]');
  const BlockforPassword = document.querySelector(".BlockforPassword");
  const blockforcontent = document.querySelectorAll(".blockforcontent");
  const li = document.querySelectorAll(" ul li");
  const images = document.querySelector(".loginImage");
  const loginPage = document.querySelector(".loginPage");
  const SignupPage = document.querySelector(".SignupPage");
  const buttonLogin = document.querySelector(".log-in-button");
  const buttonSignup = document.querySelector(".Signup-button");
  const cancelBar = document.querySelector(".cancelBar");
  const cancelSignupBar = document.querySelector(".cancelSignupBar");

  //border on focus
  inputEmail.addEventListener("focus", () => {
    BlockforEmail.style.border = "2px black solid";
  });

  inputPassword.addEventListener("focus", () => {
    BlockforPassword.style.border = "2px black solid";
  });

  function updateImages() {
    images.style.opacity = "0";
    setTimeout(() => {
      images.style.opacity = "1";
      var i = parseInt(Math.random() * img.length - 1);
      images.innerHTML = `<img src="${img[i]}" alt="">`;
    }, 300);
  }
  setInterval(updateImages, 5000);

  //change content based on hover
  li.forEach((element, i) => {
    element.addEventListener("mouseover", () => {
      blockforcontent.forEach((e) => {
        e.style.display = "none";
      });
      blockforcontent[i].style.display = "block";
    });
  });

  //login pop up
  function login() {
    loginPage.style.display = "flex";
  }
  buttonLogin.addEventListener("click", login);

  cancelBar.addEventListener("click", () => {
      loginPage.style.display = "none";
  });

  cancelSignupBar.addEventListener("click", () => {
      SignupPage.style.display = "none";
  });

  //Sign up pop up
  buttonSignup.addEventListener("click", ()=>{
    console.log("hello")
        SignupPage.style.display = "flex";
  });
});
