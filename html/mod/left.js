var left = new Vue({
  el: "#left",
  methods: {
    addItem: function(iicon,ititle,ipage){
      itemArray.push({icon:iicon,title:ititle,page:ipage});
    }
  },
  data: {
    //tab栏的项目数组
    itemArray: [
    {
      icon:'folder',
      title:'文件',
      page:''
    },
    {
      icon:'search',
      title:'搜索',
      page:''
    },
    {
      icon:'play',
      title:'打包',
      page:''
    },
    {
      icon:'code branch',
      title:'代码分支',
      page:''
    },
    {
      icon:'th',
      title:'插件',
      page:''
    }
    ],
    //itemArray: ['folder','search','play','code branch','th'],
    item: 0,
    //标题
    title: '文件'
  },
})
