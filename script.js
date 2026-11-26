const maskForm = document.querySelector("div.mask-form");
const form = document.querySelector("form.form");

function showForm(event) {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  maskForm.style.visibility = "visible";

  event.preventDefault()
}

function hiddenForm() {
  form.style.left = "-340px";
  form.style.transform = "translateX(0)";
  maskForm.style.visibility = "hidden";
}
