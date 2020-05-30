
var map = document.querySelector(".button-map");
var map_popup = document.querySelector(".modal-map");
var close_map = document.querySelector(".modal-close-map")

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.add("modal-show");

});

close_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      if (map_popup.classList.contains("modal-show")) {
          evt.preventDefault();
          map_popup.classList.remove("modal-show");
          map_popup.classList.remove("modal-error");
      }
  }
});

