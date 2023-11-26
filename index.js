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

  function checkScreenWidth() {
    var screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (screenWidth < 500) {
      // console.log("Screen width is less than 500 pixels!");
      const cancelAnytime = document.querySelector(".cancelAnytime");
      const dropdown = document.querySelector(".dropdown");
      const review = document.querySelector(".review ");
      cancelAnytime.addEventListener("click", () => {
        dropdown.style.display = "none";
      });
      review.addEventListener("mouseover", () => {
        dropdown.style.display = "flex";
      });
    }
  }

  window.addEventListener("resize", checkScreenWidth);
  checkScreenWidth();
});
