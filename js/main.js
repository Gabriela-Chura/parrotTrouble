function calcular()
{
	var puntosSquad = document.getElementById("punto_squad").value;
	var maxPuntos = document.getElementById("max_puntos").value;
	//(100 * punto_squad) / max_puntos
	var porcentajeSquad = (100 * puntosSquad) / maxPuntos;

	if(porcentajeSquad >= 80)
	{
		document.getElementById("salida").innerHTML = "¡Muy bien squad!";
	}else{
		document.getElementById("salida").innerHTML = "¡Pueden hacerlo mejor!";
	}
}