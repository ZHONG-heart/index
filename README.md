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
VMware 2017 v14.x 永久许可证激活密钥
FF31K-AHZD1-H8ETZ-8WWEZ-WUUVA
CV7T2-6WY5Q-48EWP-ZXY7X-QGUWD


图标不正常展示，用的iView中出现的方法
rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: false
    })
    
    # #手机端调试
  <script src="//cdn.jsdelivr.net/npm/eruda"></script>
<script>

eruda.init();

console.log('控制台打印信息');

</script>
#数组合并
　函数的apply方法有一个特性，那就是func.apply(obj,argv)，argv是一个数组。所以我们可以利用这点，直接上代码：

a.push.apply(a,b);
　　　　调用a.push这个函数实例的apply方法，同时把，b当作参数传入，这样a.push这个方法就会遍历b数组的所有元素，达到合并的效果。

　　　　这里可能有点绕，我们可以把b看成[4,5,6]，变成这样：

a.push.apply(a,[4,5,6]);
　　　　然后上面的操作就等同于：

a.push(4,5,6);

#window下安装redis报错：
creating server tcp listening socket 127.0.0.1:6379: bind No error

的解决方案如下按顺序输入如下命令就可以连接成功

1. redis-cli.exe
2. shutdown
3. exit
4. redis-server.exe redis.windows.conf



参考连接:http://blog.csdn.net/fengzhihen2007/article/details/52211048

## 多选框
checkAll: {
      get() {
        return this.checkedCount === this.list.length;
      },
      set(value) {
        this.lists = this.list.map(item => {
          console.log(value)
          item.manage_checked = value;
          console.log(item,'这是item的值')
          return item;
        });
      }
    },
     checkedCount: {
      get() {
        return this.list.filter(item => item.manage_checked).length;
      }
    }
    
 # record H5录音上传

实现：
merge([3,2,2,4,5,5,6,2,1]); // 输出[3,2,4,5,6,2,1]
merge([3,2,3]); // 输出[3,2,3]
merge([2,2,3]); // 输出[2,3]

arr.filter((item, index) => arr[index + 1] !== arr[index])
