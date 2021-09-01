# 属性值全局关键字

## inherit 继承

继承父元素的属性值

## initial 初始值

可以把当前 CSS 属性的计算值还原成 CSS 语法中规定的 **（属性的）** 初始值。

注意 `initial` 对应的初始值，不是当前元素的属性初始值。

比如`display`属性的初始值是`inline`，无论 `display: initial` 给到的元素是 `<div>`、`<span>` 还是 `<p>`, 效果都是 `display: inline`.

## unset 不固定值

如果当前属性是具有继承特性的，则等同于 `inherit`

如果当前属性是没有继承特性的，则等同于 `initial`

可用于重置浏览器 user agent 样式，不需要逐个覆盖，只需要 `all: unset`.

## revert 恢复

`revert` 可以使 CSS 属性值恢复成当前元素的当前属性的浏览器默认值。
