var tab = new Array();
// 初始化editor(）
var editor = ace.edit("editor");

var lastFile = null;
var file = null;

var tab = new Tab('tab');

function openFile(id) {
  if (lastFile != null) {
    lastFile.removeClass('active');
  }
  $('#' + id).addClass('active');
  lastFile = $('#' + id);
  var text = muMod.getFileTextByPath(tab.getPathByName($('#' + id).children('p').text()));
  editor.setValue(text);
}

//因为调用了接口，所以在浏览器中将会无效
tab.add(muMod.getModPath()+'/mod.json');
tab.add(muMod.getModPath()+'/Mconfig.json');
tab.draw();