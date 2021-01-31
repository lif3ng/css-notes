# 基础使用

## 基本概念

![](flex-direction-terms.svg)

- 弹性容器 (flex container) `display` 属性设置为 `flex` 或 `inline-flex` 后的元素
- 弹性子元素 (flex item) 弹性容器元素的直接子元素
- 主轴 (main axis) 弹性元素流动的方向
- 主轴尺寸 (main size) 主轴方向内容的总长度。
- 主轴起边 (main start) 主轴上内容开始流动的那一端
- 主轴终边 (main end) 主轴上内容流向的那一端
- 垂轴 (cross axis) 允许换行时新航的排列方向
- 垂轴尺寸 (cross size) 垂轴方向内容的总长度。
- 垂轴起边 (cross start) 垂轴上内容开始流动的那一端
- 垂轴终边 (cross end) 垂轴上内容流向的那一端

## display: flex

设置后

- 当前元素 -> 弹性容器（flex container），自动撑满主轴
- 当前元素的直接子元素 -> 弹性子元素（flex item）
- 弹性子元素的 `margin: auto`，代表平分剩余空间（所在方向上如果有空间的话）

<Demo name="flex" />

## display: inline-flex

和 `display: flex` 的区别只有：弹性容器在主轴方向（默认是 row: left -> right）不会自动撑满。

<Demo name="inline-flex" />

## 参考

https://www.w3.org/TR/css-flexbox/
