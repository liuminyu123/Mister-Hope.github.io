(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{1310:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("在 CSS 中，所有的元素都被一个个的“盒子(box)”包围着。")]),t._v(" "),n("h2",{attrs:{id:"块级与内联"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#块级与内联"}},[t._v("#")]),t._v(" 块级与内联")]),t._v(" "),n("p",[t._v("在 CSS 中我们广泛地使用两种“盒子” —— 块级盒子 (block box) 和 内联盒子 (inline box)。这两种盒子会在页面流(page flow)和元素之间的关系方面表现出不同的行为:")]),t._v(" "),n("p",[t._v("一个被定义成块级的(block)盒子会表现出以下行为:")]),t._v(" "),n("ul",[n("li",[t._v("盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽")]),t._v(" "),n("li",[t._v("每个盒子都会换行")]),t._v(" "),n("li",[n("code",[t._v("width")]),t._v(" 和 "),n("code",[t._v("height")]),t._v(" 属性可以发挥作用")]),t._v(" "),n("li",[t._v("内边距 (padding), 外边距 (margin) 和边框 (border) 会将其他元素从当前盒子周围“推开”")])]),t._v(" "),n("p",[t._v("除非特殊指定，诸如标题 ("),n("code",[t._v("<h1>")]),t._v("等) 和段落 ("),n("code",[t._v("<p>")]),t._v(") 默认情况下都是块级的盒子。")]),t._v(" "),n("p",[t._v("如果一个盒子对外显示为 "),n("code",[t._v("inline")]),t._v("，那么他的行为如下:")]),t._v(" "),n("ul",[n("li",[t._v("盒子不会产生换行。")]),t._v(" "),n("li",[n("code",[t._v("width")]),t._v(" 和 "),n("code",[t._v("height")]),t._v(" 属性将不起作用。")]),t._v(" "),n("li",[t._v("垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 "),n("code",[t._v("inline")]),t._v(" 状态的盒子推开。")]),t._v(" "),n("li",[t._v("水平方向的内边距、外边距以及边框会被应用而且也会把其他处于 "),n("code",[t._v("inline")]),t._v(" 状态的盒子推开。")])]),t._v(" "),n("p",[t._v("用做链接的 "),n("code",[t._v("<a>")]),t._v(" 元素、 "),n("code",[t._v("<span>")]),t._v("、 "),n("code",[t._v("<em>")]),t._v(" 以及 "),n("code",[t._v("<strong>")]),t._v(" 都是默认处于 "),n("code",[t._v("inline")]),t._v(" 状态的。")]),t._v(" "),n("p",[t._v("我们通过对盒子 "),n("code",[t._v("display")]),t._v(" 属性的设置，比如 "),n("code",[t._v("inline")]),t._v(" 或者 "),n("code",[t._v("block")]),t._v(" ，来控制盒子的外部显示类型。")]),t._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[t._v("相关信息")]),t._v(" "),n("p",[t._v("显示类型分为 "),n("strong",[t._v("内部")]),t._v(" 和 "),n("strong",[t._v("外部")]),t._v(" 显示类型。如上所述， CSS 的 box 模型有一个外部显示类型，来决定盒子是块级还是内联。")]),t._v(" "),n("p",[t._v("同样盒模型还有内部显示类型，它决定了盒子内部元素是如何布局的。默认情况下是按照正常文档流布局，也意味着它们和其他块元素以及内联元素一样(如上所述).")]),t._v(" "),n("p",[t._v("但是，我们可以通过使用类似 "),n("code",[t._v("flex")]),t._v(" 的 "),n("code",[t._v("display")]),t._v(" 属性值来更改内部显示类型。如果设置 "),n("code",[t._v("display: flex")]),t._v("，在一个元素上，外部显示类型是 "),n("code",[t._v("block")]),t._v("，但是内部显示类型修改为 "),n("code",[t._v("flex")]),t._v("。该盒子的所有直接子元素都会成为 "),n("code",[t._v("flex")]),t._v(" 元素，会根据 弹性盒子(Flexbox )规则进行布局。同样，我们也可以设置诸如 "),n("code",[t._v("inline-block")]),t._v(" "),n("code",[t._v("inline-flex")]),t._v(" 这种混合显示类型。")]),t._v(" "),n("p",[t._v("块级和内联布局是 web 上默认的行为，它被称为正常文档流， 因为如果没有其他说明，我们的盒子布局默认是块级或者内联。")])]),t._v(" "),n("h2",{attrs:{id:"盒模型介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#盒模型介绍"}},[t._v("#")]),t._v(" 盒模型介绍")]),t._v(" "),n("p",[t._v('所有 HTML 元素可以看作盒子，在 CSS 中，"'),n("strong",[t._v("Box Model")]),t._v('" 这一术语是用来设计和布局时使用。')]),t._v(" "),n("p",[t._v("CSS 盒模型定义了封装 HTML 元素的方式，它包括: 外边距，边框，内边距，和实际内容。")]),t._v(" "),n("p",[t._v("完整的 CSS 盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容。")]),t._v(" "),n("p",[t._v("下面的图片说明了盒子模型 (Box Model):")]),t._v(" "),n("p",[n("img",{attrs:{src:a(500),alt:"Box Model 示意图"}})]),t._v(" "),n("p",[t._v("不同部分的说明:")]),t._v(" "),n("ul",[n("li",[t._v("Content box (内容) - 盒子的内容，显示文本和图像，可以通过 "),n("code",[t._v("width")]),t._v(" 和 "),n("code",[t._v("height")]),t._v(" 设置大小。")]),t._v(" "),n("li",[t._v("Padding box (内边距) - 包围在内容区域外部的空白区域，通过 "),n("code",[t._v("padding")]),t._v(" 属性设置。")]),t._v(" "),n("li",[t._v("Border box (边框) - 围绕在填充和内容外的边框，通过 "),n("code",[t._v("border")]),t._v(" 属性设置。")]),t._v(" "),n("li",[t._v("Margin box (外边距) - 这是最外面的区域，是盒子和其他元素之间的空白区域，通过 "),n("code",[t._v("margin")]),t._v(" 属性设置。")])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px solid green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("为了正确设置元素在所有浏览器中的宽度和高度，您需要知道的盒模型是如何工作的。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[n("code",[t._v("padding")]),t._v(" 和 "),n("code",[t._v("margin")]),t._v(" 直译为 “填充” 和 “边距”，有些教程也会这么叫。")]),t._v(" "),n("p",[t._v("所以您需要清楚 “填充” 和 “内边距”、“边距” 和 “外边距” 说的是一回事。")])]),t._v(" "),n("h3",{attrs:{id:"标准盒模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标准盒模型"}},[t._v("#")]),t._v(" 标准盒模型")]),t._v(" "),n("p",[t._v("当您指定一个 CSS 元素的宽度和高度属性时，您只是设置内容区域(content box)的宽度和高度。"),n("code",[t._v("padding")]),t._v(" 和 "),n("code",[t._v("border")]),t._v(" 再加上设置的宽高一起决定整个盒子的大小。")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("margin 不计入实际大小，但它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到 margin。")])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px solid green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("元素盒子的大小为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) = 400px")]),t._v(" "),n("p",[t._v("元素占据的空间为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) + 50px (左 + 右边距) = 450px")]),t._v(" "),n("p",[t._v("试想一下，您只有 250px 的空间。让我们设置总宽度为 250px 的元素:")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 220px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid gray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("最终元素的总宽度计算公式是这样的:")]),t._v(" "),n("p",[t._v("元素的宽度 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框\n元素占据的水平空间 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 + 左边距 + 右边距")]),t._v(" "),n("p",[t._v("元素的总高度最终计算公式是这样的:")]),t._v(" "),n("p",[t._v("元素的高度 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框\n元素占据的垂直空间 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 + 上边距 + 下边距")]),t._v(" "),n("h3",{attrs:{id:"替代-ie-盒模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#替代-ie-盒模型"}},[t._v("#")]),t._v(" 替代(IE)盒模型")]),t._v(" "),n("p",[t._v("您可能会认为盒子的大小还要加上边框和内边距，这样很麻烦，而且您的想法是对的! 因为这个原因，CSS 还有一个替代盒模型。使用这个模型，所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。使用上面相同的样式得到 (width = 350px, height = 150px).")]),t._v(" "),n("p",[t._v("默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 "),n("code",[t._v("box-sizing: border-box")]),t._v(" 来实现。这样就可以告诉浏览器使用 "),n("code",[t._v("border-box")]),t._v(" 来定义区域，从而设定您想要的大小。")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("如果您希望所有元素都使用替代模式，而且确实很常用，设置 "),n("code",[t._v("box-sizing")]),t._v(" 在 "),n("code",[t._v("<html>")]),t._v(" 元素上，然后设置所有元素继承该属性。这是一个很有用的小技巧:")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*,\n*::before,\n*::after")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inherit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("h3",{attrs:{id:"使用调试工具来查看盒模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用调试工具来查看盒模型"}},[t._v("#")]),t._v(" 使用调试工具来查看盒模型")]),t._v(" "),n("p",[t._v("浏览器开发者工具 可以使您更容易地理解 box 模型。您可以看到元素的大小以及它的外边距、内边距和边框。这是一个很好的检查元素大小的方式，可以便捷的判断您的盒子大小是否符合预期。")]),t._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[t._v("相关信息")]),t._v(" "),n("p",[t._v("更多盒模型相关内容可见 "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box_model",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"控制盒模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#控制盒模型"}},[t._v("#")]),t._v(" 控制盒模型")]),t._v(" "),n("p",[n("code",[t._v("margin")]),t._v("、"),n("code",[t._v("padding")]),t._v(" 和 "),n("code",[t._v("border")]),t._v(" 是属性的简写，允许我们一次设置盒子的四个边。这些简写等价于分别控制盒子的不同边的普通写法。")]),t._v(" "),n("h3",{attrs:{id:"外边距"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#外边距"}},[t._v("#")]),t._v(" 外边距")]),t._v(" "),n("p",[t._v("外边距是盒子周围一圈看不到的空间。它会把其他元素从盒子旁边推开。外边距属性值可以为正也可以为负。设置负值会导致和其他内容重叠。无论使用标准模型还是替代模型，外边距总是在计算可见部分后额外添加。")]),t._v(" "),n("p",[t._v("我们可以使用 "),n("code",[t._v("margin")]),t._v(" 属性一次控制一个元素的所有边距，或者每边单独使用等价的普通属性控制:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("margin-top")])]),t._v(" "),n("li",[n("code",[t._v("margin-right")])]),t._v(" "),n("li",[n("code",[t._v("margin-bottom")])]),t._v(" "),n("li",[n("code",[t._v("margin-left")])])]),t._v(" "),n("h4",{attrs:{id:"外边距折叠"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#外边距折叠"}},[t._v("#")]),t._v(" 外边距折叠")]),t._v(" "),n("p",[t._v("如果您有两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("案例")]),t._v(" "),n("p",[t._v("我们有两个段落。顶部段落 "),n("code",[t._v("margin-bottom")]),t._v("为 "),n("code",[t._v("50px")]),t._v("。第二段的 "),n("code",[t._v("margin-top")]),t._v(" 为 "),n("code",[t._v("30px")]),t._v("。因为外边距折叠的概念，所以框之间的实际外边距是 "),n("code",[t._v("50px")]),t._v("，而不是两个外边距的总和。")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I am paragraph one."),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("two"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I am paragraph two."),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".one")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".two")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])])]),t._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[t._v("外边距重叠")]),t._v(" "),n("p",[t._v("有许多规则规定了什么时候外边距会折叠，什么时候不会折叠。相关更多信息，请参阅 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",target:"_blank",rel:"noopener noreferrer"}},[t._v("外边距重叠"),n("OutboundLink")],1),t._v("。初学时您需要首先记住外边距会折叠，如果您用外边距创建空间而没有得到您想要的效果，请参阅上方链接寻找原因。")])]),t._v(" "),n("h3",{attrs:{id:"边框"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#边框"}},[t._v("#")]),t._v(" 边框")]),t._v(" "),n("p",[t._v("边框是在边距和填充框之间绘制的。如果您正在使用标准的盒模型，边框的大小将添加到框的宽度和高度。如果您使用的是替代盒模型，那么边框的大小会使内容框更小，因为它会占用一些可用的宽度和高度。")]),t._v(" "),n("p",[t._v("为边框设置样式时，有大量的属性可以使用。由于有四个边框，每个边框都有样式、宽度和颜色，我们可能需要对它们进行操作。")]),t._v(" "),n("p",[t._v("可以使用 "),n("code",[t._v("border")]),t._v(" 属性一次设置所有四个边框的宽度、颜色和样式。")]),t._v(" "),n("p",[t._v("分别设置每边的宽度、颜色和样式，可以使用:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("border-top")])]),t._v(" "),n("li",[n("code",[t._v("border-right")])]),t._v(" "),n("li",[n("code",[t._v("border-bottom")])]),t._v(" "),n("li",[n("code",[t._v("border-left")])])]),t._v(" "),n("p",[t._v("设置所有边的颜色、样式或宽度，请使用以下属性:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("border-width")])]),t._v(" "),n("li",[n("code",[t._v("border-style")])]),t._v(" "),n("li",[n("code",[t._v("border-color")])])]),t._v(" "),n("p",[t._v("设置单边的颜色、样式或宽度，可以使用最细粒度的普通属性之一:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("border-top-width")])]),t._v(" "),n("li",[n("code",[t._v("border-top-style")])]),t._v(" "),n("li",[n("code",[t._v("border-top-color")])]),t._v(" "),n("li",[n("code",[t._v("border-right-width")])]),t._v(" "),n("li",[n("code",[t._v("border-right-style")])]),t._v(" "),n("li",[n("code",[t._v("border-right-color")])]),t._v(" "),n("li",[n("code",[t._v("border-bottom-width")])]),t._v(" "),n("li",[n("code",[t._v("border-bottom-style")])]),t._v(" "),n("li",[n("code",[t._v("border-bottom-color")])]),t._v(" "),n("li",[n("code",[t._v("border-left-width")])]),t._v(" "),n("li",[n("code",[t._v("border-left-style")])]),t._v(" "),n("li",[n("code",[t._v("border-left-color")])])]),t._v(" "),n("p",[t._v("设置边框的颜色、样式或宽度，可以使用最细粒度的普通属性或者简写属性。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("案例")]),t._v(" "),n("p",[t._v("请自行动手操作。")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Change my borders."),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px dotted green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid black"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px double "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgb")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("23"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 45"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 145"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #333333"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top-style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dotted"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hotpink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])])]),t._v(" "),n("h3",{attrs:{id:"内边距"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内边距"}},[t._v("#")]),t._v(" 内边距")]),t._v(" "),n("p",[t._v("内边距位于边框和内容区域之间。与外边距不同，您不能有负数量的内边距，所以值必须是 0 或正的值。应用于元素的任何背景都将显示在内边距后面，内边距通常用于将内容推离边框。")]),t._v(" "),n("p",[t._v("同 "),n("code",[t._v("margin")]),t._v("，我们可以使用 "),n("code",[t._v("padding")]),t._v(" 简写属性控制元素所有边，或者每边单独使用等价的普通属性:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("padding-top")])]),t._v(" "),n("li",[n("code",[t._v("padding-right")])]),t._v(" "),n("li",[n("code",[t._v("padding-bottom")])]),t._v(" "),n("li",[n("code",[t._v("padding-left")])])]),t._v(" "),n("h2",{attrs:{id:"inline-block"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inline-block"}},[t._v("#")]),t._v(" inline-block")]),t._v(" "),n("p",[n("code",[t._v("display")]),t._v(" 有一个特殊的值，它在内联和块之间提供了一个中间状态。这对于以下情况非常有用: 您不希望一个项切换到新行，但希望它可以设定宽度和高度，并避免上面看到的重叠。")]),t._v(" "),n("p",[t._v("一个元素使用 "),n("code",[t._v("display: inline-block")]),t._v("，实现我们需要的块级的部分效果:")]),t._v(" "),n("ul",[n("li",[t._v("设置 "),n("code",[t._v("width")]),t._v(" 和 "),n("code",[t._v("height")]),t._v(" 属性会生效。")]),t._v(" "),n("li",[n("code",[t._v("padding")]),t._v(", "),n("code",[t._v("margin")]),t._v(", 以及 "),n("code",[t._v("border")]),t._v(" 会推开其他元素。")])]),t._v(" "),n("p",[t._v("但是，它不会跳转到新行，如果显式添加 "),n("code",[t._v("width")]),t._v(" 和 "),n("code",[t._v("height")]),t._v(" 属性，它只会变得比其内容更大。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("当您想要通过添加内边距使链接具有更大的命中区域时，这是很有用的。")]),t._v(" "),n("p",[t._v("比如 "),n("code",[t._v("<a>")]),t._v(" 是像 "),n("code",[t._v("<span>")]),t._v(" 一样的内联元素；你可以使用 "),n("code",[t._v("display: inline-block")]),t._v(" 来设置内边距，让用户更容易点击链接。")])])])}),[],!1,null,null,null);s.default=e.exports},500:function(t,s){t.exports="data:image/gif;base64,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"}}]);