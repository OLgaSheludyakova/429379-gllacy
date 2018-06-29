var link = document.querySelector(".login");
var popup2 = document.querySelector(".modal-login");
var close = popup2.querySelector(".modal-close-login");
var form = popup2.querySelector("form");
var login = popup2.querySelector("[name=login]");
var password = popup2.querySelector("[name=password]");

link.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup2.classList.add("modal-show");
 login.focus();
});
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup2.classList.remove("modal-show");
  });
  var seach = document.querySelector(".seach");
  var popup = document.querySelector(".modal-seach");
  var close = popup.querySelector(".modal-close-seach");
   var form = popup.querySelector("form");
  var login = popap.querySelector("[name=seach]");

  seach.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
  });
  close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    });
