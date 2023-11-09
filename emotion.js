document.addEventListener("DOMContentLoaded", () => {

  const menu = document.querySelector('.menubar');
  const DashboardContainer = document.querySelector('.DashboardContainer');
  menu.addEventListener('click',()=>{
    
    DashboardContainer.classList.toggle('visibleContent');
  })
  
  const date = document.querySelector("#date");
  setInterval(() => {
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    date.innerHTML = `${hour} : ${min} :${sec}`;
  }, 1000);


  const morning = document.querySelector(".col1");
  const happymorning = morning.querySelector(".reasons-for-happiness");
  const sadmorning = morning.querySelector(".reasons-for-sadness");
  const angrymorning = morning.querySelector(".reasons-for-angryness");
  const surprisedmorning = morning.querySelector(".reasons-for-surprisedness");
  const pridemorning = morning.querySelector(".reasons-for-prideness");
  const crymorning = morning.querySelector(".reasons-for-cryness");
  const awkwardmorning = morning.querySelector(".reasons-for-awkwardness");
  const afraidmorning = morning.querySelector(".reasons-for-afraidness");
  const othermorning = morning.querySelector(".reasons-for-otherness");
  const morningMood = morning.querySelectorAll("input[name='morningMood']");
  const hidden_contentmorning = morning.querySelectorAll(".hidden_content");

  morningMood.forEach((element) => {
    element.addEventListener("click", () => {
      hidden_contentmorning.forEach((e) => {
        e.style.display = "none";
      });
      if (element.id == "happyMorning" && element.checked) {
        happymorning.style.display = "block";
      }
      if (element.id == "sadMorning" && element.checked) {
        sadmorning.style.display = "block";
      }
      if (element.id == "angryMorning" && element.checked) {
        angrymorning.style.display = "block";
      }
      if (element.id == "surprisedMorning" && element.checked) {
        surprisedmorning.style.display = "block";
      }
      if (element.id == "prideMorning" && element.checked) {
        pridemorning.style.display = "block";
      }
      if (element.id == "cryMorning" && element.checked) {
        crymorning.style.display = "block";
      }
      if (element.id == "awkwardMorning" && element.checked) {
        awkwardmorning.style.display = "block";
      }
      if (element.id == "afraidMorning" && element.checked) {
        afraidmorning.style.display = "block";
      }
      if (element.id == "otherMorning" && element.checked) {
        othermorning.style.display = "block";
        console.log(othermorning);
      }
    });
  });

  const afternoon = document.querySelector(".col2");
  console.log(afternoon);
  const happyafternoon = afternoon.querySelector(".reasons-for-happiness");
  console.log(happyafternoon);

  const sadafternoon = afternoon.querySelector(".reasons-for-sadness");
  const angryafternoon = afternoon.querySelector(".reasons-for-angryness");
  const surprisedafternoon = afternoon.querySelector(
    ".reasons-for-surprisedness"
  );
  const prideafternoon = afternoon.querySelector(".reasons-for-prideness");
  const cryafternoon = afternoon.querySelector(".reasons-for-cryness");
  const awkwardafternoon = afternoon.querySelector(".reasons-for-awkwardness");
  const afraidafternoon = afternoon.querySelector(".reasons-for-afraidness");
  const otherafternoon = afternoon.querySelector(".reasons-for-otherness");
  const afternoonMood = afternoon.querySelectorAll(
    "input[name='afternoonmood']"
  );
  console.log(afternoonMood);

  const hidden_contentafternoon = afternoon.querySelectorAll(".hidden_content");
  console.log(hidden_contentafternoon);

  afternoonMood.forEach((element) => {
    element.addEventListener("click", () => {
      hidden_contentafternoon.forEach((e) => {
        e.style.display = "none";
      });
      if (element.id == "happyafternoon" && element.checked) {
        happyafternoon.style.display = "block";
        console.log("hii");
      }
      if (element.id == "sadafternoon" && element.checked) {
        sadafternoon.style.display = "block";
      }
      if (element.id == "angryafternoon" && element.checked) {
        angryafternoon.style.display = "block";
      }
      if (element.id == "surprisedafternoon" && element.checked) {
        surprisedafternoon.style.display = "block";
      }
      if (element.id == "prideafternoon" && element.checked) {
        prideafternoon.style.display = "block";
      }
      if (element.id == "cryafternoon" && element.checked) {
        cryafternoon.style.display = "block";
      }
      if (element.id == "awkwardafternoon" && element.checked) {
        awkwardafternoon.style.display = "block";
      }
      if (element.id == "afraidafternoon" && element.checked) {
        afraidafternoon.style.display = "block";
      }
      if (element.id == "otherafternoon" && element.checked) {
        otherafternoon.style.display = "block";
      }
    });
  });

  const night = document.querySelector(".col3");
  console.log(night);
  const happynight = night.querySelector(".reasons-for-happiness");
  console.log(happynight);

  const sadnight = night.querySelector(".reasons-for-sadness");
  const angrynight = night.querySelector(".reasons-for-angryness");
  const surprisednight = night.querySelector(".reasons-for-surprisedness");
  const pridenight = night.querySelector(".reasons-for-prideness");
  const crynight = night.querySelector(".reasons-for-cryness");
  const awkwardnight = night.querySelector(".reasons-for-awkwardness");
  const afraidnight = night.querySelector(".reasons-for-afraidness");
  const othernight = night.querySelector(".reasons-for-otherness");
  const nightMood = night.querySelectorAll("input[name='nightmood']");
  console.log(nightMood);

  const hidden_contentnight = night.querySelectorAll(".hidden_content");
  console.log(hidden_contentnight);

  nightMood.forEach((element) => {
    element.addEventListener("click", () => {
      hidden_contentnight.forEach((e) => {
        e.style.display = "none";
      });
      if (element.id == "happynight" && element.checked) {
        happynight.style.display = "block";
        console.log("hii");
      }
      if (element.id == "sadnight" && element.checked) {
        sadnight.style.display = "block";
      }
      if (element.id == "angrynight" && element.checked) {
        angrynight.style.display = "block";
      }
      if (element.id == "surprisednight" && element.checked) {
        surprisednight.style.display = "block";
      }
      if (element.id == "pridenight" && element.checked) {
        pridenight.style.display = "block";
      }
      if (element.id == "crynight" && element.checked) {
        crynight.style.display = "block";
      }
      if (element.id == "awkwardnight" && element.checked) {
        awkwardnight.style.display = "block";
      }
      if (element.id == "afraidnight" && element.checked) {
        afraidnight.style.display = "block";
      }
      if (element.id == "othernight" && element.checked) {
        othernight.style.display = "block";
      }
    });
  });




});
