function mostrarsegundotexto() {
    document.getElementById("text2").style.display = "block";
}

function ocultarsegundotexto() {
    document.getElementById("text2").style.display = "none"    
}

function agrandarimagen() {
    document.getElementById("img").style.width = "100%"
    
}

function achicarimagen() {
    document.getElementById("img").style.width ="20%"
    
}

function agrandartexto() {
    document.getElementById("caja3").style.fontSize = "200%"
    
}



document.getElementById("text1").addEventListener("mouseover", mostrarsegundotexto);
document.getElementById("text1").addEventListener("mouseleave", ocultarsegundotexto);
document.getElementById("caja2").addEventListener("click", agrandarimagen);
document.getElementById("caja2").addEventListener("mouseleave", achicarimagen);
document.getElementById("caja3").addEventListener("dblclick", agrandartexto);