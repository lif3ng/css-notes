# 选择器

## 元素选择器

即 HTML 标签名称,`p` `div`

## ID 选择器

`#id`

## 类选择器

`.class`

## 伪类选择器

伪类的格式是：冒号 `:` 后跟一个词。

### 结构伪类

- `:root` 伪类用于选取文档的根元素，在 HTML 中根元素始终是 `html`.
- `:empty` 伪类用于选取没有任何内容（元素、文本节点）的元素。元素内只包含空格、换行，**不是**空元素，因为空白属于文本节点；元素内只包含注释，是空元素。`:empty` 是唯一一个在匹配时考虑文本节点的选择器。
  <Demo name="empty" />
- `:only-child` 伪类选择的元素是其父元素的唯一子元素，其隔壁可以有文本节点，文本节点不是元素。
  <Demo name="only-child" />

## 组合符（Combinator）

`combinator` 在 MDN 上被翻译为[“关系选择器”](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Combinators),个人感觉不太恰当。

从作用上看是用于组合多个选择器，达到描述文档结构关系的作用。从标准来看，从 [19990803](https://www.w3.org/TR/1999/WD-CSS3-selectors-19990803#combinators) 到 [level 4](https://www.w3.org/TR/selectors-4/#combinators) 使用的词都是 `combinator`, 跟选择器的意思挨不上边。所以在笔记中会称其为“组合符”，感觉更接近原意。

### 后代组合符（` `）

空格用于表示后代元素，包括直接子元素和更低层级的后代元素。

### 子元素组合符（`>`）

### 紧邻兄弟元素组合符(`+`)

### 后续兄弟元素组合符(`~`)

## 属性选择器

### 存在某属性

`[attr]` 表示存在某属性

<Demo name="attr" />

### 精准匹配属性值

`[attr="value"]` 表示具体属性为特定值时精准选择

<Demo name="attr-equal" />

### 根据部分属性值选择

此时该属性必须存在

`[foo|="bar"]` 匹配 `bar` 或 **以 `bar-` 开头** 的值，常用于 `lang` 属性。

<Demo name="attr-bar-equal" />

`[foo~="bar"]` 匹配包含 `bar` 的一组词。类选择器 `.bar` 等价于 `[class~="bar"]`.

`[foo*="bar"]` 匹配包含子串 `bar`的值

`[foo^="bar"]` 匹配以 `bar` 开头的值

`[foo$="bar"]` 匹配以 `bar` 结尾的值

通过 `i` 标识符可以使匹配值不区分大小写

<Demo name="attr-end-equal" />

## 参考

https://www.w3.org/TR/selectors
