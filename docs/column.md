# 分栏布局

分栏布局用于同一段内容分为多栏显示的场景，类似于报纸的排版。

与分栏布局相关的 CSS 属性有：

- columns
- column-width
- column-count
- column-rule
- column-rule-color
- column-rule-style
- column-rule-width
- column-span
- column-fill
- column-gap

## column-count

分栏数目

<Demo name="column-count" />

## column-width

指定理想的分栏宽度，实际渲染和指定宽度会有出入。不能是百分比，需要是带有单位长度值。

<Demo name="column-width" />

## columns

```
columns: <column-width> || <column-count>
```

可以同时指定 column-width 和 column-height. 同时指定后通过计算换算为 columns-count 值，较小值生效。

## column-gap / gap

指定每一栏之间空白大小，可以使用百分比。

<Demo name="gap" />

## column-rule

各分栏中间的线（line drawn），和 border 类似，column-rule 也是三个属性的缩写：

```
column-rule: <column-rule-width> || <column-rule-style> || <column-rule-color>
```

<Demo name="column-rule" />

## column-span

用于分栏布局的子元素，用于指定是否横跨多个栏

<Demo name="column-span" />

## column-fill

指定填充分栏内容的行为，取值有：

- auto 按顺序填充每一列，内容只占它需要的空间
- balance 默认值。尽可能在列之间平衡内容
- balance-all 目前来看和 balance 表现一致

<Demo name="column-fill" />

## break-inside

指定分栏内容发生中断时的行为，在 Web 端主要有效取值有：

- auto 元素可以中断
- avoid 元素不能中断

<Demo name="break-inside" />

## box-decoration-break

指定分栏内容分隔渲染时的边缘，取值有：

- slice 断开的元素整体渲染，边缘像被割开
- clone 断开的元素各部分独立渲染

<Demo name="box-decoration-break" />

多栏布局中该属性在 Chrome 中无法达到预期效果，据说 Chrome 的这个属性对行内元素有效，试了下不太行（Chrome 92）。

<Demo name="inline-box-decoration-break" />
