document.addEventListener("DOMContentLoaded", () => {
  const max_messages = 100;
  let message_index = 0;
  const messageArray = [];
  for (var i = 0; i < max_messages; i++) {
    messageArray.push(`message${i}`);
  }

  function createBlock(Myname, message){
    if(Myname==""){
        Myname = 'Anonymous';
    }
    const blockForActualComment = document.createElement('div');
    blockForActualComment.className = 'blockForActualComment';

    const nameForComment = document.createElement('div');
    nameForComment.className = 'nameForComment';
    nameForComment.innerHTML = Myname;

    const actualComment = document.createElement('div');
    actualComment.className = 'actualComment';
    actualComment.innerHTML = message;
    actualComment.style.width = '125%';


    const accessories = document.createElement('div');
    accessories.className = 'accessories';

    const likesCount = document.createElement('div');
    likesCount.className = 'likesCount';

    const likes = document.createElement('div');
    likes.className = 'likes';

    const likeBefore = document.createElement('img');
    likeBefore.className = 'likeBefore';
    likeBefore.src = 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png';
    likeBefore.alt = 'likes'
    
    const likeAfter = document.createElement('img');
    likeAfter.className = 'likeAfter';
    likeAfter.src = 'https://cdn-icons-png.flaticon.com/128/833/833472.png';
    likeAfter.alt = 'likes'

    const likesC = document.createElement('div');
    likesC.className = 'likesC';
    likesC.innerHTML = '0';

    likes.appendChild(likeBefore);
    likes.appendChild(likeAfter);
   
    likesCount.appendChild(likes);
    likesCount.appendChild(likesC);

    accessories.appendChild(likesCount);

    blockForActualComment.appendChild(nameForComment);
    blockForActualComment.appendChild(actualComment);
    blockForActualComment.appendChild(accessories);
    return blockForActualComment;
  }


  function appendMainMessage(event, name ,message){
    const newBlock = createBlock(name,message);

    const commentPrimaryBlock = document.createElement('div');
    commentPrimaryBlock.className = 'commentPrimaryBlock';
    commentPrimaryBlock.appendChild(newBlock);

    const reply = document.createElement('div');
    reply.className = 'replyBlock';
    commentPrimaryBlock.appendChild(reply);

    const blockForComment = document.createElement('div');
    blockForComment.className = 'blockForComment';
    blockForComment.appendChild(commentPrimaryBlock);

    const anchor = document.createElement('a');
    anchor.className = 'reply';
    anchor.href = '#';
    anchor.textContent = 'Reply'

    
    blockForComment.appendChild(commentPrimaryBlock);
    const anch = blockForComment.querySelector('.accessories');
    anch.appendChild(anchor);

    const testimonals = document.querySelector('.testimonals');
    const block = event.target.closest('.mainprimaryBox').nextElementSibling;

    commentPrimaryBlock.querySelector('.actualComment').style.width = '100%';
    commentPrimaryBlock.style.padding = '0% 4%';
    
    testimonals.insertBefore(blockForComment, block);

  }


  function appendMessage(event, Myname, message) {
    console.log(Myname , message)
    const blockForActualComment = createBlock(Myname,message)
    const replyBlock = event.target.closest('.replyBlock');
    replyBlock.appendChild(blockForActualComment);
  }

  function SubmitCommentfunc(event){
    const name = event.target.closest('.mainprimaryBox').querySelector('.maininputName');
    const message = event.target.closest('.mainprimaryBox').querySelector('.maininputClass');
    appendMainMessage(event, name.value, message.value);
    
    const input = event.target.closest('.mainprimaryBox').querySelector('.maininputName');
    const textarea = event.target.closest('.mainprimaryBox').querySelector('textarea');
    input.value = "";
    textarea.value = "";



  }

  function SubmitMainfunc(event) {
    const message = event.target.closest(".replyBlock").querySelector(".inputClass");
    const name = event.target.closest(".replyBlock").querySelector(".inputClassName");
    appendMessage(event, name.value ,message.value);
    const primaryBox = event.target.closest(".primaryBox");
    primaryBox.style.display = "none";
  }

  function updateLikes(event) {
    let likesafter = event.target
      .closest(".accessories")
      .querySelector(".likeAfter");
    likesafter.style.display = "block";
    event.target.style.visibility = "hidden";
    let likes = event.target.closest(".accessories").querySelector(".likesC");
    let count = Number.parseInt(likes.innerHTML);
    likes.innerHTML = count + 1;
  }

  function DecreaseLikes(event) {
    let likesbefore = event.target
      .closest(".accessories")
      .querySelector(".likeBefore");
    event.target.style.display = "none";
    likesbefore.style.visibility = "visible";
    let likes = event.target.closest(".accessories").querySelector(".likesC");
    let count = Number.parseInt(likes.innerHTML);
    likes.innerHTML = count - 1;
  }

  function replyBlock(event) {
    const reply = event.target.closest(".blockForActualComment").nextElementSibling;


    const newBlock = document.createElement("div");
    newBlock.classList.add("primaryBox");
    
    
    const newBlockForInput = document.createElement("div");
    newBlockForInput.classList.add("primaryBoxForInput");

    // creating input tags for name and comment
    //comments
    const inputtag1 = document.createElement("textarea");
    inputtag1.className = "inputClass";
    inputtag1.placeholder = "Enter your thoughts here";

    //name
    const inputtag2 = document.createElement("input");
    inputtag2.type = "text";
    inputtag2.className = "inputClassName";
    inputtag2.placeholder = "Name";

    //adding name and comment to one block
    newBlockForInput.appendChild(inputtag2);
    newBlockForInput.appendChild(inputtag1);

    //adding new block to the parent block
    newBlock.appendChild(newBlockForInput);

    //submit image
    const imageTag = document.createElement("img");
    imageTag.src = "https://cdn-icons-png.flaticon.com/128/12048/12048842.png";
    imageTag.className = "SubmitMain";

    //appending image and entire blocks to parent div
    newBlock.appendChild(imageTag);
    reply.appendChild(newBlock);
  }

  document.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.classList.contains("likeBefore")) {
      updateLikes(event);
    }
    if (event.target.classList.contains("likeAfter")) {
      DecreaseLikes(event);
    }
    if (event.target.classList.contains("reply")) {
      event.preventDefault();
      replyBlock(event);
    }
    if (event.target.classList.contains("SubmitMain")) {
      event.preventDefault();
      SubmitMainfunc(event);
    }
    if (event.target.classList.contains("mainSubmitMain")) {
      event.preventDefault();
      SubmitCommentfunc(event);
    }



  });
});
