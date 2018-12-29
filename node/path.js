Node.js path 模块提供了一些用于处理文件路径的小工具，我们可以通过以下方式引入该模块：
var path = require("path");

1.规范化路径 path.normalize(p);去掉多于的'/'或者'.';

2.path.join([path1][, path2][, ...]);
用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。

3.path.resolve([from ...], to);生成绝对路径

4.path.isAbsolute(path)判断参数是否是绝对路径

5.path.relative(from, to)用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录）。

6.path.dirname(p)返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似。

7.path.basename(p[, ext])返回路径中的最后一部分。同 Unix 命令 bashname 类似。

8.path.extname(p)返回扩展名

9.path.parse(pathString)返回路径字符串对象

10. path.format(pathObject)从对象中返回路径字符串，和 path.parse 相反。