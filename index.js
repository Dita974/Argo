const message =
  "Thank you for submitting to The Argo Ship. Jason and his crew will respond shortly.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
