const closeButton = document.querySelector(".close-btn");

closeButton.addEventListener("click", () => {
  const alertWrapper = document.querySelector(".alert-wrapper");

  alertWrapper.style.display = "none";
});
