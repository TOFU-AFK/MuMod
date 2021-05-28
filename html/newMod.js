var type = 'JSON+JS模组'; //模组类型
var form = '默认'; //代码格式
// 初始化editor(）
var editor = ace.edit("editor");
editor.setOptions({
  // 默认:false
  wrap: true, // 换行
  // autoScrollEditorIntoView: false, // 自动滚动编辑器视图
  enableLiveAutocompletion: true, // 智能补全
  enableSnippets: true, // 启用代码段
  enableBasicAutocompletion: true, // 启用基本完成 不推荐使用
});
// 设置主题  cobalt monokai
editor.setTheme("ace/theme/cloudy");
// 设置编辑语言
editor.getSession().setMode("ace/mode/json");
editor.setFontSize(12);
editor.setReadOnly(false) //设置编辑器是否只读
editor.getSession().setTabSize(2);


$('#name').bind('input onchange', setText)
$('#author').bind('input onchange', setText)
$('#description').bind('input onchange', setText)
$('#version').bind('input onchange', setText)
$('#minGameVersion').bind('input onchange', setText)

function setText() {
  var json = { 'name': $('#name').val(), 'author': $('#author').val(), 'description': $('#description').val(), 'version': $('#version').val(), 'minGameVersion': $('#minGameVersion').val() }
  if (form == '精简') {
    editor.setValue(JSON.stringify(json));
  } else {
    editor.setValue(JSON.stringify(json, null, "\t"));
  }

}

function setModType(type) {
  this.type = type;
  $('#type').html(type + '<i class="dropdown icon"></i>');
}

function setModForm(form) {
  this.form = form;
  $('#form').html(form + '<i class="dropdown icon"></i>');
}

function save() {
  var json = { 'modType': type, 'form': form }
  muMod.newMod(editor.getValue(), JSON.stringify(json, null, "\t"));
  muMod.finish();
}