

const showbox = document.getElementById ("showboxe", "showboxd", "showboxp");
const closebox = document.getElementById ("closeboxe", "closeboxd", "closeboxp");
const materibox = document.getElementById ("materiboxe","materiboxp", "materiboxp");

showbox.addEventListener ("click", () => {
  materibox.classList.add("visible");
  document.body.style.overflow = "hidden";
});

closebox.addEventListener ("click", () => {
  materibox.classList.remove("visible");
  document.body.style.overflow = "auto";
})



