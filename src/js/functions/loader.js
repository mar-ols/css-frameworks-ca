export function loader() {
  const loaderContainer = document.createElement("div");
  loaderContainer.classList.add("loader-container");

  const spinningLoader = document.createElement("div");
  spinningLoader.classList.add("loader");

  loaderContainer.appendChild(spinningLoader);

  const main = document.querySelector(".main");
  if (main) {
    main.appendChild(loaderContainer);
  }
}
