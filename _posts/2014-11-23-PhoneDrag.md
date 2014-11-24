---
layout: page
headtitle: 懒蛇的实验室
title: 移动端——拖动条
date: 2014-11-23 22:36
author: 懒蛇
blogurl: http://blog.webql.info
adaptive: <i class="phone">Phone</i>
pic: 20141123/1/demo.jpg
demourl: 20141123/1/demo.html
skill: rem响应式布局，touch事件
tags: javascript
---

布局：以rem为主要布局单位，实现无meta头的移动端适配。

交互：以zepto为底层库，监听touch事件，touch坐标位置的存取，orientationchange事件与resize事件解决某些浏览器翻转屏时无重载坐标；动态加载meta头以适配FF浏览器。