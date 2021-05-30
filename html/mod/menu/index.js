var menu = new Vue({
	el: '#menu',
	data() {
		editor.container.addEventListener('touchstart', e => {
			this.hide();
			this.timeout = setTimeout(() => {
				this.interval = setInterval(this.click, 100);
				editor.focus();
				editor.selection.selectWord();
			}, 600);
		}, true);
		editor.container.addEventListener('touchend', e => {
			clearTimeout(this.timeout)
		}, true);
		return {
			cursor: document.getElementsByClassName('ace_cursor')[0],
		}
	},
	methods: {
		// 由于显示菜单
		click() {
			let [x, y] = this.cursor.style.transform.replace(/.+\((.+)\)/, '$1').split(',');
			let style = this.$el.style;
			style.left = Math.clamp(25, parseInt(x), document.body.clientWidth - this.$el.children.length * 25) +
				'px';
			style.top = Math.clamp(5, parseInt(y), document.body.clientHeight - 25) + 'px';
			style.display = 'block';
			// console.log(cursor.style.transform.replace(/.+\((.+)\)/, '$1'));
		},
		hide() {
			this.$el.style.display = 'none';
			clearInterval(this.interval);
		},
		// 复制
		copy() {
			this.setClipBoardData(editor.getCopyText());
			editor.clearSelection();
			editor.focus();
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
		},
		// 剪切
		cut() {
			editor.focus();
			document.execCommand('cut');
			/* this.setClipBoardData(editor.getCopyText());
			editor.commands.commands.cut.exec(editor); */
		},
		// 搜索
		search() {
			editor.commands.byName["find"].exec(editor)
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
