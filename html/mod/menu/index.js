(function() {
	let menu = document.getElementById('menu'), cursor = document.getElementsByClassName('ace_cursor')[0];
	var style = menu.style;
	function click() {
		let [x, y] = cursor.style.transform.replace(/.+\((.+)\)/, '$1').split(',');
		style.left = Math.min(parseInt(x), document.body.clientWidth - menu.children.length * 25) + 'px';
		style.top = Math.min(parseInt(y), document.body.clientHeight - 25) + 'px';
		style.display = 'block';
		// console.log(cursor.style.transform.replace(/.+\((.+)\)/, '$1'));
	}
	var timeout, interval;

	let edit = document.getElementById('editor');

	edit.addEventListener('touchstart', e => {
		style.display = 'none';
		clearInterval(interval);
		timeout = setTimeout(() => interval = setInterval(click, 100), 600);
	}, true);
	edit.addEventListener('touchend', e => {
		clearTimeout(timeout)
	}, true);
})()