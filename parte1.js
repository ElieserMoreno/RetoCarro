"use strict";
//Encendido y arranque 
let encendido = false 
let arranque = false 
//Freno de mano y freno 
frenoMano = false 
freno = false
//pedal y clucth
let pedal = 0
let clutch = 0

//palanca de cambios
let palancaCambios = null;
//
window.addEventListener(
  "keydown",
  function (event) {
    // Acelerar letra e
    if (event.keyCode == 69) {
      accion.Acelerador();
    }

    // Palanca de cambios 

    // Marcha N
    if (event.keyCode == 78) {
      accion.cambios(0);
    }
    // Marcha 1
    if (event.keyCode == 49) {
      accion.cambios(1);
    }
    // Marcha 2
    if (event.keyCode == 50) {
      accion.cambios(2);
    }
    // Marcha 3
    if (event.keyCode == 51) {
      accion.cambios(3);
    }
    // Marcha 4
    if (event.keyCode == 52) {
      accion.cambios(4);
    }
    // Marcha R
    if (event.keyCode == 53) {
      accion.cambios(5);
    }

    console.log(event);
  },
  false
);

    console.log(event);
function velocidad() {
    console.log(
      "Velocidad del carro:",
      Acelerador,
      "Palanca de cambios:",
      palancaCambios
    );
    distanciaRecorrida();
    tiempoViaje();
  
    if (Acelerador < 30 && palancaCambios === 1) {
      document.getElementById(
        "tablero-cotrol-velocidad-actual"
      ).innerHTML = `Velocidad: ${(Acelerador += 3)} KM/H`;
      setTimeout(velocidad, 350);
    } else if (Acelerador >= 30 &&  palancaCambios === 1) {}
      document.getElementBikyId("tablero-control").innerHTML =
        "Cambie a la siguiente marcha 2.";
    }
  
    if (
      Acalerador >= 30  <= 60 &&
      cajaCambios === 2
    ) {
      document.getElementById(
        "tablero-control-velocidad-actual"
      ).innerHTML = `Velocidad: ${(Acelerador += 2)} KM/H`;
      setTimeout(Velocidad, 350);
    } else if (
      Acelerador > 30 &&
      Acelerador === 60 &&
      palancaCambios === 2
    ) {
      document.getElementById("tablero-control").innerHTML =
        "Cambie a la siguiente marcha 3.";
    }
  
    if (
      Acelerador >= 60 &&
      Acelerador < 86 &&
      palancaCambios === 3
    ) {
      document.getElementById(
        "tablero-control-velocidad-actual"
      ).innerHTML = `Velocidad: ${(Acelerador += 2)} KM/H`;
      setTimeout(Velocidad, 350);
    } else if (
      Acelerador === 86 &&
      palancaCambios === 3
    ) {
      document.getElementById("tablero-control").innerHTML =
        "Cambie a la siguiente marcha 4.";
    }
  
    if (
      Acelerador >= 86 &&
      Acelerador < 110 &&
      palancaCambios === 4
    ) {
      document.getElementById(
        "tablero-control-velocidad-actual"
      ).innerHTML = `Velocidad: ${(Acelerador += 2)} KM/H`;
      setTimeout(Velocidad, 350);
    } else if (
      Acelerador > 86 &&
      Acelerador === 110 &&
      palancaCambios === 4
    ) {
      document.getElementById("tablero-control").innerHTML =
        "Hallegado al limite.";
    }
  
  
  function freno() {
    if (Acelerador >= 2 && Acelerador > 0) {
      document.getElementById(
        "tablero-control-velocidad-actual"
      ).innerHTML = `Velocidad: ${(Acelerador -= 2)} KM/H`;
      setTimeout(Freno, 350);
    }
  }

class Avance {
  FrenoMano (){
    if(frenoMano === true){
      document.getElementById("panelControl").innerHTML =
      "Freno de mano desactivado." ;
    }
  }
  cloutch(){
    if(cloutch === 1){
      document.getElementById("panelControl").innerHTML =
      "El cloutch está activo.";
    }
  }
  frenar(){
    if(Freno === true && encenido === true){
      document.getElementById("panelControl").innerHTML =
      "";
    
      return (freno = false), 
    
    console.log(freno);  
    }
  }
    encendido(){
    if (palancaCambios === 0 && frenoMano === true && cloutch === 1){
    return((encendido === true ),
    console.log(encendido)
    );
    }  if (palancaCambios =! 0){
      document.getElementById("panelControl")
    }else if (frenoMano != true) {
      document.getElementById("panelControl")
      console.log(frenoMano);
    }

    }
    acelerador(){
      if (encendido === true && acelerador === true  ){
        document.getElementById("panelControl").innerHTML =
      "No estas pisando el acelerador.";
      return (acelerador = false), console.log(acelerador);

      }
    }
    
}