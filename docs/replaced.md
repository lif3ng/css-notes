# 替换元素

## 特征

- 内容的外观不受 CSS 影响
- 有自己的尺寸
  - `<video>`,`<iframe>`,`<canvas>` 默认尺寸 300×150
  - `<img>` 0
- 很多 CSS 属性有自己的表现规则
  - baseline 表现为下边缘

## display

替换元素默认的 display 属性为 inline 或 inline-block, 可以与其他行内元素出现在同一行。

替换元素宽高计算和非替换元素不同，替换元素的 display 是 inline、block 和 inline-block 任意一个时，尺寸计算规则都是一样的。所以即使设置了`display:block`也无法使其宽度铺满整行。
