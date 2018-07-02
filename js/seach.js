  var seach = document.querySelector(".seach");
  var seachpopup = document.querySelector(".modal-seach");


  seach.addEventListener("click", function (evt) {
    evt.preventDefault();
    seachpopup.classList.add("modal-show");

  });

