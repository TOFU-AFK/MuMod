(function() {
	let menu = document.getElementById('menu'),
		cursor = document.getElementsByClassName('ace_cursor')[0];
	[...menu.children].forEach(e => {
		e.addEventListener('click', hide);
	})
	var style = menu.style;

	function click() {
		let [x, y] = cursor.style.transform.replace(/.+\((.+)\)/, '$1').split(',');
		style.left = Math.min(parseInt(x), document.body.clientWidth - menu.children.length * 25) + 'px';
		style.top = Math.min(parseInt(y), document.body.clientHeight - 25) + 'px';
		style.display = 'block';
		// console.log(cursor.style.transform.replace(/.+\((.+)\)/, '$1'));
	}

	function hide() {
		style.display = 'none';
		clearInterval(interval);
	}
	var timeout, interval;

	let edit = document.getElementById('editor');

	edit.addEventListener('touchstart', e => {
		hide();
		timeout = setTimeout(() => {
			interval = setInterval(click, 100);
			editor.focus()
			editor.selection.selectWord()
		}, 600);
	}, true);
	edit.addEventListener('touchend', e => {
		clearTimeout(timeout)
	}, true);


	// 复制
	var copy = document.getElementById('copy');
	copy.onclick = function() {
		setClipBoardData(editor.getCopyText());
		editor.clearSelection();
		editor.focus();
	}

	// 粘贴
	var paste = document.getElementById('paste');
	paste.onclick = function() {
		/* function paste() {
			e.preventDefault();
			let text = e.clipboardData ? e.clipboardData.getData('text/plain') :
				window.clipboardData ? window.clipboardData.getData('Text') : '';
			console.log(e.clipboardData.getData)
			editor.$handlePaste(text);
		}
		window.addEventListener('paste', paste);
		document.execCommand('paste');
		window.removeEventListener('paste', paste); */
	}

	// 剪切
	var cut = document.getElementById('cut');
	cut.onclick = function() {
		editor.focus();
		document.execCommand('cut');
		/* setClipBoardData(editor.getCopyText());
		editor.commands.commands.cut.exec(editor); */
	}

	function setClipBoardData(text) {
		function copy(e) {
			e.preventDefault();
			if (e.clipboardData) {
				e.clipboardData.setData('text/plain', text);
			} else if (window.clipboardData) {
				window.clipboardData.setData('Text', text);
			}
		}
		window.addEventListener('copy', copy);
		document.execCommand('copy');
		window.removeEventListener('copy', copy);
	}

	document.getElementById('find').onclick = function() {
		editor.commands.byName["find"].exec(editor)
	}
})()
