---
layout: page
headtitle: 懒蛇的实验室
title: 文本描边-适配众浏览器
date: 2014-11-16 10:36
author: 懒蛇
blogurl: http://blog.webql.info
adaptive: <i class="pc">Pc</i> <i class="phone">Phone</i>
pic: 20141116/1/demo.jpg
demourl: 20141116/1/demo.html
skill: text-shadow,Dropshadow
tags: css3 filter
---


现代浏览器采用text-shadow，过渡处理都相对比较平滑

IE低版本不支持text-shadow，可采用filter过滤器来实现，表现效果略有不同；这里运用到了drop-shadow,如:
Dropshadow(offx=0,offy=2,color=#333333)
IE6,7需要absolute来触发