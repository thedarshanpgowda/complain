document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menubar");
  const DashboardContainer = document.querySelector(".DashboardContainer");
  menu.addEventListener("click", () => {
    DashboardContainer.classList.toggle("visibleContent");
  });

  const date = document.querySelector("#date");
  setInterval(() => {
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    date.innerHTML = `${hour} : ${min} :${sec}`;
  }, 1000);

  //dashboard for emotional tracker

let happyMood = [
    '',
    'I watched loki season 2',
    'I visited my native',
    'Had a great convo with my besfriend',
    'Completed almost work of internship',
    'Had biriyani with my brother',
    'Decided to go on a trip'
]
let sadMood = [
    '',
    'Created a login Page',
    'Ive been discouraged',
    'I think im loosing someone i care ',
    'Got our company name printed',
    'Had to see my long lost friend',
    'No ones coming to save, no one'
]
let nightMood = [
    '',
    'Feeling lonely',
    'Its not my fault, yet i get the blamings',
    'I think im loosing someone i care',
    'Its hard to exist',
    'saw my long lost friend',
    'Its hard to explain your situation to others'
]


  const titleM = document.querySelectorAll(".morning");
  const titleA = document.querySelectorAll(".afternoon");
  const titleE = document.querySelectorAll(".evening");
  titleM.forEach((element, index) => {
    element.setAttribute("title", happyMood[index]);
  });
  titleA.forEach((element, index) => {
    element.setAttribute("title", sadMood[index]);
  });
  titleE.forEach((element, index) => {
    element.setAttribute("title", nightMood[index]);
  });
});
