(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const p=[{nombre:"palo",matriz:[[[2],[2],[2],[2]],[[2,2,2,2]],[[2],[2],[2],[2]],[[2,2,2,2]]],color:"bg-primary bg-gradient",nombre:"palo"},{nombre:"ele",matriz:[[[3,0],[3,0],[3,3]],[[3,3,3],[3,0,0]],[[3,3],[0,3],[0,3]],[[0,0,3],[3,3,3]]],color:"orange",nombre:"ele"},{nombre:"eleInvertida",matriz:[[[0,4],[0,4],[4,4]],[[4,0,0],[4,4,4]],[[4,4],[4,0],[4,0]],[[4,4,4],[0,0,4]]],color:"blue",nombre:"eleInvertida"},{nombre:"zeta",matriz:[[[5,5,0],[0,5,5]],[[0,5],[5,5],[5,0]],[[0,5,5],[5,5,0]],[[5,0],[5,5],[0,5]]],color:"red",nombre:"zeta"},{nombre:"zetaInvertida",matriz:[[[0,5,5],[5,5,0]],[[5,0],[5,5],[0,5]],[[5,5,0],[0,5,5]],[[0,5],[5,5],[5,0]]],color:"green",nombre:"zetaInvertida"},{nombre:"te",matriz:[[[6,6,6],[0,6,0]],[[0,6],[6,6],[0,6]],[[0,6,0],[6,6,6]],[[6,0],[6,6],[6,0]]],color:"purple",nombre:"te"},{nombre:"cuadrado",matriz:[[[7,7],[7,7]],[[7,7],[7,7]],[[7,7],[7,7]],[[7,7],[7,7]]],color:"yellow",nombre:"cuadrado"}];function h(t){return t==""?null:(t=t.trim(),t=t.replace(" ","_"),t=t.toUpperCase(),t)}class v{constructor(a,i=0,r=0,n){this.modelo=a,this.x=i,this.y=r,this.angulo=n,this.altura=p[this.modelo].matriz[n].length,this.longitud=p[this.modelo].matriz[n][0].length,this.matriz=p[this.modelo].matriz[n]}girar(){this.angulo>=3?this.angulo=0:this.angulo=this.angulo+1,this.altura=p[this.modelo].matriz[this.angulo].length,this.longitud=p[this.modelo].matriz[this.angulo][0].length,this.matriz=p[this.modelo].matriz[this.angulo]}}const P={script:()=>{e.listaPiezas=[],e.limpiarMatriz(),e.finalizarPartida();for(let t=0;t<4;t++)e.nuevaPieza=e.crearNuevaPieza(),e.listaPiezas.push(e.nuevaPieza);e.puntuacion=0,e.minutos=0,e.segundos=0,e.nivel=1,e.lineasEliminadas=0,e.insertarPieza(e.listaPiezas[0]),e.pintaPanel(),e.iniciarMovimiento(),e.iniciarTiempo()}},s={template:`
    <div id="info" class="">
				<div id="ranking" class="m-5 p-5 bg-dark">
                <h2 class="text-center text-light">Ranking</h2>
                <div id="tablaRanking"></div>
                
				</div>
                <div>
                
                </div>
				<div id="partidas" class="m-5 p-5 bg-dark text-light ">
                <thead>
                <tr>
                    <td></td>
                    <td >Nick <i class="bi bi-arrow-up-square" id="nick-header"></i></td>
                    <td>Puntuación <i class="bi bi-arrow-up-square" id="puntos-header"></i></td>
                    <td>Fecha <i class="bi bi-arrow-up-square" id="fecha-header"></i></td>
                </tr>
            </thead>
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
                <button class="btn btn-success fs-1 mt-5" id="botonHome">HOME</button>
                <button class="btn btn-success fs-1 mt-5" id="botonJugar">JUGAR</button>
                </div>
                
                

			</div>
    `,script:()=>{document.querySelector("#botonHome").addEventListener("click",()=>{document.querySelector("body").innerHTML=m.template,m.script()}),document.querySelector("#botonJugar").addEventListener("click",function(){document.querySelector("body").innerHTML=b.template,b.script()}),s.pintaTabla(),s.pintaRanking(),["nick","puntos","fecha"].forEach(function(t){document.querySelector(`#${t}-header`).addEventListener("click",function(){console.log(`Clic en: ${t}`);const a=s.estadoOrden[t]==="up"?"down":"up";s.orden(t,a),s.estadoOrden[t]=a;const i=document.querySelector(`#${t}-header`);i.className=a==="up"?"bi bi-arrow-up-square":"bi bi-arrow-down-square"})})},partides:[{avatar:"https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg",nick:"Baki",puntos:"100",fecha:"02 10 2023"},{avatar:"https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg",nick:"Gojo",puntos:"999",fecha:"01 12 2023"},{avatar:"https://www.svgrepo.com/show/384671/account-avatar-profile-user-14.svg",nick:"Oliva",puntos:"100",fecha:"05 11 2023"}],pintaTabla:()=>{let t=`
        <table class="table table-dark">
            
            <tbody>
            `;console.log("ranking partides",s.partides),console.log("puntuacion"),s.partides.forEach(a=>{t+=`<tr>
                    <td><img src="${a.avatar}" width="30px"/></td>
                    <td>${a.nick}</td>
                    <td>${a.puntos}</td>
                    <td>${a.fecha}</td>
                </tr>
                `}),t+=`         
            </tbody>
            <tfoot></tfoot>
            </table>
            `,document.querySelector("#partidas2").innerHTML=t,s.buscadorPartidas()},pintaRanking:()=>{s.partides.sort((a,i)=>i.puntos-a.puntos);let t=`
        <table class="table table-dark">
            
            <tbody>
            `;console.log("ranking partides",s.partides),console.log("puntuacion"),s.partides.forEach(a=>{t+=`<tr>
                    <td><img src="${a.avatar}" width="30px"/></td>
                    <td>${a.nick}</td>
                    <td>${a.puntos}</td>
                    <td>${a.fecha}</td>
                </tr>
                `}),t+=`         
            </tbody>
            <tfoot></tfoot>
            </table>
            `,document.querySelector("#tablaRanking").innerHTML=t},insertaNuevaPartida:t=>{console.log("Guardando partida"),s.partides.push(t),console.log(t),console.log(s.partides)},pintaDatosPartida:t=>{confirm("¿Quieres guardar la partida?")==!0?(s.insertaNuevaPartida(t),s.pintaTabla(s.partides),s.pintaRanking(s.partides)):s.pintaTabla(s.partides)},buscador:t=>(t=t.toLowerCase(),s.partides.filter(a=>a.nick.toLowerCase().includes(t))),buscadorPartidas:()=>{document.querySelector("#button-addon2").addEventListener("click",()=>{const a=document.querySelector("#input-addon2").value,i=s.buscador(a);console.log(i),s.pintaTabla(i)})},orden:function(t,a){const i=`${t}-header`,r=document.querySelector(`#${i}`);r?a==="up"?r.className="bi bi-arrow-up-square":r.className="bi bi-arrow-down-square":console.error(`No se encontró el ícono para el campo: ${t}`),this.partides.sort((n,o)=>typeof n[t]=="number"?a==="up"?n[t]-o[t]:o[t]-n[t]:a==="up"?n[t].localeCompare(o[t]):o[t].localeCompare(n[t])),this.pintaTabla()},estadoOrden:{nick:"up",puntos:"up",fecha:"up"},ordenBoton:()=>{document.querySelector("#nick-header").addEventListener("click",function(){s.estadoOrden.nick==="up"?(s.orden("nick","up"),s.estadoOrden.nick="down"):(s.orden("nick","down"),s.estadoOrden.nick="up")})},calculaDia:()=>{var t=new Date;let a=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return i=i<10?"0"+i:i,r=r<10?"0"+r:r,r+" "+i+" "+a}},e={matriz:[[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],matrizPiezasGuardadas:[[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,1,1,1]],pintaPanel:()=>{let t=document.querySelector("#panel"),a="";t.innerHTML="";for(let l=0;l<e.matriz.length;l++){a+='<div class="d-flex">';for(let d=0;d<e.matriz[l].length;d++){let u="";e.matriz[l][d]==1?u="bg-transparent":e.matriz[l][d]==2?u="border bg-primary bg-gradient":e.matriz[l][d]==3?u="border bg-secondary bg-gradient":e.matriz[l][d]==4?u="border bg-success bg-gradient":e.matriz[l][d]==5?u="border bg-danger bg-gradient":e.matriz[l][d]==6?u="border bg-warning bg-gradient":e.matriz[l][d]==7?u="border bg-info bg-gradient":e.matriz[l][d]==0&&(u="border bg-dark"),a+=`<div class="p-3 ${u}"></div>`}a+="</div>"}t.innerHTML=a;let i=document.querySelector("#piezaGuardada0"),r=document.querySelector("#piezaGuardada1"),n=document.querySelector("#piezaGuardada2"),o=["",i,r,n],c=["","","",""];for(let l=1;l<e.listaPiezas.length;l++){c[l]+="<div class='mb-3'>";for(let d=0;d<e.listaPiezas[l].altura;d++){c[l]+="<div class='d-flex'>";for(let u=0;u<e.listaPiezas[l].longitud;u++){let g="",f=e.listaPiezas[l].matriz[d][u];f==2?g=" bg-primary bg-gradient":f==3?g=" bg-secondary bg-gradient":f==4?g=" bg-success bg-gradient":f==5?g=" bg-danger bg-gradient":f==6?g=" bg-warning bg-gradient":f==7&&(g=" bg-info bg-gradient"),c[l]+=`<div class=" border p-3  ${g}"></div>`}c[l]+="</div>"}c[l]+="</div>",o[l].innerHTML=c[l]}},crearNuevaPieza:()=>{let t=Math.floor(Math.random()*p.length),a=Math.floor(Math.random()*(10-p[t].matriz[0].length)+1);return new v(t,a,0,0)},nuevaPieza:null,listaPiezas:[],insertarPiezasArray:()=>{e.listaPiezas.length==4&&e.listaPiezas.shift();let t=e.crearNuevaPieza();e.listaPiezas.push(t)},insertarPieza:()=>{for(let t=0;t<e.listaPiezas[0].altura;t++)for(let a=0;a<e.listaPiezas[0].longitud;a++){const i=e.listaPiezas[0].matriz[t][a];i&&(e.matriz[t+e.listaPiezas[0].y][a+e.listaPiezas[0].x]=i)}},borrarPieza:()=>{for(let t=0;t<e.listaPiezas[0].altura;t++)for(let a=0;a<e.listaPiezas[0].longitud;a++)e.listaPiezas[0].matriz[t][a]&&(e.matriz[t+e.listaPiezas[0].y][a+e.listaPiezas[0].x]=0);e.pintaPanel()},controlTeclas:()=>{document.addEventListener("keydown",function(t){switch(t.key){case"ArrowUp":e.girar();break;case"ArrowDown":e.bajar();break;case"ArrowLeft":e.moverIzq();break;case"ArrowRight":e.moverDra();break;case"c":e.cambiarPieza();break}})},girar(){this.borrarPieza(),e.listaPiezas[0].girar();let t=!0;for(let a=0;a<e.listaPiezas[0].altura;a++){for(let i=0;i<e.listaPiezas[0].longitud;i++)if(e.listaPiezas[0].matriz[a][i]){const n=i+e.listaPiezas[0].x,o=a+e.listaPiezas[0].y;if(n<0||n>=e.matriz[0].length||o>=e.matriz.length||e.matriz[o][n]===1){t=!1;break}}if(!t)break}t||(e.listaPiezas[0].girar(),e.listaPiezas[0].girar(),e.listaPiezas[0].girar());for(let a=0;a<e.listaPiezas[0].altura;a++)for(let i=0;i<e.listaPiezas[0].longitud;i++){const r=e.listaPiezas[0].matriz[a][i];r&&(e.matriz[a+e.listaPiezas[0].y][i+e.listaPiezas[0].x]=r)}e.sumaPuntuacion(20),e.pintaPanel()},moverIzq(){event.preventDefault(),e.borrarPieza();let t=!1;for(let a=0;a<e.listaPiezas[0].altura;a++){for(let i=0;i<e.listaPiezas[0].longitud;i++)if(e.listaPiezas[0].matriz[a][i]!==0){const r=e.listaPiezas[0].x+i-1;if(r<0||e.matriz[e.listaPiezas[0].y+a][r]!==0){t=!0;break}}if(t)break}t||(e.listaPiezas[0].x-=1,e.sumaPuntuacion(10)),e.insertarPieza(),e.pintaPanel()},moverDra(){event.preventDefault(),e.borrarPieza();let t=!1;for(let a=0;a<e.listaPiezas[0].altura;a++){for(let i=0;i<e.listaPiezas[0].longitud;i++)if(e.listaPiezas[0].matriz[a][i]!==0){const r=e.listaPiezas[0].x+i+1;if(r>=e.matriz[0].length||e.matriz[e.listaPiezas[0].y+a][r]!==0){t=!0;break}}if(t)break}t||(e.listaPiezas[0].x+=1,e.sumaPuntuacion(10)),e.insertarPieza(),e.pintaPanel()},bajar(){e.borrarPieza();let t=e.listaPiezas[0].y+1,a=!1;for(let i=0;i<e.listaPiezas[0].altura;i++){for(let r=0;r<e.listaPiezas[0].longitud;r++)if(e.listaPiezas[0].matriz[i][r]!==0){const n=i+t;if(e.limpiarLineas(),n>=e.matriz.length||e.matriz[n][r+e.listaPiezas[0].x]!==0){a=!0;break}}if(a)break}if(a)e.insertarPieza(),e.insertarPiezasArray(),e.finalizarPartida(),e.sumaPuntuacion(50);else{for(let i=0;i<e.listaPiezas[0].altura;i++)for(let r=0;r<e.listaPiezas[0].longitud;r++)e.listaPiezas[0].matriz[i][r]!==0&&(e.matriz[i+t][r+e.listaPiezas[0].x]=e.listaPiezas[0].matriz[i][r]);e.listaPiezas[0].y=t,e.sumaPuntuacion(10)}e.pintaPanel()},puntuacion:0,sumaPuntuacion(t){e.subirNivel(),this.puntuacion+=t,document.querySelector("#juegoPuntos").innerHTML=this.puntuacion},iniciarMovimiento(){this.intervalID=setInterval(()=>{this.bajar()},1e3)},guardarPartida:t=>{let a=h(t);var i=new Date;let r=i.getFullYear(),n=i.getMonth()+1,o=i.getDate();n=n<10?"0"+n:n,o=o<10?"0"+o:o;let c=o+" "+n+" "+r;const l={avatar:"https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg",nick:a,puntos:e.puntuacion,fecha:c};document.querySelector("body").innerHTML=s.template,s.script(l)},lineasEliminadas:0,limpiarLineas(){let t=0;for(let a=1;a<e.matriz.length-1;a++){let i=0;for(let r=1;r<e.matriz[a].length-1;r++)e.matriz[a][r]!=0&&i++;i===e.matriz[a].length-2&&(e.matriz.splice(a,1),e.matriz.splice(1,0,[1,0,0,0,0,0,0,0,0,0,0,1]),t++,a--)}t>0&&(e.sumaPuntuacion(100*t),e.lineasEliminadas+=t,document.querySelector("#lineasSpan").innerHTML=e.lineasEliminadas,e.pintaPanel())},minutos:0,segundos:0,timer:0,tiempoID:null,iniciarTiempo:()=>{e.tiempoID=setInterval(()=>{e.contadorTiempo()},1e3)},contadorTiempo:()=>{e.segundos=e.segundos+1,e.segundos==60&&(e.segundos=0,e.minutos=e.minutos+1,e.minutos==999&&(e.minutos=0)),e.segundos<10?e.timer=e.minutos+":0"+e.segundos:e.timer=e.minutos+":"+e.segundos,document.querySelector("#juegoTimer").innerHTML=e.timer},nivel:1,subirNivel:()=>{let t=document.querySelector("#panel"),a="";if(e.puntuacion>=5e3*e.nivel){e.nivel=e.nivel+1,document.querySelector("#juegoNivel").innerHTML=e.nivel;for(let i=1;i<e.matriz.length-1;i++){a+='<div class="d-flex">';for(let r=1;r<e.matriz[i].length-1;r++)e.matriz[i][r]=0,a+='<div class="p-3"></div>';a+="</div>"}t.innerHTML=a}},finalizarPartida:()=>{console.log("hola desde finalizar partida");for(let t=0;t<1;t++)for(let a=0;a<e.matriz[t].length;a++)if(e.matriz[t][a]!=0&&e.matriz[t][a]!=1){let i=document.querySelector("#panel"),r="";for(let c=0;c<e.matriz.length-1;c++){r+='<div class="d-flex">';for(let l=0;l<e.matriz[c].length-1;l++)e.matriz[c][l]=0,r+='<div class="p-3"></div>';r+="</div>",i.innerHTML=r}e.borrarPieza();const n=document.querySelector("#panel"),o=document.querySelector("#insertaNick");n.classList.remove("d-flex"),n.classList.add("d-none"),o.classList.remove("d-none"),o.classList.add("d-flex"),clearInterval(e.intervalID),clearInterval(e.tiempoID)}},limpiarMatriz:()=>{for(let t=1;t<e.matriz.length-1;t++)for(let a=1;a<e.matriz[t].length-1;a++)e.matriz[t][a]=0},resetStatsInterval:()=>{e.puntuacion=0,e.minutos=0,e.segundos=0,e.nivel=1,e.lineasEliminadas=0},cambiarPieza(){e.listaPiezas[1].x=e.listaPiezas[0].x,e.listaPiezas[1].y=e.listaPiezas[0].y,e.listaPiezas[0]=e.listaPiezas[1],e.listaPiezas[1]=e.listaPiezas[0],e.borrarPieza(),e.pintaPanel()}},b={template:`
    <div id="juego" class="text-light">
        <div id="juegoPantalla" class="d-flex row">
            <!-- Panel izquierda -->
            <div class="col-4 d-flex flex-column justify-content-end align-items-center p-5">
                <h4>Nivel: <span id="juegoNivel">1</span></h4>
                <h4>Tiempo: <span id="juegoTimer">0:00</span></h4>
                <h4>Lineas: <span id="lineasSpan">0</span></h4>
                <h4>Puntos: <span id="juegoPuntos">0</span></h4>
            </div>
            <!-- Panel central -->
            <div class="col-4 d-flex justify-content-center">
                <div id="panel" class="p-5"></div>
                
                <div id="insertaNick" class="mt-5 border bg-dark d-none flex-column align-items-center justify-content-center container" style="max-width: 500px;">
    <div class="text-light text-center">
        <div><img src="../src/img/gameOverTetris.jpg" style="max-width:100%; height:auto;" alt="game over"></div>
        <label for="nickUser" class="mr-2 mb-3">Nick:</label>
        <input id="nickUser" type="text" class="mt-3 form-control w-100" placeholder="Pon tu nick">
        <button id="btnNick" class="mt-3 btn btn-light" type="submit">Ingresar</button>
    </div>
</div>
            </div>
            <!-- Panel derecha -->
            <div class="col-4 d-flex flex-column justify-content-start align-items-center p-5">
                <div id="piezaSiguiente">
                    <h4>Pieza siguiente:</h4>
                    <div id="piezaGuardada0">
                </div>
                <hr />
                <div id="piezaGuardada">
                    <h4>Pieza guardada:</h4>
                    <div id="piezaGuardada1"></div>
                    <div id="piezaGuardada2"></div>
                </div>
            </div>
        </div>
        
    
</div>

        <button class="btn btn-success fs-1 mt-5" id="botonHome">HOME</button>
        <button class="btn btn-success fs-1 mt-5" id="botonJugar">JUGAR</button>
    </div>
    `,script:()=>{document.querySelector("#botonHome").addEventListener("click",()=>{document.querySelector("body").innerHTML=m.template,m.script()}),document.querySelector("#juegoPuntos").innerHTML=e.puntuacion,P.script(),e.controlTeclas(),console.log(s.partides),document.querySelector("#btnNick").addEventListener("click",()=>{const t=document.querySelector("#nickUser").value;let a=s.calculaDia();console.log(t),document.querySelector("body").innerHTML=s.template,s.pintaDatosPartida({avatar:"https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg",nick:t,puntos:e.puntuacion,fecha:a}),e.finalizarPartida(),s.script()})}},m={template:`
    <body class="text-light">
		<header class="d-flex align-items-center justify-content-center">
			<img src="../src/img/logo.png" alt="logo" width="200" class="mt-5" />
		</header>
		<main class="container mt-5 bg-opacity-50 bg-dark p-2">
			<!-- Pantalla de introducción -->
      <div id="intro" class="text-center text-light p-5">
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
    `,script:()=>{document.querySelector("#botonRanking").addEventListener("click",()=>{console.log("hola"),document.querySelector("body").innerHTML=s.template,s.script()}),document.querySelector("#botonJugar").addEventListener("click",()=>{document.querySelector("body").innerHTML=b.template,b.script()})}},z={template:`
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
				background-image: url("../src/img/fondo.jpg");
				font-family: "VT323", monospace;
				font-size: 25px;
			}
		</style>
		<link rel="stylesheet" href="style.css" />
    `,script:()=>{document.querySelector("head").innerHTML=z.template,document.querySelector("body").innerHTML=m.template,m.script()}};console.log("hola");document.querySelector("head").innerHTML=z.template;document.querySelector("body").innerHTML=m.template;m.script();z.script();
