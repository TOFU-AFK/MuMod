//处理视图逻辑
var app = new Vue({
  el:"#app",
  data: {
    /*
    tab栏的项目数组
    @param {String} [name=undefined] 名称，显示在项目中间
    @param {String} [left=undefined] 在项目左侧插入一段html，这里用来显示文件图标
    */
    itemArray:[{name:'text',left:'<img src="../images/json.svg"/>'},{name:'text',left:'<img src="../images/json.svg"/>'}],
    item:0
  },
})