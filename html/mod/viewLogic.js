//处理视图逻辑
var app = new Vue({
  el: "#app",
  methods: {
    /*
    在tab栏中添加项目
    @param {Object} data 添加的项目，必须为对象，其中必须包括 {String} path 文件路径 {String} left 项目左侧html文本
    */
    addDataOnTab: function(data) {
      this.itemArray.push(data);
    },
    /*
    在tab栏中添加项目
    @param {String} itemPath 项目路径
    @param {String} itemLeft 项目左侧html文本
    */
    addItemOnTab: function(itemPath, itemLeft) {
      this.addDataOnTab({ path: itemPath, left: itemLeft });
    },
  },
  data: {
    /*
    tab栏的项目数组
    @param {String} [path=undefined] 路径
    @param {String} [left=undefined] 在项目左侧插入一段html，这里用来显示文件图标
    */
    itemArray: [],
    item: 0
  },
})
