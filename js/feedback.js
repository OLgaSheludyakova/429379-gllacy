var feedback = document.querySelector(".feedback");
var feedbackpopup = document.querySelector(".modal-feedback");

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackpopup.classList.add("modal-show-feedback");
});
