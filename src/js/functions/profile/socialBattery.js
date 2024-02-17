export function socialBattery() {
  const lowBatt = document.querySelector("#battLow");
  const halfBatt = document.querySelector("#battHalf");
  const fullBatt = document.querySelector("#battFull");

  fullBatt.addEventListener("click", () => {
    lowBatt.classList.remove("d-none");
    fullBatt.classList.add("d-none");
  });
  lowBatt.addEventListener("click", () => {
    halfBatt.classList.remove("d-none");
    lowBatt.classList.add("d-none");
  });
  halfBatt.addEventListener("click", () => {
    fullBatt.classList.remove("d-none");
    halfBatt.classList.add("d-none");
  });
}
