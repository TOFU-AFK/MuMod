(function() {
  let menu = document.getElementById('menu'),
    cursor = document.getElementsByClassName('ace_cursor')[0];
  var style = menu.style;

  function click() {
    let [x, y] = cursor.style.transform.replace(/.+\((.+)\)/, '$1').split(',');
    style.left = Math.min(parseInt(x), document.body.clientWidth - menu.children.length * 25) + 'px';
    style.top = Math.min(parseInt(y), document.body.clientHeight - 25) + 'px';
    style.display = 'block';
    // console.log(cursor.style.transform.replace(/.+\((.+)\)/, '$1'));
  }
  var timeout, interval;

  let edit = document.getElementById('editor');

  edit.addEventListener('touchstart', e => {
    style.display = 'none';
    clearInterval(interval);
    timeout = setTimeout(() => interval = setInterval(click, 100), 600);
  }, true);
  edit.addEventListener('touchend', e => {
    clearTimeout(timeout)
  }, true);

  //复制
  var copy = document.getElementById('copy');
  copy.onclick = function() {
    setClipBoardData(editor.session.getTextRange(editor.getSelectionRange()));
  }

  //粘贴
  var paste = document.getElementById('paste');
  paste.onclick = function() {
    //不知道咋搞，放着
  }

  function setClipBoardData(text) {
    var copy = function(e) {
      e.preventDefault();
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', text);
      } else if (window.clipboardData) {
        window.clipboardData.setData('Text', text);
      }
    }
    window.addEventListener('copy', copy);
    document.execCommand('copy');
    window.removeEventListener('copy', copy);
  }

})()