
export default function menuMobile() {
  const itensMenuMobile = document.querySelector(".menu__mobile");
  const btnBurger = document.querySelector(".burger__btn");
  const btnClose = document.querySelector(".menu__close a");

  btnBurger.addEventListener("click", handleClick);
  btnClose.addEventListener("click", handleClose);

  function handleClick() {
    itensMenuMobile.classList.add("active");
  }

  function handleClose() {
    itensMenuMobile.classList.remove("active");
  }
}