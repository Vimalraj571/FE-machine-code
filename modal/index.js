console.log("Simple Modal Demo");

const openModalBtn = document.querySelector("#modal-btn");
const modalContent = document.querySelector("#modal-id");
const closeBtn = document.querySelector("#close-id");

openModalBtn.addEventListener("click", () => {
  if (
    modalContent.style.display === "none" ||
    modalContent.style.display === ""
  ) {
    modalContent.style.display = "block";
  }
});

closeBtn.addEventListener("click", () => {
  if (modalContent.style.display === "block") {
    modalContent.style.display = "none";
  }
});

window.addEventListener("click", (e) => {
  console.log(modalContent);
  console.log(e.target);
});
