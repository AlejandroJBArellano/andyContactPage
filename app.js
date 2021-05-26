const m = document.getElementById("menu"), d = document.getElementById("deploy");
m.addEventListener("click",_=>{
    d.style.display = "block"
    d.classList.toggle("active-ul")
    // document.body.classList.toggle("opacity")
    // m.addEventListener("click",_=>d.classList.remove("active"))
})
const b = document.getElementById("contact"), c = document.getElementById("contact");
let card = document.getElementById("programmer");
b.addEventListener("click", _=>{
    card.style.display = "block";
    c.style.display = "none"
});
