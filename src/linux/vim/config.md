Vim 配置文件(.vimrc)，Vim 配置教程
Vim 启动时，会根据配置文件(.vimrc)来设置 Vim，因此我们可以通过此文件来定制适合自己的 Vim。

Vim 配置文件分为系统配置文件和用户配置文件:

系统配置文件位于 Vim 的安装目录(默认路径为 /etc/.vimrc)；

用户配置文件位于主目录 ~/.vimrc，即通过执行 vim ~/.vimrc 命令即可对此配置文件进行合理修改。通常情况下，Vim 用户配置文件需要自己手动创建。

注意，Vim 用户配置文件比系统配置文件的优先级高，换句话说，Vim 启动时，会优先读取 Vim 用户配置文件(位于主目录中的)，所以我们只需要修改用户配置文件即可(不建议直接修改系统配置文件)。

Vim 提供的环境配置参数有很多，本节不一一列举，大家可以在 Vim 中输入&ldquo;:set all&rdquo;指令来查询，本节仅对常用的几个功能设置做详细介绍。

表 1 Vim 环境设置参数
设置参数|功能描述
-|-
set fileencodings=utf-8,ucs-bom,gb18030,gbk,gb2312,cp936
set termencoding=utf-8
set encoding=utf-8|设置编码格式，encoding 选项用于缓存的文本、寄存器、Vim 脚本文件等；fileencoding 选项是 Vim 写入文件时采用的编码类型；termencoding 选项表示输出到终端时采用的编码类型。
set nu
set number|nu 是 number 的缩写，所以上面两个配置命令是完全等效的，二选一即可。取消行号可使用 set nonu。
set cursorline|突出显示当前行。
set mouse=a
set selection=exclusive
set selectmode=mouse,key|Vim 编辑器里默认是不启用鼠标的，通过此设置即可启动鼠标。
set autoindent|设置自动缩进，即每行的缩进同上一节相同。
set tabstop=4|设置 Tab 键宽度为 4 个空格。

注意，表中各配置参数前面可以添加冒号(:)，也可以省略，两种写法都可以。

通过以上方式，可以对用户配置文件(.vimrc)进行编辑，进而实现对 Vim 的永久自定义。

在 Vim 编辑模式中，通过 &ldquo;:set nu&rdquo; 命令也可以让 Vim 显示行号，但只是临时有效，下次使用 Vim 编辑文件还是不显示行号。而本节介绍的编辑配置文件设置 Vim 的方式，对 Vim 的设置是永久的。
