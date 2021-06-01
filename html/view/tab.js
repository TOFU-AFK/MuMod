var Tab = C.createClass({
  // 构造函数
  init: function(id) {
    this.id = id;
    this.files = [];
  },

  draw: function() {
    $('#' + this.id).empty();
    for (i = 0; i < this.files.length; i++) {
      var suffix = this.getFileName(this.files[i]).split('.')[1];
      if(suffix==undefined){
        suffix='file'
      }
      var item = this.generateItem(this.getFileName(this.files[i]), i, suffix);
      //设置第一个项目为打开状态
      $('#' + this.id).append(item);
    }
  },

  getFileName: function(path) {
    try {
      return window.mumod.getFileNameByPath(path);
    } catch (e) {
      return '测试数据'
    }
  },

  getPathByName: function(name) {
    for (i = 0; i < this.files.length; i++) {
      if (this.getFileName(this.files[i]) == name) {
        return this.files[i];
      }
    }
  },

  generateItem: function(name, index, icon) {
    var run = "openFile(this)";
    return $('<div id="' + index + '" onclick="' + run + '" class="mumod_tab_item"><div class="left"><div class="mumod_left_icon"><img src="../images/' + icon + '.svg"/></div></div><div class="middle"><div class="mumod_tab_item_content">' + name + '</div></div><div class="right"><div class="mumod_right_icon"><i class="times icon"></i></div></div></div>');
  },

  getPathById: function(id) {
    return this.files[id];
  },

  add: function(path) {
    this.files.push(path);
    this.draw();
  },

  remove: function(path) {
    if (this.files.indexOf(path) > -1) {
      this.files.splice(this.files.indexOf(path), 1);
    }
    this.draw();

  }

});
