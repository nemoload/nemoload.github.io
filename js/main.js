var canvas = document.querySelector('canvas');

var height = canvas.height,
	width = canvas.width;
var rotationAngle = 0;


var wheel = new Image();
var arrow = new Image(); // Create new img element
wheel.addEventListener("load", function() {
	arrow.addEventListener('load',function(){
		MainDrawFunction();
	},false);
}, false);
wheel.src = 'img/wheel.png'; // Set source path
arrow.src = 'img/arrow.png';

var button = document.querySelector('button')
button.addEventListener('click',function(){
	var angle = Math.round(Math.asin(Math.sin(rotationAngle))*(180/Math.PI));
	switch (angle){
		case 0:
			alert("ASME Access Engineering");
			break;
		case 72:
			alert("E-Mentoring Program");
			break;
		case 36:
			alert("ASME SmartBrief");
			break;
		case -36:
			alert("Mechanical Engineering Magazine");
			break;
		case -72:
			alert("More!");
			break;
	}

},false);

function MainDrawFunction()
{
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');

		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, width, height);



		ctx.drawImage(wheel,0,0);
		ctx.translate(width/2,height/2);
		ctx.rotate(rotationAngle);

		ctx.drawImage(arrow,-30,-20);
		/*ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(100, 0);
		ctx.stroke();
		*ctx.closePath();*/

		rotationAngle += (72*(Math.PI/180));

		//window.requestAnimationFrame(MainDrawFunction);
	} else {
		alert("Canvas isn't supported");
	}
}
function displayTheBenefit()
{

}
window.setInterval(MainDrawFunction,500);
//window.requestAnimationFrame(MainDrawFunction);
//MainDrawFunction();