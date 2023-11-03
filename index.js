document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menubar");
  const navBar = document.querySelector(".navbar");

  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("navbarVisible");
  });

  const navbar_btns = document.querySelectorAll(".nav");
  navbar_btns.forEach((element) => {
    const nav_image = element.querySelector("img");
    const anchor = element.querySelector("a");

    element.addEventListener("click", () => {
      navbar_btns.forEach((innerElement) => {
        const innerNavImage = innerElement.querySelector("img");
        const innerAnchor = innerElement.querySelector("a");
        innerNavImage.style.filter = "invert(1)";
        innerAnchor.style.color = "white";
      });
      nav_image.style.filter = "invert(0)";
      anchor.style.color = "black";
    });
  });
  

  
});
