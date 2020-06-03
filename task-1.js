const categories = document.querySelector("#categories");

categories.querySelectorAll(".item").forEach((item) => {
  console.log(`Категория: ${item.querySelector("h2").textContent}`);
  console.log(
    `Количество элементов: ${item.querySelector("ul").children.length}`
  );
});
