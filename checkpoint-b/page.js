import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");

  listElement.innerHTML = "";

  list.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("stock-line");
    li.textContent = item.name;

    listElement.append(li);
  });
}

export function matching() {
  return items.filter(item => item.inStock === false);
}

export function start() {
  renderItems(items);

  document.querySelector("#show-some").addEventListener("click", () => {
    renderItems(matching());
  });
}

if (!import.meta.env?.VITEST && !import.meta.env?.MODE?.includes("test")) {
  start();
}

