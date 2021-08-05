$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

// navbar
const menuBtn = document.querySelector(".menu-icon span");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
};

//linea tiempo
$(function () {
  var inputs = $(".input");
  var paras = $(".description-flex-container").find("p");
  inputs.click(function () {
    var t = $(this),
      ind = t.index(),
      matchedPara = paras.eq(ind);

    t.add(matchedPara).addClass("active");
    inputs.not(t).add(paras.not(matchedPara)).removeClass("active");
  });
});
