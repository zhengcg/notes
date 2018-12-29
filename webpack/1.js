webpack本质上是一个javascript应用程序的静态模块打包器。
配置文件：
webpack.config.js
一、入口：
entry:默认值为./src
module.exports={
	entry:'./path/to/my/entry/file.js'
}
二、出口：默认值为./dist

const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};

三、loader:
// loader 让 webpack 能够去处理那些非 JavaScript 文件
// （webpack 自身只理解 JavaScript）。loader 可以将所有
// 类型的文件转换为 webpack 能够处理的有效模块，
// 然后你就可以利用 webpack 的打包能力，对它们进行处理。
// 1.test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
// 2.use 属性，表示进行转换时，应该使用哪个 loader。
const path = require('path');
const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
module.exports = config;


四、插件：
// loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。
// 插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口
// 功能极其强大，可以用来处理各种各样的任务。

// 想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组
// 中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不
// 同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。

const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

const config = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;

五、模式：
// 通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以
// 启用相应模式下的 webpack 内置的优化

module.exports = {
  mode: 'production'
};