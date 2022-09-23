document.getElementById("video").style.display = "block";
document.getElementById("cerrar_btn").style.display = "block";
document.getElementById("abrir_btn").style.display = "none";
function cerrar_vid(){
    if(document.getElementById("video").style.display == "block"){
        document.getElementById("video").style.display = "none";
        document.getElementById("abrir_btn").style.display = "block";
        document.getElementById("cerrar_btn").style.display = "none";
    }else if(document.getElementById("video").style.display == "none"){
        document.getElementById("video").style.display = "block";
        document.getElementById("cerrar_btn").style.display = "block";
        document.getElementById("abrir_btn").style.display = "none";
    }
}