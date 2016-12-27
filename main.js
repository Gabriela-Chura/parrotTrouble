
function calcular() {
    var hora = document.getElementById("hora");
    var loro = document.getElementById("loro").value;
    var img = document.getElementById("images");
    
    var varhora=hora.value;
    var varloro = false;
    var varsalida = document.getElementById("salida");

    if (loro == "1") {
        varloro = true;
    }

   
    if(varloro){
      if(varhora>=7 && varhora<=20){
          varsalida.innerHTML="No";
      }
        else{
            varsalida.innerHTML="Si";
            img.innerHTML = '<img src="images/lorito.png" class:"img-responsive">';
        }
    }
    else{
        varsalida.innerHTML="No";
    }
}
