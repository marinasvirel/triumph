// Модальное окно
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const openBtns = document.querySelectorAll(".modal-open");
const closeBtn = document.querySelector(".modal-close");

openBtns.forEach(element => {
  element.addEventListener("click", function () {
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
  });
});

closeBtn.addEventListener("click", function () {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
});
// Модальное окно //

//console.log(openBtns);
