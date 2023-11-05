document.addEventListener("DOMContentLoaded", () => {
  const img = [
    "https://images.unsplash.com/photo-1542865763-0339b28c4a34?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1vdGlvbnN8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1527236438218-d82077ae1f85?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGVtb3Rpb258ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1553465528-5a213ccc0c7b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGVtb3Rpb258ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1529391387768-ab39476d6a52?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1542641734-3b824eaabad0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1542372712-fc07597133cd?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1521109464564-2fa2faa95858?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODh8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1621171152288-cff16cd4d671?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTAxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjJ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1500817487388-039e623edc21?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fHw%3D",
  ];

  const inputEmail = document.querySelector('input[type = "email"]');
  const BlockforEmail = document.querySelector(".BlockforEmail");
  const inputPassword = document.querySelector('input[type = "password"]');
  const BlockforPassword = document.querySelector(".BlockforPassword");
  const blockforcontent = document.querySelectorAll(".blockforcontent");
  const li = document.querySelectorAll(" ul li");
  const images = document.querySelectorAll(".loginImage");
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



  //images
  var a = [];
  function updateImages() {
    images[0].style.opacity = "0";
    images[1].style.opacity = "0";
    setTimeout(() => {
      images[0].style.opacity = "1";
      images[1].style.opacity = "1";
      var i = parseInt(Math.random() * img.length);
      if (i in a) {
        if(a.length == img.length){
          a = [];
        }
        updateImages();
      } 
      else {
        a.push(i);
        images[0].innerHTML = `<img src="${img[i]}" alt="">`;
        images[1].innerHTML = `<img src="${img[i]}" alt="">`;
      }
    }, 200);
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
  buttonSignup.addEventListener("click", () => {
    SignupPage.style.display = "flex";
  });
});
