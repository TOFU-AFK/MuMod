
document.getElementsByClassName('ace_content')[0].addEventListener('touchstart', e => {
	menu.hide();
	menu.timeout = setTimeout(() => {
		editor.focus();
		menu.$el.className = 'show';
		menu.click();
		setTimeout(() => editor.selection.selectWord(), 50);
		function keydown() {
			menu.hide()
			document.removeEventListener('keyup', keydown);
		}
		document.addEventListener('keyup', keydown);
	}, 600);
}, true);

editor.container.addEventListener('touchend', e => {
	editor.focus()
	clearTimeout(menu.timeout)
}, true);

var menu = new Vue({
	el: '#menu',
	data() {
		return {
			cursor: document.getElementsByClassName('ace_cursor')[0],
			layer: document.getElementsByClassName('ace_layer ace_gutter-layer ace_folding-enabled')[0],
		}
	},
	methods: {
		// 用于显示菜单时的更新
		click() {
			if (this.$el.className == 'hide') return;
			let [x, y] = this.cursor.style.transform.replace(/.+\((.+)\)/, '$1').split(',');
			let style = this.$el.style;

			style.setProperty('--left', Math.clamp(parseInt(this.layer.style.width), parseInt(x), document.body.clientWidth - this.$el.children.length * 30) + 'px');
			style.setProperty('--top', Math.clamp(3, parseInt(y) + editor.container.offsetTop - 35, document.body.clientHeight - 25) + 'px');
			// console.log(cursor.style.transform.replace(/.+\((.+)\)/, '$1'));
		},
		hide() {
			this.$el.className = 'hide';
			// setTimeout((() => this.$el.style.display = 'none'), parseInt(this.$el.style.transitionDuration) * 1000);
		},
		// 复制
		copy() {
			this.setClipBoardData(editor.getCopyText());
			editor.clearSelection();
			editor.focus();
			return true;
		},
		// 粘贴
		paste() {
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
			return false;
		},
		// 剪切
		cut() {
			editor.focus();
			document.execCommand('cut');
			/* this.setClipBoardData(editor.getCopyText());
			editor.commands.commands.cut.exec(editor); */
			return true;
		},
		// 搜索
		search() {
			editor.commands.byName["find"].exec(editor)
			return true;
		},
		setClipBoardData(text) {
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
	}
})
