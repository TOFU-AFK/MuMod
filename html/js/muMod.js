var muMod = window.mumod;

function getMod(index) {
  return muMod.getModJsonByIndex(index);
}

function getModsName() {
  try {
    var str = '';
    var len = muMod.getModsLength();
    for (i = 0; i < len; i++) {
      str += muMod.getModNameByIndex(i) + ',';
    }
    str = str.substring(0, str.length - 1);
    return str.split(",");
  } catch (e) {
    return null
  }
}

function getModsDescription() {
  try {
    var str = '';
    var len = muMod.getModsLength();
    for (i = 0; i < len; i++) {
      str += muMod.getModDescriptionByIndex(i) + ',';
    }
    str = str.substring(0, str.length - 1);
    return str.split(",");
  } catch (e) {
    return null
  }
}

//打开模组，获取模组数据时必须调用此函数
function openMod(name) {
  return muMod.openMod(name);
}

function getModName() {
  return muMod.getModName();
}

function getModDescription() {
  return muMod.getModDescription();
}

function getModType() {
  return muMod.getModType();
}

function getModForm() {
  return muMod.getModForm();
}

function finish() {
  muMod.finish();
}

function setModIcon() {
  muMod.setModIcon();
}

function hasIcon() {
  return BooleanV(muMod.hasIcon());
}

function getModPath() {
  try {
    return muMod.getModPath();
  } catch (e) {
    return '测试数据'
  }
}

function getFileTextByPath(path) {
  try {
    return muMod.getFileTextByPath(path);
  } catch (e) {
    return '测试数据'
  }
}

function getFileNameByPath(path) {
  try {
    return muMod.getFileNameByPath(path);
  } catch (e) {
    return '测试数据'
  }
}

function getModJsonPath() {
  try {
    return muMod.getModJsonPath();
  } catch (e) {
    return '测试数据'
  }
}

function BooleanV(v) {
  if (v == 1) {
    return true;
  } else {
    return false
  }
}