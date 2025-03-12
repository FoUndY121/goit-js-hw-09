const form = document.querySelector(".feedback-form");
const localKey = "feedback-form-data";


document.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem(localKey)) || {};
  form.email.value = savedData.email || "";
  form.message.value = savedData.message || "";
});


form.addEventListener("input", () => {
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  localStorage.setItem(localKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Отправленные данные:", JSON.parse(localStorage.getItem(localKey)));
  localStorage.removeItem(localKey);
  form.reset();
});