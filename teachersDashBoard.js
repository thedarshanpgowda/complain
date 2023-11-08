document.addEventListener("DOMContentLoaded", () => {
  const a = async () => {
    // const p = await fetch('https://api.imgflip.com/get_memes');

    const p = await fetch("https://api.breakingbadquotes.xyz/v1/quotes/500");


    const k = await p.json();
    console.log(k)

    return k;
  };
  const messagesBlock = document.querySelector(".messagesBlock");

  const nt = async () => {
    const arr = await a();
    // console.log(arr)
    arr.forEach((element) => {
      const date = new Date();

      // console.log(element.quote + " " + element.author)
      const div = document.createElement("div");
      div.classList.add("block");
      div.innerHTML = `<div>
                                <div class="name">
                                    <p>${element.author}</p>
                                </div>
                                <div class="content">
                                    ${element.quote}
                                </div>
                                <div class="footerBlock">
                                    <div class="date">${date.getMilliseconds()}</div>
                                    <div class="reply">
                                        <a href="#" class="replyButton">
                                            <img src="https://cdn-icons-png.flaticon.com/128/1933/1933008.png" alt="">
                                            <button>Reply</button>
                                        </a>
                                    </div>
                                </div>
                            </div>`;
      messagesBlock.appendChild(div);
    });

    const cancelBar = document.querySelector(".cancelBar");
    const extraContent = document.querySelector(".extraContent");
    cancelBar.addEventListener("click", () => {
      extraContent.style.display = "none";
    });
    const replyButton = document.querySelectorAll(".replyButton");
    console.log(replyButton.length);
    replyButton.forEach((replybtn) => {
      replybtn.addEventListener("click", () => {
        const question = document.getElementById('question');
        const s = replybtn.parentNode.previousSibling
        question.innerHTML = s;
        extraContent.style.display = "block";

      });
    });
    setInterval(() => {
      const date = new Date();
      const dateblock = document.getElementById("date");
      dateblock.innerHTML = date;
    }, 900);
  };
  nt();
});
