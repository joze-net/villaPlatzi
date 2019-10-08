var vp=document.getElementById("laVilla");
var papel=vp.getContext("2d");
var max=0;
var min=420;

//creacion de variables literales -----------------------------------------------------------
var fondo = {
	url: "tile.png",
	cargaOk: false
}

var vaca = {
	url: "vaca.png",
	cargaOk: false
}

var pollo = {
	url: "pollo.png",
	cargaOk: false
}

var cerdo = {
	url: "cerdo.png",
	cargaOk: false
}

//creacion de un atributo tipo objeto Image a cada variable anterior, asignamos el src y los ponemos a la escucha----------------------
fondo.imagen=new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen=new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

pollo.imagen=new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);

cerdo.imagen=new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

//creacion de las funciones-----------------------------------------------------------------------------

function aleatorio(){//da un numero aleatorio entre un min y un max
	for(var i=0;i<10;i++){

	var resultado=Math.floor(Math.random()*(max-min+1)+min);//ecuacion para calcular el numero aleatrio entre un minimo y un maximo
	return resultado;
    }

}




function cargarFondo(evento){//las siguientes funcionoes de carga cambia en atributo de cada variable cargarOk por el valor de true y llama la funcion de dibujar`
	fondo.cargaOk=true;
	dibujar();
	
}

function cargarVaca(evento){
	vaca.cargaOk=true;
	dibujar();
}

function cargarPollo(evento){
	pollo.cargaOk=true;
	dibujar();
}

function cargarCerdo(evento){
	cerdo.cargaOk=true;
	dibujar();
}

function dibujar(){//aqui se examina si las imagenes fueron cargadas y se dibujan
	if(fondo.cargaOk){
		papel.drawImage(fondo.imagen,0,0);
	}
	if (vaca.cargaOk) {
		for (var i=0;i<10;i++){
			papel.drawImage(vaca.imagen,aleatorio(),aleatorio());
		}
		
	}
	if (pollo.cargaOk) {
		for(var i=0;i<5;i++){
			papel.drawImage(pollo.imagen,aleatorio(),aleatorio());
		}
		
	}
	if (cerdo.cargaOk){
		for (var i=0;i<6;i++){
			papel.drawImage(cerdo.imagen,aleatorio(),aleatorio());
		}
		
	}
}



