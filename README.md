# flexible.js
一款js自适应插件。
# isMobel.js
判断手机机型iphone/android
## formatDate.js
日期格式化插件
## shuffe.js
数组随机排序
# vue IE低版本显示空白
npm install --save-dev babel-polyfill

import 'babel-polyfill'

如果也是用了官方脚手架vue-cli，还需要在webpack.config.js配置文件中做各修改，用
module.exports = {  <br>
  entry: {    <br>
    app: ["babel-polyfill", "./src/main.js"]<br>
  }<br>
};<br>
替换<br>
module.exports = {<br>
    entry: {<br>
    app: './src/main.js'<br>
}<br>
}
