const m = document.getElementById("menu"), d = document.getElementById("deploy");
//condicional para indicar que si está en esa reolución le ponga esa clase ("active-ul")
/* if s*/
// window.screen.width <= 768 ? d.classList.toggle("active-ul") : d.classList.remove("active-ul")
m.addEventListener("click",_=>{
    d.classList.toggle("active-ul")
    d.style.display = "block"
})
const b = document.getElementById("contact"), c = document.getElementById("contact");
let card = document.getElementById("programmer");
b.addEventListener("click", _=>{
    card.style.display = "block";
    c.style.display = "none"
});
