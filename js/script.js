const feedbackButton = document.querySelector(".feedback-button");
const feedbackModal = document.querySelector(".modal-feedback");
const feedbackClose = feedbackModal.querySelector(".modal-close");

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add("modal-show");
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackModal.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal-show");
      }
    }
  });