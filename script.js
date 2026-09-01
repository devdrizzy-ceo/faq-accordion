const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const faqItem = question.parentElement;

    faqItem.classList.toggle("active");

    const icon = question.querySelector(".faq-icon");

    if (faqItem.classList.contains("active")) {
      icon.textContent = "−";
    } else {
      icon.textContent = "+";
    }
  });
});
