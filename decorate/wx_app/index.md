# 微信小程序

## 1. 响应的数据绑定

框架的核心是一个响应的数据绑定系统，可以让数据与视图非常简单地保持同步。当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。

- 开发者通过框架将逻辑层数据中的 name 与视图层的 name 进行了绑定，所以在页面一打开的时候会显示 Hello Weixin!；
- 当点击按钮的时候，视图层会发送 changeName 的事件给逻辑层，逻辑层找到并执行对应的事件处理函数；
- 回调函数触发后，逻辑层执行 setData 的操作，将 data 中的 name 从 Weixin 变为 MINA，因为该数据和视图层已经绑定了，从而视图层会自动改变为 Hello MINA!

## 2. 检查更新

```js
const updateManager = wx.getUpdateManager();
```

## 3.自定义组件 properties

- 数据类型：String、Number、Boolean、Array、Object
- null:表示不限制类型

```js
 observers:{
    value1(value1){
        console.log('监听单个数据')
    },
    'value1,value2':function(value1,value2){
        console.log('监听多个数据')
    },
    'obj.name':function(value){
      console.log('监听对象、数组单个数据')
    },
    'arr[1]':function(value){
      console.log('监听对象、数组单个数据')
    },
    'obj.**':function(value){
      console.log('监听对象数据')
    },
  },
```

## 4.自定义组件的样式

- 子选择器只能用在 view，不然可能会失效
- color、fontsize 会样式穿透，从页面穿透到子组件

## 5.自定义组件中修改微信原生组件的样式

- 打开文档审查元素
- 设置 shared 属性
- 不想影响到其他页面、组件，添加命名空间 例如：.custom .checkbox
- 在页面上有自己的样式时候，可以添加权重，让页面的样式显示

## 7. 自定义npm

在实际的开发中，随着项目的功能越来越多、项目越来越复杂文件目录也变的很繁琐，为了方便进行项目的开发，开发人员通常会对目录结构进行调整优化，例如:将小程序源码放到 miniprogram录下
的位置 和 目标 miniprogram npm 的位置这时候需要开发者在 project.config.json 中指定 node modules
具体配置如下
- 配置 project.config.json 的 miniprogramRoot 指定小程序源冯的目录
- 配置 project.config.json的setting.packNpmManually 为tru开启自定义 node_modules和 miniprogram_npm 位置的构建 npm 方式配置 
- project.config.json的setting.packNpmRelationList 项指定 packageJsonPath 和 miniprogramNpmDistDir 的位置

## 8. 转发功能

- 页面js文件 必须声明 onShareAppMessage 事件监听函数，并自定义转发内容只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
- 通过给 button 组件设置属性 open-type=“share“，可以在用户点击按钮后触发Page.onShareAppMessage 事件监听函数

## 9. 分享到朋友圈

- 页面 必须 设置允许“发送给朋友”，页面js 文件声明 onShareAppMessage 事件监听函数页面 
- 必须 需设置允许“分享到朋友圈”，页面 js 文件声明 onShareTimeline 事件监听函数

## 10. 手机号快速验证

- 手机号快速验证组件:平台会对号码进行验证，但不保证是实时验证
```
<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">
```
- 手机号实时验证组件:在每次请求时，平台均会对用户选择的手机号进行实时验证
```
<button open-type="getRealtimePhoneNumber'bindgetrealtimephonenumber="getrealtimephonenumber" />
```

## 11. 页面间通信
- 在 wx.navigateTo 的 success 回调中通过 EventChannel对象发射事件被打开的页面可以通过 
- this.getopenerEventchannel()方法来获得一个 Eventchannel 对象，进行监听、发射事件
- wx.navigateTo 方法中可以定义 events 配置项接收被打开页面发射的事件


