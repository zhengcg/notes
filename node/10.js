// CLI  //命令行工具开发

// command [subCommand] [options] [arguments]

// 1.command:命令，比如vue
// 2.[subCommand]:子命令，比如vue create
// 3.[options]:选项、配置、同一个命令不同选项会有不一样的操作结果，比如 vue -h,vue -v
// 4.[arguments]:参数，某些命令需要使用的值，比如vue create myApp

// 选项与参数的区别：选项是命令内置实现，写命令的人可以选择实现那些选项，用户也可以选择使用
// 哪些选项，参数一般是用户决定传入的值。


// 选项：一般有全拼和简写形式，全拼一般以--开头，如--version，简写以-开头，如：-v
// 也可以接受值，以空格分隔写在选项后


// 命令行工具开发框架

// 1.commander vue脚手架就是基于这个东西的

// 2.chalk  命令行样式风格控制器

// 3.inquirer  交互式命令行工具