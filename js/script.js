const acordItem = document.getElementsByClassName("accordion__item");

[...acordItem].forEach((el) =>
  el.addEventListener("click", (e) => {
    const item = e.target.closest(".accordion__item");
    item.children[1].classList.toggle("display-none");
    item.children[0].children[0].classList.toggle("text-bold");
    item.children[0].children[1].classList.toggle("rotate");
  })
);
