# CSS Shapes 布局

CSS Shapes 需要和 float 搭配使用，以实现不规则图文环绕效果。

## shape-outside

支持的属性值分为 4 类：

- none
- `<shape-box>`
- `<basic-shape>`
- `<image>`

### `<shape-box>`

指定文字环绕时依照盒子的哪个边缘来计算，取值为 4 中基本盒模型：`margin-box`, `border-box`, `padding-box`, `content-box`.
<Demo name="shape-box" />

### `<basic-shape>`

基本图形函数，包括：

- circle() 圆

```
circle( [<shape-radius>]? [at <position>]? )
```

- ellipse() 椭圆

```
ellipse( [<shape-radius>{2}]? [at <position>]? )
```

半径分别为水平半径和垂直半径， 除了长度还支持 `farthest-side`, `closest-side` 两个关键字，代表距离浮动元素边缘的最长和最短距离，和 at 的具体位置相关。

- inset() 内矩形

```
inset( <shape-arg>{1,4} [round <border-radius>]? )
```

四个值上右下左，可指定具体半径大小圆角

- polygon() 多边形

```
polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )
```

`<fill-rule>`可选值为 nonzero 和 evenodd. 后面为多个点坐标 `x1 y1, x2 y2, ...`.

下面的 demo 需要通过浏览器 devtools 查看形状区域。

<Demo name="shape" />

### `<image>` todo

## shape-margin

属性值只有一个长度值。从 0 到浮动元素边界。
<Demo name="margin" />

## shape-image-threshold

指文字环绕时目标图像的半透明阈值，默认为 0，即完全不透明才环绕。

<Demo name="threshold" />
