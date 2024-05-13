function loadIosCss() {
  let userAgent = navigator.userAgent;
  let isiPhone = userAgent.indexOf("iPhone") > -1;

  if (isiPhone) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    let origin = location.origin;
    if (origin.indexOf("192.") < 0) {
      origin = location.origin + "/poem";
    }
    link.href = origin + "/assets/style/common/ios.css?v=1.0.0.0";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
}

/**
 * 使用document.fonts对象来检测字体文件是否已经加载完成。document.fonts是一个FontFaceSet对象，它包含了当前页面中所有可用的字体。您可以使用document.fonts.ready属性来返回一个Promise对象，当所有的字体都加载完成时，这个Promise对象会被解决。您也可以使用document.fonts.check()方法来检查某个字体是否已经加载完成。
 * 
 * // 定义一个自定义字体
 *  let fontFace = new FontFace('MyFont', 'url(myfont.ttf)');

 * // 将自定义字体添加到document.fonts中
 * document.fonts.add(fontFace);

 * // 等待所有字体加载完成
 * document.fonts.ready.then(function () {
 *  // 检查自定义字体是否加载完成
 *  if (document.fonts.check('12px MyFont')) {
 *   // 加载完成后执行某段逻辑
 *   console.log('MyFont is ready!');
 *  }
 * });
 * 
 */
function start() {
  // document.fonts.ready.then(() => {
  //   loadIosCss();
  // });
}

start();
