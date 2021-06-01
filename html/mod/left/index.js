(function(){
var canvasElement = document.createElement('canvas');
canvasElement.width = 32;
canvasElement.height = 32;
var canvas = canvasElement.getContext('2d');
canvas.strokeStyle = "#2c2c2c";
canvas.strokeWidth = '5px';
for (var i = 1; i <= 3; i++) {
	canvas.moveTo(7, 8 * i)
	canvas.lineTo(25, 8 * i)
}
canvas.stroke();

let bar = document.getElementById('left_bar'),
	content = document.getElementById('left_content'),
	mask = document.getElementById('mask');
bar.appendChild(canvasElement);
bar.addEventListener('click', e => {
	content.style.transform = 'translateX(0%)';
	mask.style.opacity = 1;
	mask.style.display = 'block';
});
mask.addEventListener('click', e => {
	content.style.transform = 'translateX(-100%)';
	mask.style.opacity = 0;
	setTimeout(() => mask.style.display = 'none', 200);
})
})();
