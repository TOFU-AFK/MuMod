// 初始化editor(）
var editor = ace.edit("editor");
editor.setOptions({
  // 默认:false
  wrap: true, // 换行
  // autoScrollEditorIntoView: false, // 自动滚动编辑器视图
  enableLiveAutocompletion: true, // 智能补全
  enableSnippets: true, // 启用代码段
  enableBasicAutocompletion: true, // 启用基本完成 不推荐使用
});

// 设置主题  cobalt monokai
// editor.setTheme("ace/theme/cloudy");
// 设置编辑语言
editor.getSession().setMode("ace/mode/hjson");
editor.setFontSize(12);
editor.setReadOnly(false) // 设置编辑器是否只读
editor.getSession().setTabSize(4);