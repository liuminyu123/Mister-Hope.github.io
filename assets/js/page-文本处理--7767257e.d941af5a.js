(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{1439:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"文本处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文本处理"}},[s._v("#")]),s._v(" 文本处理")]),s._v(" "),t("h2",{attrs:{id:"cat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[s._v("#")]),s._v(" cat")]),s._v(" "),t("p",[t("code",[s._v("cat")]),s._v("可以文件的内容，显示在标准输出。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" text1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" apple\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" pear\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" banana\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("它也可以同时输出多个文件内容。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" text1 text2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("它与重定向结合，就可以合并多个文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并文本文件")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" text* "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" text.all\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并二进制文件")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" movie.mpeg.0* "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" movie.mpeg\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("如果调用"),t("code",[s._v("cat")]),s._v("命令时没有任何参数，它将读取标准输入，然后显示到标准输出。按下"),t("code",[s._v("Ctrl + d")]),s._v("，将会结束"),t("code",[s._v("cat")]),s._v("读取标准输入。利用这一点，可以将键盘输入写入指定文件，按下"),t("code",[s._v("Ctrl + d")]),s._v("结束输入。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" lazy_dog.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("它的参数如下。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-n")]),s._v(" 输出结果显示行号")]),s._v(" "),t("li",[t("code",[s._v("-s")]),s._v(" 将多个连续的空白行，输出为一行")]),s._v(" "),t("li",[t("code",[s._v("-A")]),s._v(" 输出结果中显示控制符，比如 Tab 键显示为"),t("code",[s._v("^I")]),s._v("，行尾显示"),t("code",[s._v("$")])])]),s._v(" "),t("p",[t("code",[s._v("cat")]),s._v("支持 Here document，显示多行文本。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("_EOF_\n<HTML>\n         <HEAD>\n                <TITLE>"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TITLE")]),s._v("</TITLE>\n         </HEAD>\n         <BODY>\n                <H1>"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TITLE")]),s._v("</H1>\n                <P>"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TIME_STAMP")]),s._v("</P>\n         </BODY>\n</HTML>\n_EOF_")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("Here document 常在脚本当中作为输入的手段。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -k2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("END\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" apple\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" pear\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" banana\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" END\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" apple\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" banana\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" pear\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("如果使用"),t("code",[s._v("<<-")]),s._v("代替"),t("code",[s._v("<<")]),s._v("，行首的 tab 键将被剥离。")]),s._v(" "),t("h2",{attrs:{id:"nl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nl"}},[s._v("#")]),s._v(" nl")]),s._v(" "),t("p",[t("code",[s._v("nl")]),s._v("命令为文本文件添加行号，显示在标准输出。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" example.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"sort"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[s._v("#")]),s._v(" sort")]),s._v(" "),t("p",[t("code",[s._v("sort")]),s._v("命令将文本文件的所有行排序后输出。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" file1.txt file2.txt file3.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" final_sorted_list.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("它的参数如下。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-b")]),s._v(" "),t("code",[s._v("--ignore-leading-blanks")]),s._v(" 默认情况下，排序用的是每行的第一个字符。这个参数忽略每行开头的空格，从第一个非空白字符开始排序。")]),s._v(" "),t("li",[t("code",[s._v("-f")]),s._v(" "),t("code",[s._v("--ignore-case")]),s._v(" 让排序不区分大小写。")]),s._v(" "),t("li",[t("code",[s._v("-n")]),s._v(" "),t("code",[s._v("--numeric-sort")]),s._v(" 按照数值排序，而不是字符值，用于行首是数值的情况。")]),s._v(" "),t("li",[t("code",[s._v("-r")]),s._v(" "),t("code",[s._v("--reverse")]),s._v(" 按相反顺序排序。结果按照降序排列，而不是升序。")]),s._v(" "),t("li",[t("code",[s._v("-k")]),s._v(" "),t("code",[s._v("--key=field1[,field2]")]),s._v(" 指定按照每行的第几个字段(从 1 开始)排序，而不是按照行首字符排序。该属性可以多个连用，用于指定多重排序标准，还可以指定每个字段指定排序标准，这些值与全局属性一致，比如 b(忽略开头的空格)，n(数值排序)，r(逆向排序)等等。")]),s._v(" "),t("li",[t("code",[s._v("-m")]),s._v(" "),t("code",[s._v("--merge")]),s._v(" 把每个参数看作是一个预先排好序的文件。把多个文件合并成一个排好序的文件，而没有执行额外的排序。")]),s._v(" "),t("li",[t("code",[s._v("-o")]),s._v(" "),t("code",[s._v("--output=file")]),s._v(" 把排好序的输出结果发送到文件，而不是标准输出。")]),s._v(" "),t("li",[t("code",[s._v("-t")]),s._v(" "),t("code",[s._v("--field-separator=char")]),s._v(" 定义字段分隔字符。默认情况下，字段由空格或制表符分隔。")]),s._v(" "),t("li",[t("code",[s._v("-u")]),s._v(" 输出结果中删除重复行")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" --key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,1")]),s._v(" --key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2n distros.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面命令中，第一个"),t("code",[s._v("--key")]),s._v("指定第一排序标准是只用第一字段("),t("code",[s._v("1,1")]),s._v(")，也可以指定使用第一字段第一个字符("),t("code",[s._v("1.1")]),s._v(")；第二排序标准是第二字段，按数值排序。")]),s._v(" "),t("h2",{attrs:{id:"uniq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uniq"}},[s._v("#")]),s._v(" uniq")]),s._v(" "),t("p",[t("code",[s._v("uniq")]),s._v("命令在排序后的行中，删除所有重复的行，保证所有输出没有重复。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /bin /usr/bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("它的参数如下。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-c")]),s._v(" 输出所有的重复行，并且每行开头显示重复的次数。")]),s._v(" "),t("li",[t("code",[s._v("-d")]),s._v(" 只输出重复行，而不是不重复的文本行。")]),s._v(" "),t("li",[t("code",[s._v("-f n")]),s._v(" 忽略每行开头的 n 个字段，字段之间由空格分隔，正如 sort 程序中的空格分隔符；然而， 不同于 sort 程序，uniq 没有选项来设置备用的字段分隔符。")]),s._v(" "),t("li",[t("code",[s._v("-i")]),s._v(" 在比较文本行的时候忽略大小写。")]),s._v(" "),t("li",[t("code",[s._v("-s n")]),s._v(" 跳过(忽略)每行开头的 n 个字符。")]),s._v(" "),t("li",[t("code",[s._v("-u")]),s._v(" 只是输出独有的文本行。这是默认的。")]),s._v(" "),t("li",[t("code",[s._v("-V")]),s._v(" 按照版本号排序。")])]),s._v(" "),t("p",[t("code",[s._v("-V")]),s._v("参数可以按版本号排列(从小到大)。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -V input.txt\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".15\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".0\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v(".2\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v(".0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("code",[s._v("-rV")]),s._v("参数可以按版本号逆序排列。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -rV input.txt\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v(".0\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v(".2\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".0\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".15\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"cut"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cut"}},[s._v("#")]),s._v(" cut")]),s._v(" "),t("p",[t("code",[s._v("cut")]),s._v("程序用来从文本行中抽取文本，并把其输出到标准输出。它能够接受多个文件参数或者标准输入。")]),s._v(" "),t("p",[s._v("它的参数如下。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-c char_list")]),s._v(" 抽取指定范围的文本")]),s._v(" "),t("li",[t("code",[s._v("-f field_list")]),s._v(" 抽取指定字段，字段之间可以 tab 分隔也可以逗号分隔")]),s._v(" "),t("li",[t("code",[s._v("-d delim_char")]),s._v(" 指定字段分隔符，默认是 tab 键")]),s._v(" "),t("li",[t("code",[s._v("--complement")]),s._v(" 抽取整个文本行，除了那些由-c 和／或-f 选项指定的文本。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 抽取每行的第三个字段")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" distros.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 抽取每行的第7到第10个字符")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("-10 distros.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 抽取每行的第23个到结尾的字符1")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("- distros.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定字段分隔符为冒号")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" /etc/passwd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"paste"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paste"}},[s._v("#")]),s._v(" paste")]),s._v(" "),t("p",[t("code",[s._v("paste")]),s._v("程序将多个文本文件按行合并，即每一行都由原来文本文件的每一行组成，显示在标准输出。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("paste")]),s._v(" distros-dates.txt distros-versions.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"wc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wc"}},[s._v("#")]),s._v(" wc")]),s._v(" "),t("p",[t("code",[s._v("wc")]),s._v("命令输出一个文本文件的统计信息(word count)，一共有三个值，分别为行数、词数和字节数。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" ls-output.txt\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7902")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64566")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("503634")]),s._v(" ls-output.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果使用"),t("code",[s._v("-l")]),s._v("参数，则只输出行数。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /bin /usr/bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2728")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"head"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[s._v("#")]),s._v(" head")]),s._v(" "),t("p",[t("code",[s._v("head")]),s._v("命令返回文本文件的头部，默认显示 10 行。")]),s._v(" "),t("p",[t("code",[s._v("-n")]),s._v("参数指定显示的行数。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" ls-output.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"tail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[s._v("#")]),s._v(" tail")]),s._v(" "),t("p",[t("code",[s._v("tail")]),s._v("命令返回文本文件的尾部，默认显示 10 行。")]),s._v(" "),t("p",[t("code",[s._v("-n")]),s._v("参数指定显示的行数。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" ls-output.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("-f")]),s._v("会实时追加显示新增的内容，常用于实时监控日志，按"),t("code",[s._v("Ctrl + c")]),s._v("停止。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f /var/log/messages\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"grep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[s._v("#")]),s._v(" grep")]),s._v(" "),t("p",[t("code",[s._v("grep")]),s._v("程序用于在指定文件之中，搜索符合某个模式的行，并把搜索结果输出到标准输出。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" keyword foo.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面命令输出"),t("code",[s._v("foo.txt")]),s._v("之中匹配"),t("code",[s._v("keyword")]),s._v("的行。")]),s._v(" "),t("p",[t("code",[s._v("grep")]),s._v("程序可以同时搜索多个文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" keyword f*.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面命令输出多个文件中匹配"),t("code",[s._v("keyword")]),s._v("的行。")]),s._v(" "),t("p",[t("code",[s._v("-l")]),s._v("参数输出匹配的文件名，而不是文件行。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -l bzip dirlist*.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果想搜索文件名，而不是文件内容，可以使用重定向。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /usr/bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面命令会输出"),t("code",[s._v("/usr/bin")]),s._v("目录中，文件名中包含子字符串"),t("code",[s._v("zip")]),s._v("的所有文件。")]),s._v(" "),t("p",[s._v("参数的含义。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-c")]),s._v("或"),t("code",[s._v("--count")]),s._v(" 输出匹配的数量，而不是匹配的文本行。如果使用了"),t("code",[s._v("-v")]),s._v("，则输出不匹配的数量。")]),s._v(" "),t("li",[t("code",[s._v("-h")]),s._v("或"),t("code",[s._v("--no-filename")]),s._v(" 应用于多文件搜索，不在每行匹配的文本前，输出文件名")]),s._v(" "),t("li",[t("code",[s._v("-i")]),s._v("或"),t("code",[s._v("--ignore-case")]),s._v(" 忽略大小写")]),s._v(" "),t("li",[t("code",[s._v("-l")]),s._v("或"),t("code",[s._v("--files-with-matches")]),s._v(" 输出包含匹配项的文件名，而不是文本行本身")]),s._v(" "),t("li",[t("code",[s._v("-L")]),s._v("或"),t("code",[s._v("--files-without-match")]),s._v(" 类似于"),t("code",[s._v("-l")]),s._v("，但输出不包含匹配项的文件名")]),s._v(" "),t("li",[t("code",[s._v("-n")]),s._v("或"),t("code",[s._v("--line-number")]),s._v(" 每个匹配行之前输出其对应的行号")]),s._v(" "),t("li",[t("code",[s._v("-v")]),s._v("或"),t("code",[s._v("--invert-match")]),s._v(" 只返回不符合模式的行")])]),s._v(" "),t("h2",{attrs:{id:"sed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sed"}},[s._v("#")]),s._v(" sed")]),s._v(" "),t("p",[t("code",[s._v("sed")]),s._v("是一个强大的文本编辑工具。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出前5行")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,5p'")]),s._v(" distros.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出包含指定内容的行")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/SUSE/p'")]),s._v(" distros.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出不包含指定内容的行")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/SUSE/!p'")]),s._v(" distros.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换内容(只替换第一个)")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/regexp/replacement/'")]),s._v(" distros.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换内容(全局替换)")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/regexp/replacement/g'")]),s._v(" distros.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);