# 投影 box-shadow

## 基本表现

投影位置和 border 区域没有重叠，可通过设置 inset 使投影在内部显示。

<Demo name="area" />

## 属性参数

```
box-shadow: none | <shadow>#

<shadow> = <color>? && [<length>{2} <length [0,∞]>? <length>?] && inset?
```

长度数值最少有两个，最多有四个，依次是水平偏移（offset-x）、垂直偏移（offset-y）、模糊半径（blur-radius）、扩散半径（spread-radius）。

`<length>` 数量:

- 2 `<offset-x> <offset-y>`
- 3 `<offset-x> <offset-y> <blur-radius>`
- 4 `<offset-x> <offset-y> <blur-radius> spread-radius`

### offset-x

水平偏移，正值向右偏移，负值向左偏移

### offset-y

垂直偏移，正值向下偏移，负值向上偏移

### blur-radius

模糊半径，模糊面积越大，阴影就越大越淡。 不能为负值，默认为 0

### spread-radius

扩散半径。取正值时，阴影扩大；取负值时，阴影收缩。默认为 0，此时阴影与元素同样大。

### inset

设置后投影在内部显示

## 参考

- https://drafts.csswg.org/css-backgrounds/#box-shadow
- https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow
