(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const u=[{nombre:"palo",matriz:[[[1,0],[1,0],[1,0],[1,0]],[[1,1,1,1],[0,0,0,0]],[[1,0],[1,0],[1,0],[1,0]],[[1,1,1,1],[0,0,0,0]]],color:"cyan",nombre:"palo"},{nombre:"ele",matriz:[[[1,0],[1,0],[1,1]],[[1,1,1],[1,0,0]],[[1,1],[0,1],[0,1]],[[0,0,1],[1,1,1]]],color:"orange",nombre:"ele"},{nombre:"eleInvertida",matriz:[[[0,1],[0,1],[1,1]],[[1,0,0],[1,1,1]],[[1,1],[1,0],[1,0]],[[1,1,1],[0,0,1]]],color:"blue",nombre:"eleInvertida"},{nombre:"zeta",matriz:[[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]],[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]]],color:"red",nombre:"zeta"},{nombre:"zetaInvertida",matriz:[[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]],[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]]],color:"green",nombre:"zetaInvertida"},{nombre:"te",matriz:[[[1,1,1],[0,1,0]],[[0,1],[1,1],[0,1]],[[0,1,0],[1,1,1]],[[1,0],[1,1],[1,0]]],color:"purple",nombre:"te"},{nombre:"cuadrado",matriz:[[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]]],color:"yellow",nombre:"cuadrado"}];function z(t){return t==""?null:(t=t.trim(),t=t.replace(" ","_"),t=t.toUpperCase(),t)}class y{constructor(a,n=0,s=0,i){this.modelo=a,this.x=n,this.y=s,this.angulo=i,this.altura=u[this.modelo].matriz[i].length,this.longitud=u[this.modelo].matriz[i][0].length,this.matriz=u[this.modelo].matriz[i]}girar(){this.angulo>=3?this.angulo=0:this.angulo=this.angulo+1,this.altura=u[this.modelo].matriz[this.angulo].length,this.longitud=u[this.modelo].matriz[this.angulo][0].length,this.matriz=u[this.modelo].matriz[this.angulo]}}const v={template:`
    <div id="info" class="">
				//<div class="d-none" id="ranking" class="m-5 p-5 bg-dark">
					
				</div>
                <div>
                
                </div>
				<div id="partidas" class="m-5 p-5 bg-dark text-light ">
                <theader>
                <tr>
                    <td></td>
                    <td >Nick <i class="bi bi-arrow-up-square" id="nick-header"></i></td>
                    <td>Puntuación <i class="bi bi-arrow-up-square" id="puntos-header"></i></td>
                    <td>Fecha <i class="bi bi-arrow-up-square" id="fecha-header"></i></td>
                </tr>
            </theader>
            <h2 class="text-center text-light">Partidas</h2>
        <div class="input-group mb-3">
            <input
                type="text"
                class="form-control"
                placeholder="Buscador"
                aria-label="Buscador"
                aria-describedby="button-addon2"
                id="input-addon2"
            />
            <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
            >
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
                <div id="partidas2">
                
                </div>
				</div>
                <div class="container align-items-center pb-5">
                <button class="btn btn-success fs-1 mt-5" id="botonJugar">JUGAR</button>
                </div>
                
                

			</div>
    `,script:(t=null)=>{t||(t={avatar:"https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg",nick:"MANUEL",puntos:100,fecha:"21 MAYO 2023"});const a=[{avatar:"https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg",nick:"Baki",puntos:"100",fecha:"02 10 2023"},{avatar:"https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg",nick:"Gojo",puntos:"999",fecha:"01 12 2023"},{avatar:"https://www.svgrepo.com/show/384671/account-avatar-profile-user-14.svg",nick:"Oliva",puntos:"100",fecha:"05 11 2023"}];function n(r){let l=`
        <table class="table table-dark">
            
            <tbody>
            `;r.forEach(c=>{l+=`<tr>
                    <td><img src="${c.avatar}" width="30px"/></td>
                    <td>${c.nick}</td>
                    <td>${c.puntos}</td>
                    <td>${c.fecha}</td>
                </tr>
                `}),l+=`         
            </tbody>
            <tfoot></tfoot>
            </table>
            `,document.querySelector("#partidas2").innerHTML=l}function s(){let r=" ";document.querySelector("#ranking").innerHTML=r}function i(r){console.log("Guardando partida"),a.push(r),console.log(r),console.log(a)}function o(r){confirm("¿Quieres guardar la partida?")==!0&&i(t),n(r)}console.log(s()),console.log(o(a)),document.querySelector("#botonJugar").addEventListener("click",()=>{document.querySelector("body").innerHTML=g.template,g.script()});const d=r=>(r=r.toLowerCase(),a.filter(l=>l.nick.toLowerCase().includes(r)));document.querySelector("#button-addon2").addEventListener("click",()=>{const l=document.querySelector("#input-addon2").value,c=d(l);console.log(c),n(c)});function m(r,l){if(!["nick","puntos","fecha"].includes(r)||l!=="up"&&l!=="down"){console.error("Parámetros no válidos");return}a.sort(function(f,b){return l==="up"?f[r]>b[r]?1:-1:f[r]<b[r]?1:-1}),n(a);const c=document.querySelector(`#icona-${r}`);l==="up"?c.className="bi bi-arrow-up-square":c.className="bi bi-arrow-down-square"}document.querySelector("#nick-header").addEventListener("click",function(){m("nick","up")}),document.querySelector("#puntos-header").addEventListener("click",function(){m("puntos","up")}),document.querySelector("#fecha-header").addEventListener("click",function(){m("fecha","up")})}},e={matriz:[[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],pintaPanel:()=>{let t=document.querySelector("#panel"),a="";t.innerHTML="";for(let n=0;n<e.matriz.length;n++){a+='<div class="d-flex">';for(let s=0;s<e.matriz[n].length;s++)e.matriz[n][s]=="1"?a+=`<div class="p-1 border bg-danger">${e.matriz[n][s]}</div>`:a+=`<div class="p-1 border">${e.matriz[n][s]}</div>`;a+="</div>"}t.innerHTML+=a},crearNuevaPieza:()=>{let t=Math.floor(Math.random()*u.length),a=Math.floor(Math.random()*(11-u[t].matriz[0].length));const n=new y(t,a,0,0);return console.log("La pieza es:",n),n},nuevaPieza:null,insertarPieza:()=>{for(let t=0;t<e.nuevaPieza.altura;t++)for(let a=0;a<e.nuevaPieza.longitud;a++){const n=e.nuevaPieza.matriz[t][a];n&&(e.matriz[t+e.nuevaPieza.y][a+e.nuevaPieza.x]=n)}console.log(e.matriz)},borrarPieza:()=>{for(let t=0;t<e.nuevaPieza.altura;t++)for(let a=0;a<e.nuevaPieza.longitud;a++){const n=e.nuevaPieza.matriz[t][a];n&&(console.log("elemento: ",n),e.matriz[t+e.nuevaPieza.y][a+e.nuevaPieza.x]=0)}e.pintaPanel()},controlTeclas:()=>{document.addEventListener("keydown",function(t){switch(t.key){case"ArrowUp":e.girar();break;case"ArrowDown":e.bajar();break;case"ArrowLeft":e.moverIzq();break;case"ArrowRight":e.moverDra();break}})},girar(){e.puntuacion=e.puntuacion+20,this.borrarPieza(),e.nuevaPieza.girar(),console.log("angulo: ",e.nuevaPieza.angulo),console.log("pieza: ",e.nuevaPieza.matriz);for(let t=0;t<e.nuevaPieza.altura;t++)for(let a=0;a<e.nuevaPieza.longitud;a++){const n=e.nuevaPieza.matriz[t][a];n&&(e.matriz[t+e.nuevaPieza.y][a+e.nuevaPieza.x]=n)}e.sumaPuntuacion(20),e.pintaPanel()},moverIzq(){event.preventDefault(),e.puntuacion=e.puntuacion+10;for(let t=0;t<e.nuevaPieza.altura;t++)for(let a=0;a<e.nuevaPieza.longitud;a++){const n=e.nuevaPieza.matriz[t][a];if(n){if(e.matriz[t+e.nuevaPieza.y][a+e.nuevaPieza.x-1]===1)return;e.matriz[t+e.nuevaPieza.y][a+e.nuevaPieza.x]=0,e.matriz[t+e.nuevaPieza.y][a+e.nuevaPieza.x-1]=n}}e.nuevaPieza.x-=1,e.sumaPuntuacion(10),e.borrarPieza(),e.insertarPieza(),e.pintaPanel()},moverDra(){event.preventDefault(),e.puntuacion=e.puntuacion+10;for(let t=0;t<e.nuevaPieza.altura;t++)if(e.matriz[e.nuevaPieza.y+t][e.nuevaPieza.x+e.nuevaPieza.longitud]===1)return;e.borrarPieza(),e.nuevaPieza.x+=1,e.sumaPuntuacion(10),e.insertarPieza(),e.pintaPanel()},bajar(){const t=document.querySelector("#insertaNick"),a=document.querySelector("#juegoPantalla");e.puntuacion+=10;for(let n=0;n<e.nuevaPieza.longitud;n++)if(e.matriz[e.nuevaPieza.y+e.nuevaPieza.altura][e.nuevaPieza.x+n]===1){console.log("llegamos al final"),a.classList.remove("d-flex"),a.classList.add("d-none"),t.classList.remove("d-none"),t.classList.add("d-flex"),clearInterval(e.intervalID);return}e.borrarPieza(),e.nuevaPieza.y+=1,e.sumaPuntuacion(10),e.insertarPieza(),e.pintaPanel()},puntuacion:0,sumaPuntuacion(t){this.puntuacion+=t,document.querySelector("#juegoPuntos").innerHTML=this.puntuacion},iniciarMovimiento(){this.intervalID=setInterval(()=>{this.bajar()},1e3)},guardarPartida:t=>{let a=z(t);var n=new Date;let s=n.getFullYear(),i=n.getMonth()+1,o=n.getDate();i=i<10?"0"+i:i,o=o<10?"0"+o:o;let d=o+" "+i+" "+s;const m={avatar:"https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg",nick:a,puntos:e.puntuacion,fecha:d};document.querySelector("body").innerHTML=v.template,v.script(m)}},P={script:()=>{e.nuevaPieza=e.crearNuevaPieza(),e.insertarPieza(e.nuevaPieza),e.pintaPanel(),e.iniciarMovimiento()}},g={template:`
    <div id="juego" class="text-light">
        <div id="juegoPantalla" class="d-flex row">
            <!-- Panel izquierda -->
            <div class="col-4 d-flex flex-column justify-content-end align-items-center p-5">
                <h4>Nivel: <span>2</span></h4>
                <h4>Tiempo: <span>5:22</span></h4>
                <h4>Lineas: <span>2</span></h4>
                <h4>Puntos: <span id="juegoPuntos">0</span></h4>
            </div>
            <!-- Panel central -->
            <div class="col-4 d-flex justify-content-center">
                <div id="panel" class="p-5"></div>
            </div>
            <!-- Panel derecha -->
            <div class="col-4 d-flex flex-column justify-content-start align-items-center p-5">
                <div id="piezaSiguiente">
                    <h4>Pieza siguiente:</h4>
                </div>
                <hr />
                <div id="piezaGuardada">
                    <h4>Pieza guardada:</h4>
                    <div class="piezaGuardada"></div>
                </div>
            </div>
        </div>
        <div id="insertaNick" class=" mt-5 border bg-dark d-none align-items-center justify-content-center container" style="max-width: 200px;">
    <div class="text-light">
        <label for="nick" class="mr-2 mb-3">Nick:</label>
        <input id="nickUser" type="text" class="mt-3 form-control w-100" placeholder="Pon tu nick">
        <button id="btnNick" class="m-5 mb-3 btn btn-light" type="submit">Ingresar</button>
       
    </div>
    
</div>
</div>
        <button class="btn btn-success fs-1 mt-5" id="botonHome">HOME</button>
        <button class="btn btn-success fs-1 mt-5" id="botonJugar">JUGAR</button>
    </div>
    `,script:()=>{document.querySelector("#botonHome").addEventListener("click",()=>{document.querySelector("body").innerHTML=p.template,p.script()}),document.querySelector("#juegoPuntos").innerHTML=e.puntuacion,P.script(),e.controlTeclas(),document.querySelector("#btnNick").addEventListener("click",()=>{const t=document.querySelector("#nickUser").value;console.log(t),e.guardarPartida(t)})}},p={template:`
    <body class="text-light">
		<header class="d-flex align-items-center justify-content-center">
			<img src="logo.png" alt="logo" width="200" class="mt-5" />
		</header>
		<main class="container mt-5 bg-opacity-50 bg-dark p-2">
			<!-- Pantalla de introducción -->
      <div id="intro" class="text-center p-5">
        <p>Tetris és un videojoc de tipus trencaclosques. Fou inventat per l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984,[1] mentre treballava a l'Acadèmia de Ciències de Moscou.</p>
        <h2>Instruccions:</h2>
        <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>
        <p>Amb la fletxa avall pots girar la peça</p>
        <p>'<strong>Ñ</strong>' per canviar la peça actual per la peça que està a punt de sortir (que pots veure a la columna de la dreta)</p>
        <p>Al final de la partida podràs desar la teva puntuació, i verue el ranking de jugadors</p>
        <button class="btn btn-success fs-1 mt-5" id="botonJugar">JUGAR</button>
        <button class="btn btn-success fs-1 mt-5" id="botonRanking">RANKING</button>
				<hr>
      </div>
			<!-- Pantalla tablas y ranking -->
			
		
		</main>
		<script src="main.js"><\/script>
	</body>
    `,script:()=>{document.querySelector("#botonRanking").addEventListener("click",()=>{console.log("hola"),document.querySelector("body").innerHTML=v.template,v.script()}),document.querySelector("#botonJugar").addEventListener("click",()=>{document.querySelector("body").innerHTML=g.template,g.script()})}},h={template:`
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Prototipo</title>
		<!-- bootstrap -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
			crossorigin="anonymous"
		/>
		<!-- fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=VT323&display=swap"
			rel="stylesheet"
		/>

		<!-- icons -->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
		/>

		<style>
			body {
				background-repeat: no-repeat;
				background-size: cover;
				background-image: url("fondo.jpg");
				font-family: "VT323", monospace;
				font-size: 25px;
			}
		</style>
		<link rel="stylesheet" href="style.css" />
    `,script:()=>{document.querySelector("head").innerHTML=h.template,document.querySelector("body").innerHTML=p.template,p.script()}};console.log("hola");document.querySelector("head").innerHTML=h.template;document.querySelector("body").innerHTML=p.template;p.script();h.script();
