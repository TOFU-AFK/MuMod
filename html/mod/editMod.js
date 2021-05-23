var tab = new Array();

var lastFile = null;
var file = null;

function OpenFile(id) {
  if (lastFile != null) {
    lastFile.removeClass('active');
  }
  $('#' + id).addClass('active');
  lastFile = $('#' + id);
}

function addTab() {

}

//根据tab上的索引获取文件内容
function getText(index){
  
}