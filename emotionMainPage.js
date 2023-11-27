document.addEventListener("DOMContentLoaded", () => {
  const img = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg",
    "images/img9.jpg",
    "images/img10.jpg",
    "images/img11.jpg",
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
        if (a.length == img.length) {
          a = [];
        }
        updateImages();
      } else {
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

  const myPassword = document.querySelector('input[type="password"]');
  const myEmail = document.querySelector('input[type="email"]');
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      myEmail.value == "sdarshanpgowda2003@gmail.com" &&
      myPassword.value == "8431676017"
    ) {
      window.location =
        "https://thedarshanpgowda.github.io/complain/emotionalTracker.html";
        return;
    }
    if (
      myEmail.value == "mithungowdahc12a@gmail.com" &&
      myPassword.value == "8431676017"
    ) {
      window.location =
        "https://thedarshanpgowda.github.io/complain/teachersDashBOard.html";
        return;

    }
    else {
      SignupPage.style.display = "flex";
      Signupcontent = SignupPage.querySelector(".login");
      Signupcontent.innerHTML =
        "You are not eligible to proceed further, if you're email is not registered, continue further by signing-up using your email-ID";
    }
  });
});
