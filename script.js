

const showbox = document.getElementById ("showbox");
const showboxs = document.getElementById ("showboxs");
const showboxp = document.getElementById ("showboxp");

const closebox = document.getElementById ("closebox");
const closeboxs = document.getElementById ("closeboxs");
const closeboxp = document.getElementById ("closeboxp");

const materibox = document.getElementById ("materibox");
const materiboxs = document.getElementById ("materiboxs");
const materiboxp = document.getElementById ("materiboxp");

showbox.addEventListener ("click", () => {
  materibox.classList.add("visible");
  document.body.style.overflow = "hidden";
});

showboxs.addEventListener ("click", () => {
  materiboxs.classList.add("visible");
  document.body.style.overflow = "hidden";
});

showboxp.addEventListener ("click", () => {
  materiboxp.classList.add("visible");
  document.body.style.overflow = "hidden";
});

closebox.addEventListener ("click", () => {
  materibox.classList.remove("visible");
  document.body.style.overflow = "auto";
});

closeboxs.addEventListener ("click", () => {
  materiboxs.classList.remove("visible");
  document.body.style.overflow = "auto";
});

closeboxp.addEventListener ("click", () => {
  materiboxp.classList.remove("visible");
  document.body.style.overflow = "auto";
});




