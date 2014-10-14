function dropable(evt) {
    evt.preventDefault();

}

function drag(evt) {
    evt.dataTransfer.setData("text/html", evt.target.id);
    
}

function drop(evt) {
    evt.preventDefault();
    var datos = evt.dataTransfer.getData("text/html");
    evt.target.appendChild(document.getElementById(datos));
}

(function() {

    document.querySelector("#clase1").addEventListener("drop", drop);
    document.querySelector("#clase2").addEventListener("drop", drop);
    document.querySelector("#clase3").addEventListener("drop", drop);
    document.querySelector("#clase1").addEventListener("dragover", dropable);
    document.querySelector("#clase2").addEventListener("dragover", dropable);
    document.querySelector("#clase3").addEventListener("dragover", dropable);
    document.querySelector("#mover").addEventListener("dragstart", drag);

   
})();