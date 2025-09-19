const cards = document.querySelectorAll(".cards");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveList();
    card.classList.add("active");
  });
});

function removeActiveList() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
