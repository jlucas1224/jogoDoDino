const dino = document.getElementById('dino')
const cacto = document.getElementById('cacto')
var pontos = 0;
var pontosInt = 0;
function update(progress) {
  // Update the state of the world for the elapsed time since last render
  pontos+=0.1;
  pontosInt = parseInt(pontos)
  document.getElementById('message').innerHTML = "Pontos: "+pontosInt;

  function jump() {
	if(dino.classList != "jump"){
		dino.classList.remove("correr")
		dino.classList.add('jump');
		
		setTimeout(function(){
  		dino.classList.remove("jump")
  		dino.classList.add('correr');
  		}, 300)
	}
}

let isAlive = setInterval(function(){
	//Posição Y do dino
	let dinoTop = parseInt(
		window.getComputedStyle(dino).getPropertyValue("top")
		);
	//Posição X do cacto
	let cactoLeft = parseInt(
		window.getComputedStyle(cacto).getPropertyValue("left")
		);

	if(cactoLeft <40 && cactoLeft>16 && dinoTop>=120){
		alert("Fim de jogo!! Você fez "+pontosInt+" pontos")
		pontos=0;
		document.getElementById("cacto").style.animation = "none";
		setTimeout(function(){
  		document.getElementById("cacto").style.animation = "block 1s infinite linear";
  		}, 1)
}

})

if(cacto.style.left<0){
	cacto.style.display = "none"
}

document.addEventListener('keyup', function (event){
  jump();
  
});
}

function draw() {
  // Draw the state of the world
}

function loop(timestamp) {
  var progress = timestamp - lastRender

  update(progress)
  draw()

  lastRender = timestamp
  window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)

