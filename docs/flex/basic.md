# 基础使用

![](/flex-direction-terms.svg)

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
