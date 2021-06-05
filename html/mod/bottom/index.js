
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

new Vue({el: '#bottom'});