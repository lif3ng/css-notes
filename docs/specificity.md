# 优先级

对于某一元素的某一 CSS 属性，最终会有确定的渲染结果。如果在多个地方针对同一元素的具体 CSS 属性多次声明，只有最终“胜出”的声明才能渲染。胜出的声明被称为[层叠值](https://www.w3.org/TR/css-cascade/#cascaded)。元素的每个属性最多只有一个层叠值。

## 来源

来源分为行内声明（`style="color:blue"`) 和样式表声明。行内声明的优先级更高，如果需要在样式表中覆盖需用使用 `!important`.

## 选择器

优先级从高到低依次为：

- id 选择器 （#xx）
- 类选择器 （.xx) / 伪类选择器 (:after) / 属性选择器 ([type='input'])
- 标签选择器 (p)

通用选择器（\*）、组合器（`>`、`+`、`~`)、空格 对优先级没有影响，不参与优先级的计算。

会根据这三类选择器产生产生一个特制度数值（Specificity），如 `#body` 100, `.body#body` 110, `body.body` 011.

Specificity 小工具：

- [Specificity Visualizer](https://isellsoap.github.io/specificity-visualizer/)
- [CSS Specificity Graph Generator](https://jonassebastianohlsson.com/specificity-graph/)

## 顺序

每个元素的每个属性，在选择器优先级相同 或 同为行内元素 时，以后声明的为准。

## 参考

- https://www.w3.org/TR/css-cascade
- https://css-tricks.com/specifics-on-css-specificity/
- https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity
