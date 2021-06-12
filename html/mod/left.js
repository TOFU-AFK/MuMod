function create() {
  return `<div class="item">
                <i class="folder icon"></i>
                <div class="content">
                  <div class="header">mod.json</div>
                  <div class="description">I don't know.</div>
                </div>
              </div>`;
}

var left = new Vue({
  el: "#left",
  methods: {
    addItem: function (iicon, ititle, ipage) {
      itemArray.push({ icon: iicon, title: ititle, page: ipage });
    }
  },
  computed: {
    /*createItem: function(name){
      
    },*/
  },
  data: {
    //tab栏的项目数组
    itemArray: [
      {
        icon: "folder",
        title: "文件",
        page: `<div class="ui list">` + create() + `</div>`
      },
      {
        icon: "search",
        title: "搜索",
        page: "测试"
      },
      {
        icon: "play",
        title: "运行",
        page: "制作中"
      },
      {
        icon: "code branch",
        title: "代码分支",
        page: "不做，占位置"
      },
      {
        icon: "th",
        title: "插件",
        page: "暂无"
      }
    ],
    //itemArray: ['folder','search','play','code branch','th'],
    item: 0,
    //标题
    title: "文件"
  }
});
