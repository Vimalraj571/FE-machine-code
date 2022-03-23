console.log("Star Component");

const star = document.querySelectorAll(".star");

const eventHandle = (e) => {
  star.forEach((item, index) => {
    if (e.type === "click") {
      if (e.target.currStarIndex + 1 > index) {
        item.classList.add("star-yellow");
      } else {
        item.classList.remove("star-yellow");
      }
    }
    if (e.type === "mouseover") {
      if (index <= e.target.currStarIndex)
        item.classList.add("star-hover-yellow");
    }
    if (e.type === "mouseout") {
      item.classList.remove("star-hover-yellow");
    }
  });
};

for (let i = 0; i < star.length; i++) {
  star[i].currStarIndex = i;
  star[i].addEventListener("mouseover", eventHandle);
  star[i].addEventListener("mouseout", eventHandle);
  star[i].addEventListener("click", eventHandle);
}
