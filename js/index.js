const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

linkForm.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  console.log(123);
}
