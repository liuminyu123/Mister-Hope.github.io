# tar 命令

linux 系统中，最常用的归档(打包)命令就是 tar，该命令可以将许多文件一起保存到一个单独的磁带或磁盘中进行归档。不仅如此，该命令还可以从归档文件中还原所需文件，也就是打包的反过程，称为解打包。

::: tip
使用 tar 命令归档的包通常称为 tar 包(tar 包文件都是以“.tar”结尾的)。
:::

## tar 命令做打包操作

当 tar 命令用于打包操作时，该命令的基本格式为:

```sh
[root@localhost ~]#tar [选项] 源文件或目录
```

此命令常用的选项及各自的含义如下:

| 选项    | 含义                                                                           |
| ------- | ------------------------------------------------------------------------------ |
| -c      | 将多个文件或目录进行打包。                                                     |
| -A      | 追加 tar 文件到归档文件。                                                      |
| -f 包名 | 指定包的文件名。包的扩展名是用来给管理员识别格式的，所以一定要正确指定扩展名； |
| -v      | 显示打包文件过程；                                                             |

需要注意的是，在使用 tar 命令指定选项时可以不在选项前面输入“-”。例如，使用“cvf”选项和 “-cvf”起到的作用一样。

下面给大家举几个例子，一起看看如何使用 tar 命令打包文件和目录。

1. 打包文件和目录。

   ```sh
   [root@localhost ~]# tar -cvf anaconda-ks.cfg.tar anaconda-ks.cfg
   #把anacondehks.cfg打包为 anacondehks.cfg.tar文件
   ```

   选项 "`-cvf`" 一般是习惯用法，记住打包时需要指定打包之后的文件名，而且要用 "`.tar`" 作为扩展名。打包目录也是如此:

   ```sh
   [root@localhost ~]# ll -d test/
   drwxr-xr-x 2 root root 4096 6月 17 21:09 test/
   # test是我们之前的测试目录

   [root@localhost ~]# tar -cvf test.tar test/
   test/
   test/test3
   test/test2
   test/test1

   # 把目录打包为test.tar文件
   ```

   tar 命令也可以打包多个文件或目录，只要用空格分开即可。例如:

   ```sh
   [root@localhost ~]# tar -cvf ana.tar anaconda-ks.cfg /tmp/

   # 把anaconda-ks.cfg文件和/tmp目录打包成ana.tar文件包
   ```

2. 打包并压缩目录

   首先声明一点，压缩命令不能直接压缩目录，必须先用 tar 命令将目录打包，然后才能用 gzip 命令或 bzip2 命令对打包文件进行压缩。例如:

   ```sh
   [root@localhost ~]#ll -d test test.tar
   drwxr-xr-x 2 root root 4096 6月 17 21:09 test
   -rw-r--r-- 1 root root 10240 6月 18 01:06 test.tar

   # 我们之前已经把test目录打包成test.tar文件

   [root@localhost ~]# gzip test.tar
   [root@localhost ~]# ll test.tar.gz
   -rw-r--r-- 1 root root 176 6月 18 01:06 test.tar.gz

   # gzip命令会把test.tar压缩成test.tar.gz
   ```

## tar 命令做解打包操作

当 tar 命令用于对 tar 包做解打包操作时，该命令的基本格式如下:

```sh
[root@localhost ~]#tar [选项] 压缩包
```

当用于解打包时，常用的选项与含义如下:

| 选项    | 含义                                                       |
| ------- | ---------------------------------------------------------- |
| -x      | 对 tar 包做解打包操作。                                    |
| -f      | 指定要解压的 tar 包的包名。                                |
| -t      | 只查看 tar 包中有哪些文件或目录，不对 tar 包做解打包操作。 |
| -C 目录 | 指定解打包位置。                                           |
| -v      | 显示解打包的具体过程。                                     |

其实解打包和打包相比，只是把打包选项 "`-cvf`" 更换为 "`-xvf`"。我们来试试:

```sh
[root@localhost ~]# tar -xvf anaconda-ks.cfg. tar
# 解打包到当前目录下
```

如果使用 "`-xvf`" 选项，则会把包中的文件解压到当前目录下。如果想要指定解压位置，则需要使用 "`-C`(大写)" 选项。例如:

```sh
[root@localhost ~]# tar -xvf test.tar -C /tmp

# 把文件包test.tar解打包到/tmp/目录下
```

如果只想查看文件包中有哪些文件，则可以把解打包选项 "-x" 更换为测试选项 "-t"。例如:

```sh
[root@localhost ~]# tar -tvf test.tar
drwxr-xr-x root/root 0 2016-06-17 21:09 test/
-rw-r-r- root/root 0 2016-06-17 17:51 test/test3
-rw-r-r- root/root 0 2016-06-17 17:51 test/test2
-rw-r-r- root/root 0 2016-06-17 17:51 test/test1

# 会用长格式显示test.tar文件包中文件的详细信息
```

## tar 命令做打包压缩(解压缩解打包)操作

你可能会觉得 Linux 实在太不智能了，一个打包压缩，居然还要先打包成 "`.tar`" 格式，再压缩成 "`.tar.gz`" 或 "`.tar.bz2`" 格式。其实 tar 命令是可以同时打包压缩的，前面的讲解之所打包和压缩分开，是为了让大家了解在 Linux 中打包和压缩的不同。

当 tar 命令同时做打包压缩的操作时，其基本格式如下:

```sh
[root@localhost ~]#tar [选项] 压缩包 源文件或目录
```

此处常用的选项有以下 2 个，分别是:

- `-z`:压缩和解压缩 ".tar.gz" 格式；

- `-j`:压缩和解压缩 ".tar.bz2"格式。

【例 1】压缩与解压缩 ".tar.gz"格式。

```sh
[root@localhost ~]# tar -zcvf tmp.tar.gz /tmp/

# 把/temp/目录直接打包压缩为".tar.gz"格式，通过"-z"来识别格式，"-cvf"和打包选项一致
```

解压缩也只是在解打包选项 "-xvf" 前面加了一个 "-z" 选项。

```sh
[root@localhost ~]# tar -zxvf tmp.tar.gz

# 解压缩与解打包".tar.gz"格式
```

前面讲的选项 "-C" 用于指定解压位置、"-t" 用于查看压缩包内容，在这里同样适用。

【例 2】压缩与解压缩 ".tar.bz2" 格式。
和".tar.gz"格式唯一的不同就是"-zcvf"选项换成了 "-jcvf"，如下所示:

```sh
[root@localhost ~]# tar -jcvf tmp.tar.bz2 /tmp/

# 打包压缩为".tar.bz2"格式，注意压缩包文件名

[root@localhost ~]# tar -jxvf tmp.tar.bz2

# 解压缩与解打包".tar.bz2"格式
```

把文件直接压缩成".tar.gz"和".tar.bz2"格式，才是 Linux 中最常用的压缩方式，这是大家一定要掌握的压缩和解压缩方法。

tar 命令最初被用来在磁带上创建备份，现在可以在任何设备上创建备份。利用 tar 命令可以把一大堆的文件和目录打包成一个文件，这对于备份文件或是将几个文件组合成为一个文件进行网络传输是非常有用的。
