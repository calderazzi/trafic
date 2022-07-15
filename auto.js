let run = document.getElementById(`h1`);
let mover1 = document.getElementById(`auto`);
let mover2 = document.getElementById(`trompa`);
let mover3 = document.getElementById("ruedaizq");
let mover4 = document.getElementById("ruedader");
let mover5 = document.getElementById("vidrio");
    run.onclick = mueve
    function mueve(evento){
        mover1.style.transition = "all 1.5s"
        mover1.style.left = "71%"
        mover2.style.transition = "all 1.5s"
        mover2.style.left = "90%"
        mover3.style.transition = "all 1.5s"
        mover3.style.left = "72%"
        mover4.style.transition = "all 1.5s"
        mover4.style.left = "86%"
        mover5.style.transition = "all 1.5s"
        mover5.style.left = "86%"
    }
    