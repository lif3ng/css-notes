# 选择器

## 元素选择器

即 HTML 标签名称,`p` `div`

## ID 选择器

`#id`

## 类选择器

`.class`

## 关系组合

` +>~` todo

## 属性选择器

### 存在某属性

`[attr]` 表示存在某属性

<Demo name="attr" />

### 精准匹配属性值

`[attr="value"]` 表示具体属性为特定值时精准选择

<Demo name="attr-equal" />

### 根据部分属性值选择

`[foo|="bar"]` 匹配 `bar` 或 **以 `bar-` 开头** 的值，常用于 `lang` 属性。

<Demo name="attr-bar-equal" />

`[foo~="bar"]` 匹配包含 `bar` 的一组词。类选择器 `.bar` 等价于 `[class~="bar"]`.

## 参考

https://www.w3.org/TR/selectors
