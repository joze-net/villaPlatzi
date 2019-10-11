var vp=document.getElementById("laVilla");
var papel=vp.getContext("2d");
var cantidadAnimales=aleatorio(1,10);




//creacion de variables literales -----------------------------------------------------------
var fondo = {
	url: "tile.png",
	cargaOk: false
}

var vaca = {
	url: "vaca.png",
	cargaOk: false,

	
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

//----------variables para cpntrolar la posicion de cada animal----agrego variables x y a cada animal siendo un array con la cantidad de animales que se generen

vaca.x=new Array(cantidadAnimales);
vaca.y=new Array(cantidadAnimales);
pollo.x=new Array(cantidadAnimales);
pollo.y=new Array(cantidadAnimales);
cerdo.x=new Array(cantidadAnimales);
cerdo.y=new Array(cantidadAnimales);

for(var i=0;i<vaca.x.length;i++){//-----relleno los array de cada animal
	vaca.x[i]=((aleatorio(0,5))*80);
    vaca.y[i]=((aleatorio(0,5))*80);
    pollo.x[i]=((aleatorio(0,5))*80);
    pollo.y[i]=((aleatorio(0,5))*80);
    cerdo.x[i]=((aleatorio(0,5))*80);
    cerdo.y[i]=((aleatorio(0,5))*80);
	
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


//--a la escucha para eventos de mouse

vp.addEventListener("mousedown",coordenadaCerditoMouse);

window.addEventListener("keydown",moverCerdito);//para el evento de cuando se pulsa la tecla




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
			
			papel.drawImage(vaca.imagen,vaca.x[i],vaca.y[i]);

		}
		
	}
	if (pollo.cargaOk) {
		
		for(var i=0;i<cantidadAnimales;i++){
			
			papel.drawImage(pollo.imagen,pollo.x[i],pollo.y[i]);
		}
		
	}
	if (cerdo.cargaOk){
		

		for (var i=0;i<cantidadAnimales;i++){
						
			papel.drawImage(cerdo.imagen,cerdo.x[i],cerdo.y[i]);
		}
		
	}




	
}


function coordenadaCerditoMouse(evento){//estea funcion es para el evento mousedown para cuando sea pulsado el mouse me genere las coordenadas de posicion de cerdito`
	
	cerdito.x=evento.offsetX-30;
    cerdito.y=evento.offsetY-30;
    
}

function dibujarCerdito(){//funcion independiente para dibujar el cerdito que se va a mover
	if(cerdito.cargaOk){
    	   papel.drawImage(cerdito.imagen,cerdito.x,cerdito.y);
       
       
		  
     
	}
}



function moverCerdito(evento){//funcion para el movimiento del cerdito con las flechas

	
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
	cerdito.cargaOk=true;

}


















