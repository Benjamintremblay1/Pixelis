const boutons = document.querySelectorAll(".btn-modale");
const modale = document.getElementById("modale");

boutons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        modale.style.display = "block";
    });
});

window.addEventListener("click", (e) => {
    if (e.target === modale) {
        modale.style.display = "none";
    }
});