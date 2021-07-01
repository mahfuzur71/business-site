const dropdown_button = document.querySelector(".button");
const form = document.querySelector("form");
const close_button = document.querySelector(".close-button");

dropdown_button.addEventListener("click", function (event) {
  if (form.classList.contains("display-none")) {
    form.classList.remove("display-none");
    form.classList.add("display-block");
  } else if (form.classList.contains("display-block")) {
    form.classList.remove("display-block");
    form.classList.add("display-none");
  }
});

close_button.addEventListener("click", function (event) {
  form.classList.add("display-none");
});
