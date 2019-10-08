var vp=document.getElementById("laVilla");
var papel=vp.getContext("2d");
var max=0;
var min=420;


var fondo=new Image();
fondo.src="tile.png";
fondo.addEventListener("load",dibujarFondo);

var vaca=new Image();
vaca.src="vaca.png";
vaca.addEventListener("load",dibujarVaca);

var pollo=new Image();
pollo.src="pollo.png";
pollo.addEventListener("load",dibujarPollo);

var cerdo=new Image();
cerdo.src="cerdo.png";
cerdo.addEventListener("load",dibujarCerdo);

function aleatorio(){
	for(var i=0;i<10;i++){

	var resultado=Math.floor(Math.random()*(max-min+1)+min);//ecuacion para calcular el numero aleatrio entre un minimo y un maximo
	return resultado;
    }

}

function dibujarFondo(evento){
	papel.drawImage(fondo,0,0);
}

function dibujarVaca(evento){
	for(var i=0;i<10;i++){
		papel.drawImage(vaca,aleatorio(),aleatorio());
	}
	
}

function dibujarPollo(evento){
	papel.drawImage(pollo,100,10);
}

function dibujarCerdo(evento){
	papel.drawImage(cerdo,100,100);
}




