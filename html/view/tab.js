var Tab = C.createClass({
  // 构造函数
  init: function(id) {
    this.id = id;
    this.item = '';
    this.files = [];
  },

  draw: function() {
    for (i = 0; i < this.files.length; i++) {
      this.item += this.generateItem(this.getFileName(this.files[i]), i);
    }
    $('#' + this.id).html(this.item);
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
      if(this.getFileName(this.files[i])==name){
        return this.files[i];
      }
    }
  },

  generateItem: function(name, index) {
    return '<i class="right bordered file icon divider"></i><a id="' + index + '" class="section" onclick="openFile(' + "'" + index + "'" + ')"><p>' + name + '</p></a>'
  },

  add: function(path) {
    this.files.push(path);
  },

  remove: function(path) {
    if (this.files.indexOf(path) > -1) {
      this.files.splice(this.files.indexOf(path), 1);
    }

  }

});