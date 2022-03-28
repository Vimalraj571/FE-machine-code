console.log("Nested Commands");

const text = `
<span>
<input name="comment-input" type="text" placeholder="Enter the comment" id="comment-id-input"/>
<input type="button" value="Submit" name="comment-input" style="width: 5rem;" id="comment-id-submit"/>
</span>
`;

const addReply = document.querySelector("#add-reply");

const addInputBtn = () => {
  let tempInput = "";
  addReply.children[0].style.display = "none";
  addReply.innerHTML += text;
  addReply.removeEventListener("click", addInputBtn);
  const inputBox = document.querySelector("#comment-id-input");
  const submitBtn = document.querySelector("#comment-id-submit");
  inputBox.addEventListener("change", (e) => {
    tempInput = e.target.value;
  });
  submitBtn.addEventListener("click", (e) => {
    addReply.children[1].style.display = "none";
    addReply.innerHTML += tempInput;
    console.log(addReply.children);
    addReply.children[0].style.display = "block";
    addReply.addEventListener("click", addInputBtn);
    console.log(tempInput);
  });
};

addReply.addEventListener("click", addInputBtn);

// load initial comments
// add new command

// input box
// submit

// input::before add id with index thing

// 1.UI with given need do first
