
Vue.component('bottom-item', {
	props: ['_key', '_code'],
	methods: {
		click() {
			if (this._key) editor.$handlePaste(this._key)
			if (this._code) editor.commands.byName[this._code.split(',')[0]].exec.apply(editor, [editor].concat(this._code.replace(/.+?\,/).split(',')));
			editor.focus()
		}
	},
	template: `<span @click="click()"><slot></slot></span>`
})

new Vue({
	el: '#bottom',
	data: {
		startY: 0, focus: false,
		max: Math.ceil($('#bottom #more')[0].children.length / 8) * 32,
	},
	methods: {
		getY() {
			return event == null ? 0 : event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
		},
		reset() {
			this.more = $('#bottom #more')[0];
			this.checkbox = document.getElementById('bottom_more_checkbox')
			this.startY = this.getY()
			this.startH = parseInt(this.more.style.height) || 0
			this.focus = true
		},
		move() {
			this.more.style.height = Math.abs(this.startH - Math.clamp(this.max + 6, this.startY - this.getY(), 0)) + 'px';
		},
		moveend() {
			this.focus = false
			let h = parseInt(this.more.style.height)
			if ((h > this.max / 2 && !this.checkbox.checked) || (h < this.max / 2 && this.checkbox.checked)) this.checkbox.click()
			this.more.style.height = ''
		}
	},
	created() {
		window.addEventListener('mouseup', () => this.moveend())
		this.reset()
		this.more.style.setProperty('--maxh', this.max + 'px')
	}
});