var vp=document.getElementById("laVilla");
var papel=vp.getContext("2d");
var cantidadAnimales=aleatorio(1,10);
var xcerdito;
var ycerdito;



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

var cerdito = {
	url: "cerdo.png",
	cargaOk: false,
	x:0,
	y:0
}

var tecla = {
	LEFT: 37,
	RIGHT: 39,
	UP: 38,
	DOWN: 40
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

cerdito.imagen=new Image();
cerdito.imagen.src=cerdito.url;
cerdito.imagen.addEventListener("load",cargaCerdito);



vp.addEventListener("mouseup",ponerCerditoMouse);




//creacion de las funciones-----------------------------------------------------------------------------

function aleatorio(min, max){//da un numero aleatorio entre un min y un max
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

function cargaCerdito(){
	
cerdito.cargaOk=true;

	
}

function dibujar(){//aqui se examina si las imagenes fueron cargadas y se dibujan

	

	if(fondo.cargaOk){
		papel.drawImage(fondo.imagen,0,0);
		
	}
	if (vaca.cargaOk) {

		
		for (var i=0;i<cantidadAnimales;i++){
			var x = aleatorio(0,5);
   		    var y = aleatorio(0,5);
   		    var x= x*80;
   		    var y= y*80;
			papel.drawImage(vaca.imagen,x,y);
		}
		
	}
	if (pollo.cargaOk) {
		
		for(var i=0;i<cantidadAnimales;i++){
			var x = aleatorio(0,4);
   		    var y = aleatorio(0,4);
   		    var x= x*80;
   		    var y= y*80;
			papel.drawImage(pollo.imagen,x,y);
		}
		
	}
	if (cerdo.cargaOk){
		
		for (var i=0;i<cantidadAnimales;i++){
			var x = aleatorio(0,4.5);
   		    var y = aleatorio(0,4.5);
   		    var x= x*80;
   		    var y= y*80;			
			papel.drawImage(cerdo.imagen,x,y);
		}
		
	}
	
}

function ponerCerditoMouse(evento){
    cerdito.x=evento.offsetX-30;
    cerdito.y=evento.offsetY-30; 
    

	
}
dibujarCerdito();
function dibujarCerdito(){
	if(cerdito.cargaOk){
    	   papel.drawImage(cerdito.imagen,cerdito.x,cerdito.y);
       
       
		   console.log(cerdito);	
     
	}
}



window.addEventListener("keyup",moverCerdito);
function moverCerdito(evento){
	if (evento.keyCode==tecla.LEFT  && cerdito.cargaOk) {
		
		cerdito.x=cerdito.x-10;
		
		
		

	}
	if (evento.keyCode==tecla.RIGHT) {
	    cerdito.x=cerdito.x+10;

		
	}
	if (evento.keyCode==tecla.UP) {
			cerdito.y=cerdito.y-10;
		
	}
	if (evento.keyCode==tecla.DOWN) {
			cerdito.y=cerdito.y+10;
	
	}
	dibujar();
	dibujarCerdito();
}


//--------------------------------codigo para mover el cerdo con las flechas------
















