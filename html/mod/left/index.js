var left_menu = {
	bar: document.getElementById('left_bar'),
	content: document.getElementById('left_content'),
	mask: document.getElementById('mask'),
	show() {
		this.content.style.transform = 'translateX(0%)';
		this.mask.style.opacity = 1;
		mask.style.display = 'block';
	},
	hide() {
		this.content.style.transform = 'translateX(-100%)';
		this.mask.style.opacity = 0;
		setTimeout(() => this.mask.style.display = 'none', 200);
	},
	init() {
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

		this.bar.appendChild(canvasElement);
		this.bar.addEventListener('click', () => this.show());
		this.mask.style.display = 'none';
		this.mask.addEventListener('click', () => this.hide())
	}
}
left_menu.init()