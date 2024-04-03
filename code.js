
function SIIM (){
    alert("Você aceitou namorar comigo! s2")   
}

function desvia(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.botton = geraPosicao (10, 90) ;
    btn.style.left = geraPosicao (10, 90) ;
    console.log("Opa, desviei...");
}


ramdomNumber (0, 100);


function geraPosicao (min, max)
    {
    return (Math.random() * (max - min) + min) + "%";
    }

