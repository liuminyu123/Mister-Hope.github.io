---
title: 压缩
---

我们经常会在 Windows 系统上使用 “.zip”格式压缩文件，其实“.zip”格式文件是 Windows 和 linux 系统都通用的压缩文件类型，属于几种主流的压缩格式(zip、rar 等)之一，是一种相当简单的分别压缩每个文件的存储格式，

本节要讲的 zip 命令，类似于 Windows 系统中的 winzip 压缩程序，其基本格式如下:
[root@localhost ~]#zip [选项] 压缩包名 源文件或源目录列表

注意，zip 压缩命令需要手工指定压缩之后的压缩包名，注意写清楚扩展名，以便解压缩时使用。

该命令常用的几个选项及各自的含义如表 1 所示。

表 1 zip 命令常用选项及含义
| 选项 | 含义 |
| --------- | ------------------------------------------------------------------- |
| -r | 递归压缩目录，及将制定目录下的所有文件以及子目录全部压缩。 |
| -m | 将文件压缩之后，删除原始文件，相当于把文件移到压缩文件中。 |
| -v | 显示详细的压缩过程信息。 |
| -q | 在压缩的时候不显示命令的执行过程。 |
| -压缩级别 | 压缩级别是从 1~9 的数字，-1 代表压缩速度更快，-9 代表压缩效果更好。 |
| -u | 更新压缩文件，即往压缩文件中添加新文件。 |

【例 1】不论是文件压缩包，还是目录压缩包，都可以直接解压缩，例如:
[root@localhost ~]# unzip dir1.zip
Archive: dir1.zip
creating: dirl/

# 解压缩

【例 2】使用 -d 选项手动指定解压缩位置，例如:
[root@localhost ~]# unzip -d /tmp/ ana.zip
Archive: ana.zip
inflating: /tmp/anaconda-ks.cfg

# 把压缩包解压到指定位置

【例 1】基本压缩。
gzip 压缩命令非常简单，甚至不需要指定压缩之后的压缩包名，只需指定源文件名即可。我们来试试:
[root@localhost ~]# gzip install.log

# 压缩 instal.log 文件

[root@localhost ~]# ls
anaconda-ks.cfg install.log.gz install.log.syslog

# 压缩文件生成，但是源文件也消失了

【例 2】保留源文件压缩。
在使用 gzip 命令压缩文件时，源文件会消失，从而生成压缩文件。这时有些人会有强迫症，就逼问笔者:能不能在压缩文件的时候，不让源文件消失？好吧，也是可以的，不过很别扭。
[root@localhost ~]# gzip -c anaconda-ks.cfg >anaconda-ks.cfg.gz

# 使用-c 选项，但是不让压缩数据输出到屏幕上，而是重定向到压缩文件中，这样可以缩文件的同时不删除源文件

[root@localhost ~]# ls
anaconda-ks.cfg anaconda-ks.cfg.gz install.log.gz install.log.syslog

# 可以看到压缩文件和源文件都存在

【例 3】 压缩目录。
我们可能会想当然地认为 gzip 命令可以压缩目录。 我们来试试:
[root@localhost ~]# mkdir test
[root@localhost ~]# touch test/test1
[root@localhost ~]# touch test/test2
[root@localhost ~]# touch test/test3 #建立测试目录，并在里面建立几个测试文件
[root@localhost ~]# gzip -r test/

# 压缩目录，并没有报错

[root@localhost ~]# ls
anaconda-ks.cfg anaconda-ks.cfg.gz install.log.gz install.log.syslog test

# 但是查看发现 test 目录依然存在，并没有变为压缩文件

[root@localhost ~]# ls test/
testl .gz test2.gz test3.gz

# 原来 gzip 命令不会打包目录，而是把目录下所有的子文件分别压缩

在 Linux 中，打包和压缩是分开处理的。而 gzip 命令只会压缩，不能打包，所以才会出现没有打包目录，而只把目录下的文件进行压

gunzip 是一个使用广泛的解压缩命令，它用于解压被 gzip 压缩过的文件(扩展名为 .gz)。
对于解压被 gzip 压缩过的文件，还可以使用 gzip 自己，即 gzip -d 压缩包。

gunzip 命令的基本格式为:
[root@localhost ~]# gunzip [选项] 文件

该命令常用的选项及含义如表 1 所示。

表 1 gunzip 命令常用选项及含义
| 选项 | 含义 |
| ---- | -------------------------------------------------- |
| -r | 递归处理，解压缩指定目录下以及子目录下的所有文件。 |
| -c | 把解压缩后的文件输出到标准输出设备。 |
| -f | 强制解压缩文件，不理会文件是否已存在等情况。 |
| -l | 列出压缩文件内容。 |
| -v | 显示命令执行过程。 |
| -t | 测试压缩文件是否正常，但不对其做解压缩操作。 |
【例 1】直接解压缩文件。
[root@localhost ~]# gunzip install.log.gz

当然，"gunzip -r"依然只会解压缩目录下的文件，而不会解打包。要想解压缩".gz"格式，还可以使用 "gzip -d"命令，例如:
[root@localhost ~]# gzip -d anaconda-ks.cfg.gz

【例 2】要解压缩目录下的内容，则需使用 "-r" 选项，例如:
[root@localhost ~]# gunzip -r test/

注意，如果我们压缩的是一个纯文本文件，则可以直接使用 zcat 命令在不解压缩的情况下查看这个文本文件中的内容。例如:
[root@localhost ~]# zcat anaconda-ks.cfg.gz

bzip2 命令同 gzip 命令类似，只能对文件进行压缩(或解压缩)，对于目录只能压缩(或解压缩)该目录及子目录下的所有文件。当执行压缩任务完成后，会生成一个以“.bz2”为后缀的压缩包。

".bz2"格式是 linux 的另一种压缩格式，从理论上来讲，".bz2"格式的算法更先进、压缩比更好；而 ".gz"格式相对来讲的时间更快。

bzip2 命令的基本格式如下:
[root@localhost ~]# bzip2 [选项] 源文件

源文件指的要压缩或解压缩的文件，该命令常用的选项及各自的含义如表 1 所示。

表 1 bzip2 命令常用选项及含义
| 选项 | 含义 |
| ----- | ------------------------------------------------------------------------------------------------------------ |
| -d | 执行解压缩，此时该选项后的源文件应为标记有 .bz2 后缀的压缩包文件。 |
| -k | bzip2 在压缩或解压缩任务完成后，会删除原始文件，若要保留原始文件，可使用此选项。 |
| -f | bzip2 在压缩或解压缩时，若输出文件与现有文件同名，默认不会覆盖现有文件，若使用此选项，则会强制覆盖现有文件。 |
| -t | 测试压缩包文件的完整性。 |
| -v | 压缩或解压缩文件时，显示详细信息。 |
| -数字 | 这个参数和 gzip 命令的作用一样，用于指定压缩等级，-1 压缩等级最低，压缩比最差；-9 压缩比最高 |
注意，gzip 只是不会打包目录，但是如果使用“-r”选项，则可以分别压缩目录下的每个文件；而 bzip2 命令则根本不支持压缩目录，也没有“-r”选项。

【例 1】直接压缩文件。
[root@localhost ~]# bzip2 anaconda-ks.cfg

# 压缩成".bz2"格式

此压缩命令会在压缩的同时删除源文件。

【例 2】压缩的同时保留源文件。
[root@localhost ~]# bzip2 -k install.log.syslog

# 压缩

[root@localhost ~]# ls
anaconda-ks.cfg.bz2 install.loginstalLlogsyslog install.logsyslogbz2

# 压缩文件和源文件都存在

要解压“.bz2”格式的压缩包文件，除了使用“bzip2 -d 压缩包名”命令外，还可以使用 bunzip2 命令。

bunzip2 命令的使用和 gunzip 命令大致相同，bunzip2 命令只能用于解压文件，即便解压目录，也是解压该目录以及所含子目录下的所有文件。

bunzip2 命令的基本格式为:
[root@localhost ~]# bunzip2 [选项] 源文件

此命令常用的选项以及各自的含义，如表 1 所示。

表 1 bunzip2 命令选项及含义
| 选项 | 含义 |
| ---- | ---------------------------------------------------------------------------------------- |
| -k | 解压缩后，默认会删除原来的压缩文件。若要保留压缩文件，需使用此参数。 |
| -f | 解压缩时，若输出的文件与现有文件同名时，默认不会覆盖现有的文件。若要覆盖，可使用此选项。 |
| -v | 显示命令执行过程。 |
| -L | 列出压缩文件内容。 |
先试试使用 gunzip2 命令来进行解压缩，例如:
[root@localhost ~]# bunzip2 anaconda-ks.cfg.bz2

".bz2" 格式也可以使用 "bzip2 -d 压缩包" 命令来进行解压缩，例如:
[root@localhost ~]# bzip2 -d install.log.syslog.bz2

和 ".gz" 格式一样，".bz2" 格式压缩的纯文本文件也可以不解压缩直接查看，使用的命令是 bzcat。例如:
[root@localhost ~]# bzcat install.log.syslog.bz2
