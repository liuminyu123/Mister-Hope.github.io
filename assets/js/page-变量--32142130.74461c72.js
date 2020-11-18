(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{1104:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("变量的概念基本上和初中代数的方程变量是一致的，只是在计算机程序中，变量不仅可以是数字，还可以是任意数据类型。")]),s._v(" "),a("h2",{attrs:{id:"标识符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标识符"}},[s._v("#")]),s._v(" 标识符")]),s._v(" "),a("p",[s._v("标识符 (identifier) 指的是用来识别各种值的合法名称。最常见的标识符就是变量名，以及后面要提到的函数名。JavaScript 语言的标识符对大小写敏感，所以 "),a("code",[s._v("a")]),s._v(" 和 "),a("code",[s._v("A")]),s._v(" 是两个不同的标识符。")]),s._v(" "),a("p",[s._v("标识符有一套命名规则，不符合规则的就是非法标识符。JavaScript 引擎遇到非法标识符，就会报错。")]),s._v(" "),a("p",[s._v("简单说，标识符命名规则如下。")]),s._v(" "),a("ul",[a("li",[s._v("第一个字符，可以是任意 Unicode 字母(包括英文字母和其他语言的字母)，以及美元符号 ("),a("code",[s._v("$")]),s._v(") 和下划线 ("),a("code",[s._v("_")]),s._v(")。")]),s._v(" "),a("li",[s._v("第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字 "),a("code",[s._v("0-9")]),s._v("。")])]),s._v(" "),a("p",[s._v("下面这些都是合法的标识符。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("arg0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n_tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n$elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nπ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("下面这些则是不合法的标识符。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("a  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第一个字符不能是数字")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 同上")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 标识符不能包含星号")]),s._v("\na"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 标识符不能包含加号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 标识符不能包含减号或连词线")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("中文是合法的标识符，可以用作变量名:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" 临时变量 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("显然老旧的浏览器不会支持这个，所以请不要给自己找麻烦。")])]),s._v(" "),a("p",[s._v("另外 JavaScript 有一些 保留字"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1"}},[s._v("[1]")]),a("a",{staticClass:"footnote-anchor",attrs:{id:"fnref1"}})]),s._v("，不能用作标识符。")]),s._v(" "),a("h2",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),a("p",[s._v("变量在 JavaScript 中用一个合法的标识符表示，在设计之初使用 "),a("code",[s._v("var")]),s._v(" 命令。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("但是由于其带来的不好效果"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn2"}},[s._v("[2]")]),a("a",{staticClass:"footnote-anchor",attrs:{id:"fnref2"}})]),s._v("，在后来，JavaScript 更改了声明变量的方式，使用 "),a("code",[s._v("let")]),s._v(" 与 "),a("code",[s._v("const")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 申明了变量 a，此时 a 的值为undefined")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" $b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 申明了变量 $b，同时给 $b 赋值，此时 $b 的值为 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" s_007 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"007"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// s_007 是一个字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" Answer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Answer 是一个布尔值 true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// t的值是 null")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mr.Hope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 声明了一个常量 person，值为 Mr.Hope")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 声明了一个常量 score，值为 500")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[a("code",[s._v("const")]),s._v(" 代表常量的声明，且该常量必须在一开始就被声明成具体的值，之后该值不再改变。")])]),s._v(" "),a("p",[s._v("在 JavaScript 中，使用等号 "),a("code",[s._v("=")]),s._v(" 对变量进行赋值。可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用 "),a("code",[s._v("let")]),s._v(" 申明一次，例如:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a 的值是整数 123")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ABC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a 变为字符串")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如 Java 是静态语言，赋值语句如下:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("int a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a 是整数类型变量，类型用 int 申明")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ABC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误: 不能把字符串赋给整型变量")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("和静态语言相比，动态语言更灵活，就是这个原因。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("请不要把赋值语句的等号等同于数学的等号。比如下面的代码:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果从数学上理解 "),a("code",[s._v("x = x + 2")]),s._v(" 那无论如何是不成立的，在程序中，赋值语句先计算右侧的表达式 "),a("code",[s._v("x + 2")]),s._v("，得到结果 "),a("code",[s._v("12")]),s._v("，再赋给变量 "),a("code",[s._v("x")]),s._v("。由于 "),a("code",[s._v("x")]),s._v(" 之前的值是 "),a("code",[s._v("10")]),s._v("，重新赋值后，"),a("code",[s._v("x")]),s._v(" 的值变成 "),a("code",[s._v("12")]),s._v("。")])]),s._v(" "),a("p",[s._v("要显示变量的内容，可以用 "),a("code",[s._v("console.log(x)")]),s._v("，打开 Chrome 的控制台就可以看到结果。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打印变量 x")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("您可以使用 "),a("code",[s._v("alert()")]),s._v("，使用 "),a("code",[s._v("console.log()")]),s._v(" 代替 "),a("code",[s._v("alert()")]),s._v(" 的好处是可以避免弹出烦人的对话框。")])]),s._v(" "),a("p",[s._v("如果一个变量没有声明就直接使用，JavaScript 会报错，告诉您变量未定义。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ReferenceError: x is not defined")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"strict-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strict-模式"}},[s._v("#")]),s._v(" strict 模式")]),s._v(" "),a("p",[s._v("JavaScript 在设计之初甚至并不强制要求用 "),a("code",[s._v("var")]),s._v(" 声明变量。这个设计错误带来了严重的后果: 如果一个变量没有通过 "),a("code",[s._v("var")]),s._v(" 声明就被使用，那么该变量就自动被声明为全局变量:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// i现在是全局变量")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在同一个页面的不同的 JavaScript 文件中，如果都不用 "),a("code",[s._v("var")]),s._v(" 申明，恰好都使用了变量 "),a("code",[s._v("i")]),s._v("，将造成变量 "),a("code",[s._v("i")]),s._v(" 互相影响，产生难以调试的错误结果。")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("var")]),s._v(" 声明的变量则不是全局变量，它的范围被限制在该变量被声明的函数体内(函数的概念将稍后讲解)，同名变量在不同的函数体内互不冲突。")]),s._v(" "),a("p",[s._v("为了修补 JavaScript 这一严重设计缺陷，ECMA 在后续规范中推出了 "),a("code",[s._v("strict")]),s._v(" 模式，在 "),a("code",[s._v("strict")]),s._v(" 模式下运行的 "),a("code",[s._v("JavaScript")]),s._v(" 代码，强制使用变量前声明变量，未声明变量就使用的，将导致运行错误。")]),s._v(" "),a("p",[s._v("启用 "),a("code",[s._v("strict")]),s._v(" 模式的方法是在 JavaScript 代码的第一行写上:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"use strict"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这是一个字符串，不支持 "),a("code",[s._v("strict")]),s._v(" 模式的浏览器会把它当做一个字符串语句执行，支持 "),a("code",[s._v("strict")]),s._v(" 模式的浏览器将开启 "),a("code",[s._v("strict")]),s._v(" 模式运行 JavaScript。")]),s._v(" "),a("p",[s._v("不用 "),a("code",[s._v("var")]),s._v(" 声明的变量会被视为全局变量，为了避免这一缺陷，所有的 JavaScript 代码都应该使用 "),a("code",[s._v("strict")]),s._v(" 模式。我们在后面编写的 JavaScript 代码将全部采用 "),a("code",[s._v("strict")]),s._v(" 模式。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("微信小程序默认执行 "),a("code",[s._v("use strict")]),s._v("。而且 Mr.Hope 所有的项目都是在严格环境下执行。大家在学习时也强烈建议开启该环境模式。")])]),s._v(" "),a("hr",{staticClass:"footnotes-sep"}),s._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[s._v("JavaScript 的保留字:")]),s._v(" "),a("p",[s._v("arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[s._v("↩︎")])])]),s._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[a("p",[s._v("历史遗留问题-变量提升")]),s._v(" "),a("p",[s._v("JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升(hoisting)。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面代码首先使用"),a("code",[s._v("console.log")]),s._v("方法，在控制台(console)显示变量"),a("code",[s._v("a")]),s._v("的值。这时变量"),a("code",[s._v("a")]),s._v("还没有声明和赋值，所以这是一种错误的做法，但是实际上不会报错。因为存在变量提升，真正运行的是下面的代码。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("最后的结果是显示"),a("code",[s._v("undefined")]),s._v("，表示变量"),a("code",[s._v("a")]),s._v("已声明，但还未赋值。")]),s._v(" "),a("p",[s._v("为了解决这个问题，ES6 中新规范的 "),a("code",[s._v("let")]),s._v(" 和 "),a("code",[s._v("const")]),s._v(" 命令遇到类似问题直接报错。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Uncaught ReferenceError: Cannot access 'a' before initialization")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),s._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[s._v("↩︎")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);