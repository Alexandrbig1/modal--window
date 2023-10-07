const btns = document.querySelectorAll(".btn"),
  modals = document.querySelectorAll(".modal"),
  modalBtns = document.querySelectorAll(".modal-btn"),
  modalIcons = document.querySelectorAll(".modal-icon");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modals.forEach((modal) => {
      if (modal.classList[0].split("-")[0] === btn.classList[1].split("-")[0]) {
        modal.classList.add("open");

        modalBtns.forEach((modalBtn) => {
          modalBtn.addEventListener("click", () => {
            modal.classList.remove("open");
          });
        });
        modalIcons.forEach((modalBtn) => {
          modalBtn.addEventListener("click", () => {
            modal.classList.remove("open");
          });
        });
      }
    });
  });
});
