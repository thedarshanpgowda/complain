document.addEventListener("DOMContentLoaded", () => {
  const FetchapiFunction = async () => {
    const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes/500");
    const data = await response.json();
    // console.log(data);
    return data;
  };


  const messagesBlock = document.querySelector(".messagesBlock");
  const mainFunction = async () => {
    const dataObj = await FetchapiFunction();
    dataObj.forEach((each_object) => {
      const date = new Date();

      const div_block = document.createElement("div");
      div_block.classList.add("block");
      div_block.innerHTML = `<div>
                                <div class="name">
                                    <p>${each_object.author}</p>
                                </div>
                                <div class="content">
                                    ${each_object.quote}
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
      messagesBlock.appendChild(div_block);
    });

    const cancelBar = document.querySelector(".cancelBar");
    const extraContent = document.querySelector(".extraContent");
    cancelBar.addEventListener("click", () => {
      extraContent.style.display = "none";
    });
    const replyButton = document.querySelectorAll(".replyButton");
    console.log(replyButton.length);
    replyButton.forEach((replybtn) => {
      replybtn.addEventListener("click", (e) => {

        const question = document.getElementById("question");
        let questionBlock = e.target.closest('.block').querySelector('.content').innerHTML;
        // console.log(questionBlock)
        question.innerHTML = questionBlock;
        extraContent.style.display = "flex";
      });
    });

    setInterval(() => {
      const date = new Date();
      const dateblock = document.getElementById("date");
      dateblock.innerHTML = date;
    }, 900);
  };
  mainFunction();
  const menubar = document.querySelector('.menubar');
  const leftContainer = document.querySelector('.leftcontainer');
  menubar.addEventListener('click',()=>{
    leftContainer.classList.toggle('visibleContainer');
  })



});
