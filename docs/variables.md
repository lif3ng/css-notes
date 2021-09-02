# CSS 变量

## 基本用法

- 使用`--`开头的属性名想作为变量使用
- 使用`var(--varname)`使用变量

<Demo name="basic" />

## var() 函数标准

```
var( <custom-property-name> [, <declaration-value> ]?)
```

- `<custom-property-name>` 为自定义属性名
- `<declaration-value>` 为备选值，当自定义属性**一定**无效时，会采用备选值。

### 使用备选值场景

认定为一定无效，才使用备选值，场景有：

- 空字符串 `--a-var:;`
- 使用全局关键字`inherit`,`initial`,`revert`,`unset`

除了这两种情况，都是可能有效的值，不会使用备选值。可能有效的值，如果不能正常使用，会按照`unset`关键字的规则进行渲染，根据属性继承性的不同采用不同的值。

### 空格尾随特性

```css
selector {
  --size: 20;
  font-size: var(--size) px;
}
```

上面的代码被 prettier 格式化成了 `font-size: var(--size) px;`, `px` 单位前有有一个空格，确实可以避免错误的发生。后面直接拼接单位，都会被拼接上一个空格，不在格式化过程就在 CSS 解析过程中，最后就成了`font-size: 20 px`，成了非法值，根据 font-size 属性的继承性最终显示父元素的 font-size 值。

如果确实需要数字和单位或百分号拼接，可以使用 calc() 函数实现。

## 变量重新赋值

在不同选择器层级可以将变量反复赋值

<Demo name="scope" />

## 参考

- https://www.w3.org/TR/css-variables/
