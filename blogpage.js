document.addEventListener("DOMContentLoaded", () => {
  var arr = [];
      for(var i = 0; i< 100; i++){
        arr.push(`message${i}`);
      }
      // console.log(arr)
  let z = 0;
      k = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
      delectus? A asperiores cum quam similique ipsam molestias
      eligendi, molestiae quasi commodi veritatis veniam debitis
      incidunt sequi suscipit neque tenetur vero atque quo quaerat
      ducimus! Voluptate totam laboriosam aliquam, in quam, minus,
      quibusdam commodi excepturi quaerat neque quod incidunt at
      aliquid?`;
    

  function clearMessage(data) {
    // console.log('hello')
    data.value = "";
  }

  function changes() {
    document.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("Submit")) {
        e.preventDefault();
        let message = e.target
          .closest(".secondaryComment")
          .querySelector('input[type="text"]').value;
        appendMessage(e, message);
        e.target
          .closest(".secondaryComment")
          .querySelector('input[type="text"]').defaultValue = "";
      }
      if (e.target.classList.contains("SubmitMain")) {
        const formContainer = e.target
          .closest(".formContainer")
          .querySelector('input[type="text"]');
        appendMessage(e, formContainer.value);
        clearMessage(formContainer);
      }
      if (e.target.classList.contains("replyA")) {
        replyblock(e);
      }
      if (e.target.classList.contains("likeBefore")) {
        likebeforeblock(e);
      }
      if (e.target.classList.contains("likeAfter")) {
        likeafterblock(e);
      }
      if (e.target.id === "Mycomment") {
        extrafunction(e);
      }
    });

    const Submit = document.querySelectorAll(".Submit");
    const SubmitMain = document.querySelectorAll(".SubmitMain");
    const likeAfter = document.querySelectorAll(".likeAfter");
    const likeBefore = document.querySelectorAll(".likeBefore");
    const likesCount = document.querySelectorAll(".likesCount p");
    const reply = document.querySelectorAll(".reply a");
    const secondaryComment = document.querySelectorAll(".secondaryComment");
    const person = document.querySelector(".person");
    const comment = document.querySelector(".comment");
    const mainUserComment = document.querySelector(".mainUserComment");

    mainUserComment.addEventListener("keypress", (event) => {
      if (event.key == "Enter") {
        event.preventDefault();
        var usercomment = mainUserComment.value;
        console.log('pressed')
        appendMessage(event, usercomment);
        clearMessage(mainUserComment);
      }
    });

    function extrafunction(e){
      e.target.addEventListener('keypress',(s)=>{
        console.log('within')
        if(s.key == 'Enter'){
          s.preventDefault();
          let message = e.target.value;
          appendMessage(e,message)
          e.target.closest('.secondaryContentComment').style.display = 'none';
        }
      })
    }
      

    comment.innerHTML = k;

    function appendMessage(e, message) {
      if (e.target.classList.contains("Submit")) {
        const k = e.target.closest(".secondaryContentComment");
        k.style.display = "none";
      }
      const newdiv = document.createElement("div");
      newdiv.classList.add("newblockforreply");
      newdiv.innerHTML = `
            <div class="personImage">
                <img src="images/img44.png" alt="">
            </div>
            <div class="personComments">
                <div class="innerComment">
                    <div class="comment">
                        ${message}
                    </div>
                    <div class="innerAccessories">
                            <div class="dateTime">1d</div>
                            <div class="likesCount">
                                <div class="likes">
                                    <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt=""
                                        class="likeBefore" />
                                    <img src="https://cdn-icons-png.flaticon.com/128/833/833472.png" alt=""
                                        class="likeAfter" />
                                </div>
                                <div class="actuallikescount">
                                    <p>0</p>
                                </div>
                            </div>
                            <div class="reply">
                                <a href="#" class="replyA">reply</a>
                            </div>
                        </div>
                </div>
            </div>`;

      const person = e.target.closest(".person");
      person.appendChild(newdiv);
      
        localStorage.setItem(`${arr[z]}`, message);
        z+=1;
        console.log(z)
    }

    function replyblock(event) {
      event.preventDefault();
      const newblock = document.createElement("div");
      newblock.classList.add("secondaryContentComment");
      newblock.innerHTML = `
                    <form action="" class="secondaryComment">
                        <img src="images/im2.png" alt="">
                        <input type="text" placeholder="Express your reply here" name="Mycomment" id="Mycomment">
                        <img src="https://cdn-icons-png.flaticon.com/128/12048/12048842.png" alt="" class="Submit">
                    </form>
                `;
      const person = event.target.closest(".person");
      person.appendChild(newblock);
    }

    function likebeforeblock(e) {
      let likeAfter = e.target.closest(".likes").querySelector(".likeAfter");
      likeAfter.style.display = "block";
      let likesCount = e.target
        .closest(".innerComment")
        .querySelector(".actuallikescount p");
      let likes = Number.parseInt(likesCount.innerHTML) + 1;
      likesCount.innerHTML = likes;
    }

    function likeafterblock(e) {
      let likeAfter = e.target.closest(".likes").querySelector(".likeAfter");
      likeAfter.style.display = "none";
      let likesCount = e.target
        .closest(".innerComment")
        .querySelector(".actuallikescount p");
      let likes = Number.parseInt(likesCount.innerHTML) - 1;
      likesCount.innerHTML = likes;
    }
  }

  document.addEventListener("MutationObserver", changes);
  changes();


});
