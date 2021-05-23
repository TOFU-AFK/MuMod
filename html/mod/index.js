$('div.ui a#0')[0].click();
/* let codehint = $('#codehint'), textarea = $('.ace_text-input');
window.addEventListener('input', e => {
	setTimeout(() => {
		let style1 = codehint[0].style;
		style1.display = 'block';
		let [tox, toy] = [parseInt(textarea[0].style.left), parseInt(textarea[0].style.top)];
		style1.left = Math.max(tox, document.body.clientWidth) + 'px';
		style1.top = Math.max(tox, document.body.clientHeight) + 'px';
	}, 10);
})
$('.ace_scroller')[0].addEventListener('keydown', e => {
	if (e.keyCode == 8) codehint[0].style.display = 'none'
}) */

var setCompleteData = function(data) {
	var langTools = ace.require("ace/ext/language_tools");
	langTools.addCompleter({
		getCompletions: function(editor, session, pos, prefix, callback) {
			// console.log(callback, editor.completer.getPopup().setRow(10));
			if (prefix.length === 0) {
				return callback(null, []);
			} else {
				return callback(null, data);
			}

		}
	});
}

editor.setValue('');
(function() {
	let arr = [
			'名称', 'name', 'string',
			'描述', 'description', 'string',
			'作者', 'author', 'string',
			'版本', 'version', 'number',
			'类型', 'type', 'type'
		],
		arr2 = [];
	var obj = {
		string: "'''$1'''",
		number: '$1',
		type: '',
	}
	var description = {
		name: '你东西的名称，默认为文件名',
		
	}
	for (var i = 0; i < arr.length; i += 3) {
		arr2.push({
			meta: arr[i],
			type: "snippet",
			caption: arr[i + 1],
			snippet: arr[i + 1] + `: ${(obj[arr[i + 2]] || '') + (description[arr[i + 1]] ? ' // ' + description[arr[i + 1]] : '')}\n`,
			score: 1
		});
	}
	setCompleteData(arr2);
})();
