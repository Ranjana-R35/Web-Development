const form=document.getElementById("contact-form");
const success=document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitBtn = form.querySelector(".submit-btn");
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;
  setTimeout(() => {
    form.classList.add("hidden");
    success.classList.remove("hidden");
  }, 2000);
});

const reset=document.getElementById("reset-btn");
reset.addEventListener("click", () => {
  form.reset();
  form.classList.remove("hidden");
  success.classList.add("hidden");
  const submitBtn = form.querySelector(".submit-btn");
  submitBtn.innerHTML = '<span>Send Message</span><i class="fa-solid fa-paper-plane"></i>';
  submitBtn.disabled = false;
});