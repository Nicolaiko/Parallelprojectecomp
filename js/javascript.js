function animationH(x) {
    x.classList.toggle("change");
}

function openNav() {
    document.getElementById("navtop-overlay").style.width = "100%";
}


function closeNav(x) {
    document.getElementById("navtop-overlay").style.width = "0%";
    x.classList.toggle("change");  
}
