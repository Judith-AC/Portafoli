// Seleccionem els elements del carrusel

const treballs = document.querySelector(".treballs");
const anterior = document.getElementById("anterior");
const seguent = document.getElementById("seguent");

// Distància que es mourà el carrusel

const pas = 340;

// Quan cliquem la fletxa següent

seguent.addEventListener("click", function(){
    treballs.scrollBy({ // scrollBy: desplaça el contenidor.
        left: pas, // left: pas: es mou 340 píxels cap a la dreta.
        behavior: "smooth"
    });
});

// Quan cliquem la fletxa anterior 

anterior.addEventListener("click", function(){
    treballs.scrollBy({
        left: -pas,
        behavior: "smooth"
    });
});
