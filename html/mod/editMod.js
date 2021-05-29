var tab = new Array();
// 初始化editor(）
var editor = ace.edit("editor");

var lastFile = null;
var file = null;

var tab = new Tab('tab');

function openFile(id) {
  if (lastFile != null) {
    lastFile.removeClass('mumod_active');
  }
  $('#' + id).addClass('mumod_active');
  lastFile = $('#' + id);
  var text = getFileTextByPath(tab.getPathById(id));
  editor.setValue(text);
}

/*首次进入打开的文件*/
tab.add(getModJsonPath());
tab.add(getModPath() + '/config.mumod');

//$('#tab').html('<div class="mumod_tab_item"><div class="left"><div class="mumod_left_icon"><img src="../images/json.svg"/></div></div><div class="middle"><div class="mumod_tab_item_content">啊这</div></div><div class="right"><div class="mumod_right_icon"><i class="times icon"></i></div></div></div>')