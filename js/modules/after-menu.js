export default function afterMenu() {
  const itensMenu = document.querySelectorAll(".menu a");

  itensMenu.forEach((menu) => {
    ["touchstart", "mouseenter"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
  }

  itensMenu.forEach((menu) => {
    ["touchend", "mouseout"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleMouseOut);
    });
  });

  function handleMouseOut(event) {
    event.preventDefault();
    this.classList.remove("active");
  }
}
