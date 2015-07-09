var express = require('express');
var path = require('path');
var port = process.env.PORT || 42166;
var app = express();

//视图文件的路径
app.set('views', './views/pages');

//使用的模板引擎
app.set('view engine', 'jade');

app.use(require('body-parser').urlencoded({extended: true}));

/*
 * 格式化表单
 * 新版express已不支持app.use(express.bodyParser());
 * 需要安装body-parser模块，npm install body-parser
 * 然后使用代码为：app.use(require('body-parser').urlencoded({extended: true}))
 * */
//app.use(express.bodyParser());

//静态资源的路径
app.use(express.static(path.join(__dirname, '/')));

//设置端口号
app.listen(port);

//打印当前服务端口
console.log('imooc started on port ' + port);

