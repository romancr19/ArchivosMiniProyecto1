
const habilidades = {1: 'Python: 70%', 2:'Java: 20%', 3:'JavaScript: 40%', 4:'HTML: 50%',5:'CSS: 50%'};


function mostrar() {
    let boton = document.getElementById('boton1');
    if (boton.innerHTML == 'Ver Habilidades') {
        boton.innerHTML = 'Ocultar';

        document.getElementById("l1").innerHTML += habilidades[1];
        document.getElementById("l2").innerHTML += habilidades[2];
        document.getElementById("l3").innerHTML += habilidades[3];
        document.getElementById("l4").innerHTML += habilidades[4];
        document.getElementById("l5").innerHTML += habilidades[5];
    }
        
    else {
        boton.innerHTML = 'Ver Habilidades'
        document.getElementById("l1").innerHTML = 'Nivel de conocimiento: ';
        document.getElementById("l2").innerHTML = 'Nivel de conocimiento: ';
        document.getElementById("l3").innerHTML = 'Nivel de conocimiento: ';
        document.getElementById("l4").innerHTML = 'Nivel de conocimiento: ';
        document.getElementById("l5").innerHTML = 'Nivel de conocimiento: ';
    }

}