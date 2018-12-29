单个入口语法：
const config = {
  entry: './path/to/my/entry/file.js'
};
或者
const config = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};

多入口：
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};