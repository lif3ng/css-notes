# 对齐方式

## justify-content

`justify-content` 属性用于弹性容器，设置在弹性容器主轴方向如何分布**各行内**的弹性元素。

- flex-start 靠近主轴起边
- flex-end 靠近主轴终边
- center 居中显示在主轴尺寸中点
- space-between 把每行第一个元素放在主轴起边，每行最后一个元素放在主轴终边，在相邻元素间放置等量空白
- space-around 剩余空间平均分给每个元素，行内相邻元素距离相同，行首行尾元素距行首行尾距离为相邻元素的一半
- space-evenly 行内 n 个元素，剩余空间分成 n+1 份，行首行尾元素距离起边终边距离和距离相邻元素的距离相同

以上不是 `justify-content` 属性全部取值，只是用于弹性布局的取值。同样，名称里不带有 `flex-` 的属性一般都不单用在弹性布局。

`justify-content` 不仅能用于弹性容器，还能用于多列容器和栅格容器。

<Demo name="justify-content" />

## align-items

`align-items` 属性用于弹性容器，定义弹性元素在垂轴上的对齐方式。

`flex-start`, `flex-end`, `center` 三个值效果显而易见。

- `baseline` 第一行文字基线（底边）对其
- `stretch` 拉伸至填满垂轴，使用 `margin` 可以增加填满的空间

<Demo name="align-items" />

## align-self

## 参考

https://www.w3.org/TR/css-align-3/#propdef-justify-content

https://www.w3.org/TR/css-align-3/#distribution-values

https://www.w3.org/TR/css-flexbox/#justify-content-property

https://developer.mozilla.org/zh-cn/docs/Web/CSS/justify-content
