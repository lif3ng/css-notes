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
- `:first-child` 伪类选择的是第一个子元素。
- `:last-child` 伪类选择的是最后一个子元素。
  <Demo name="first-last-child" />
- `:only-child` 伪类选择的元素是其父元素的唯一子元素。功能上等价于 `:first-child:last-child`.
  <Demo name="only-child" />
- `:nth-child(n)` 伪类用于选择第 n 个子元素。

  其中 `n` 的位置取值为[An + B 表达式](https://drafts.csswg.org/css-syntax-3/#anb-microsyntax), 典型可取值有：

  - 整数 `:nth-child(2)` 表示第二个子元素
  - 包含 n 的表达式 `nth-child(2n)` 表示第 2、4、6... 个子元素
  - 关键字
    - `even` 偶数 `:nth-child(even)` 等效于 `nth-child(2n)`
    - `odd` 奇数 `:nth-child(odd)` 等效于 `nth-child(2n+1)`

- `:nth-last-child(n)` 伪类用于选择倒数第 n 个子元素
- `:first-of-type` 伪类选择的元素是父元素的第一个该类型（html 标签）的元素。
- `:last-of-type` 伪类选择的元素是父元素的最后一个该类型的元素。
- `:only-of-type` 伪类选择的是在兄弟元素中间的唯一的那种（html 标签）元素
  <Demo name="only-of-type" />
- `:nth-of-type(n)` 第 n 个该类型元素
- `:nth-last-of-type(n)` 倒数第 n 个该类型元素

### 动态伪类

#### 超链接伪类

#### 用户操作伪类

### UI 状态伪类

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
