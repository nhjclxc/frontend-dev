
https://www.bilibili.com/video/BV1Zy4y1K7SH?p=134
https://www.bilibili.com/video/BV1Zy4y1K7SH?p=135



# 资源
## 7.1 移动端常用 UI 组件库
1. Vant https://youzan.github.io/vant
2. Cube UI https://didi.github.io/cube-ui
3. Mint UI http://mint-ui.github.io

## 7.2 PC 端常用 UI 组件库
1. Element UI https://element.eleme.cn
2. IView UI https://www.iviewui.co

# [element-UI的使用](https://element.eleme.cn)
### 安装：[element安装教程](https://element.eleme.cn/#/zh-CN/component/installation)
``` npm i element-ui ```


### 在vue里面配置element-UI
#### 使用element-UI所有样式组件，不推荐
[完整引入](https://element.eleme.cn/#/zh-CN/component/quickstart#wan-zheng-yin-ru)

```javascript
    // 引入ElementUI组件库
    import ElementUI from 'element-ui';
    // 引入ElementUI所有样式
    import 'element-ui/lib/theme-chalk/index.css';
    //使用ElementUI插件
    Vue.use(ElementUI);
```
#### 按需使用element-UI样式组件
[按需引入](https://element.eleme.cn/#/zh-CN/component/quickstart#an-xu-yin-ru)
``` npm install babel-plugin-component -D ```

在[babel.config.js](../babel.config.js)文件里面加入以下内容来配置按需引入
```javascript
module.exports = {
  presets: [
    ["@babel/preset-env", { "modules": false }]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

```


### 根据官网教程使用：[element使用教程](https://element.eleme.cn/#/zh-CN/component/quickstart)
