var seach = document.querySelector(".seach");
var seachpopup = document.querySelector(".modal-seach");


seach.addEventListener("click", function (evt) {
  evt.preventDefault();
  seachpopup.classList.add("modal-show");

});

var link = document.querySelector(".login");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close-login");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

var feedback = document.querySelector(".feedback");
var feedbackpopup = document.querySelector(".modal-feedback");
var wrapper = document.querySelector(".site-wrapper");
var overlay = document.querySelector(".overlay");
var closefeedback = document.querySelector(".overlay");

feedback.addEventListener("click", function (evt) {
 evt.preventDefault();
 feedbackpopup.classList.add("modal-show");
 wrapper.classList.add("up");
 overlay.classList.add("modal-show");
});
closefeedback.addEventListener("click", function (evt) {
 evt.preventDefault();
 feedbackpopup.classList.remove("modal-show");
 wrapper.classList.remove("up");
 overlay.classList.remove("modal-show");


});
