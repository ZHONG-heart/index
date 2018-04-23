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

如果也是用了官方脚手架vue-cli，还需要在webpack.config.js配置文件中做各修改，用<br>
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

## 文件上传
let file=document.getElementById('fileData')<br>
   let formData = new FormData();<br>
   formData.append('file',file.files[0]);<br>
   formdata.append('action','test');<br>
   console.log(formData,formdata.getAll('file'))<br>
## 刷新页面提示
window.onbeforeunload=function(){
            return "你确定要离开吗";
        }
## 顶部进度条插件
查看详细使用方法以及获取插件
NProgress.js：http://ricostacruz.com/nprogress/
nanobar.js：http://nanobar.micronube.com/

### css样式可以加减.div{
    width: calc(100% - 500px);
}
### 实时编辑<style style="display:block" contentEditable>
            body { color: blue }
</style> <br>
### 多重边框.div {
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(0, 0, 0, 0.2), 0 0 0 18px rgba(0, 0, 0, 0.2), 0 0 0 24px rgba(0, 0, 0, 0.2);
    height: 200px;
    margin: 50px auto;
    width: 400px
}
### 冒泡事件和默认事件处理
1.event.stopPropagation()方法

这是阻止事件的冒泡方法，不让事件向documen上蔓延，但是默认事件任然会执行，当你掉用这个方法的时候，如果点击一个连接，这个连接仍然会被打开，

2.event.preventDefault()方法

这是阻止默认事件的方法，调用此方法是，连接不会被打开，但是会发生冒泡，冒泡会传递到上一层的父元素；

3.return false  ；

这个方法比较暴力，他会同事阻止事件冒泡也会阻止默认事件；写上此代码，连接不会被打开，事件也不会传递到上一层的父元素；可以理解为return false就等于同时调用了event.stopPropagation()和event.preventDefault()
### formatNumber字符串添加千分号
