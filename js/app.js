const snowContenedor = document.querySelector(".snow")
const audioNavidad = document.querySelector("#musica_navidad")

audioNavidad.play()
audioNavidad.loop = true

snowContenedor.innerHTML ="";

function generarNieve(){
    
    Array.from({length:51}).forEach((_,i)=>{
        const num = generarNumero (11, 26)
        snowContenedor.innerHTML+= `<span 
        style="--i:${num}"> </span>`
    })
}

function generarNumero(inicio, final){
    return Math.floor(Math.random() * (final -inicio + 1) + inicio);

}


function timerNavidad(){
    //1.obtener la fecha actual
    const fechaActual = new Date();

    //2.definir el objetivo
    const fechaObjetivo = new Date(fechaActual.getFullYear(), 11, 25)//el mes 11 representa diciembre

    //3.verificar si la fecha objetivo ya paso
    if(fechaActual.getMonth()=== 11 && fechaActual.getDate() > 25){
        fechaObjetivo.setFullYear(fechaObjetivo.getFullYear()+1);
    }

    //4.calcular la diferencia entre fechas en milisegundos
    let diferenciaEnMs = fechaObjetivo - fechaActual;

    let diasRestantes = Math.floor(diferenciaEnMs/(1000*60*60*24));

    let horasRestantes =Math.floor((diferenciaEnMs%(1000*60*60*24)/(1000*60*60)))

    let minutosRestantes = Math.floor((diferenciaEnMs%(1000*60*60)/(1000*60)));

    let segundosRestantes = Math.floor((diferenciaEnMs%(1000*60)) / 1000);


    console.log(diasRestantes, horasRestantes, minutosRestantes, segundosRestantes);

    const diasHTML = document.getElementById("dias-restantes")
    const horasHTML = document.getElementById("horas-restantes")
    const minutosHTML = document.getElementById("minutos-restantes")
    const segundosHTML = document.getElementById("segundos-restantes")

    //padStart es un metodo de relleno para que si el numero no cumple con primer parametro, rellene con el segundo

    diasHTML.innerHTML = diasRestantes.toString().padStart(2, "0");
    horasHTML.innerHTML = horasRestantes.toString().padStart(2, "0");
    minutosHTML.innerHTML = minutosRestantes.toString().padStart(2, "0");
    segundosHTML.innerHTML = segundosRestantes.toString().padStart(2, "0");

}

setInterval(timerNavidad, 1000);

generarNieve()




