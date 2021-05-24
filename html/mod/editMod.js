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
  var text = getFileTextByPath(tab.getPathByName($('#' + id).children('p').text()));
  editor.setValue(text);
}

tab.add(getModJsonPath());
tab.add(getModPath()+'/Mconfig.json');
tab.draw();