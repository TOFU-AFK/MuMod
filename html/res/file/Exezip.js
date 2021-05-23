class ExeJSZip {
  // 用于获取url地址对应的文件内容
  getBinaryContent(url, progressFn = () => {}) {
    return new Promise((resolve, reject) => {
      if (typeof url !== "string" || !/https?:/.test(url))
        reject(new Error("url 参数不合法"));
      JSZipUtils.getBinaryContent(url, { // JSZipUtils来自于jszip-utils这个库
        progress: progressFn,
        callback: (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        },
      });
    });
  }
  
  // 遍历Zip文件
  async iterateZipFile(data, iterationFn) {
    if (typeof iterationFn !== "function") {
      throw new Error("iterationFn 不是函数类型");
    }
    let zip;
    try {
      zip = await JSZip.loadAsync(data); // JSZip来自于jszip这个库
      zip.forEach(iterationFn);
      return zip;
    } catch (error) {
      throw new error();
    }
  }
}