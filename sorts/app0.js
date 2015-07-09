var express = require('express');
var path = require('path');
var generator = require('./models/randomData');
var sorts = require('./models/sortMethods');
var port = process.env.PORT || 80;
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
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'views')));

//设置端口号
app.listen(port);

//打印当前服务端口
console.log('imooc started on port ' + port);

//页面路由
app.get('/', function (req, res) {
    res.render('index', {
        title: '排序',
        methods: [{
            title: '插入排序',
            _id: 1
        }, {
            title: '选择排序',
            _id: 2
        }, {
            title: '希尔排序',
            _id: 3
        }, {
            title: '冒泡排序',
            _id: 4
        }, {
            title: '快速排序',
            _id: 5
        }, {
            title: '堆排序',
            _id: 6
        }, {
            title: '归并排序',
            _id: 7
        }]
    });
});

app.get('/generator',function(req,res){
        res.json({datalist:generator.generateList(req.query.High,req.query.Low,req.query.Length)});
         // res.json({datalist:generator.generateList(10,1,10)});

});

app.post('/calculate',function(req,res){
    console.log(req.body.method);
    for (var i = req.body.datalist.length - 1; i >= 0; i--) {
            req.body.datalist[i] = parseInt(req.body.datalist[i]);
        };   
    res.json({datalist:sorts[req.body.method](req.body.datalist)});
         // res.json({datalist:generator.generateList(10,1,10)});

});
