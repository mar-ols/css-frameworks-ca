/**
 * This function creates the HTML that is used to show the user a message in case of an error.
 */
export function errorMsg() {
  const errorContainer = document.createElement("div");
  errorContainer.classList.add(
    "bg-primary",
    "border",
    "border-secondary",
    "rounded",
    "pt-4",
    "px-2",
    "pb-3",
    "mx-auto",
    "text-danger"
  );

  const error = document.createElement("div");
  error.classList.add("error");

  const errorText = document.createElement("p");
  errorText.innerText = `There was an error getting the posts. Please try again later`;

  errorContainer.appendChild(error);
  error.appendChild(errorText);

  const displayError = document.querySelector(".errorMsg");
  if (displayError) {
    displayError.appendChild(errorContainer);
  }
}
