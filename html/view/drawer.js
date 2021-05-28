var Drawer = C.createClass({
  /*
  构造函数
  @items 项目数组
  @name 声明的变量名
  */
  init: function(items, name) {
    this.items = items;
    this.name = name;
    this.open = false;
  },

  //画
  draw: function() {
    $('body').append(this.drawArrowHead());
  },

});