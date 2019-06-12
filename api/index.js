// 先输入node index
// const { app } = require('./src/app');
//引入Sequelize框架
const Sequelize = require('sequelize');

const crypto = require('crypto');
const fs = require('fs');

//通过Sequelize构造方法创建Sequelize实例并链接数据库
const sequelize = new Sequelize(
    'wifi',
    'root',
    '',
    {
        'dialect': 'mysql',  // 数据库使用mysql
        'host': 'localhost', // 数据库服务器ip
        'port': 3306         // 数据库服务器端口
    }
);

//定义数据模型

//配置数据模型关系
const Item = sequelize.define('item', {
    'IMEI': Sequelize.STRING,
    'device': Sequelize.STRING,
    'message': Sequelize.STRING,
    'tel': Sequelize.STRING,
    // 'image': Sequelize.STRING,
})

//同步数据模型
sequelize.sync({ force: false });

/*****************************************/

//引入相关组件
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

//通过Express框架创建一个ExpressApp对象
const app = express();

//支持跨域请求
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//添加静态文件服务器
//使用express自带的static中间件，对source目录提供静态文件服务
app.use('/resource', express.static('./resource'));


//解析JSON数据表单
app.use(bodyParser.json())
//解析表单文件
app.use(multer().any());

/*****************************************/

//API响应函数

app.post('/add', async (req, res) => {
    console.log(req.body);
    console.log(req.files);

    // let image = '';

    if (req.files.length > 0) {
        const file = req.files[0];
        const hash = crypto.createHash('md5');
        //获取当前时间
        const date = new Date();
        //获取随机数
        const random = Math.random();
        //设置源数据
        hash.update(date + random);
        //获取摘要值,参数hex表示以16进制显示内容
        // image = hash.digest('hex')+'.png';
        //配置文件路径
        // path = `./resource/image/${image}`;

        fs.writeFile(path,file.buffer,(err)=>{
            if (err) {
                console.log(err);
                // reject(err);
            } else {
                console.log('文件写入成功');
                // callBack(`${filename}.png`);
            }
        });

    }

    const { IMEI, device, message, tel } = req.body;

    const item = {
        IMEI,
        device,
        message,
        tel,
        // image, 
    }

    const i = await Item.create(item);

    res.send({
        success:true,
        data:i,
    })
})

app.get('/all',async(req,res)=>{
    const arr = await Item.findAll({
        limit:6
    });
    res.send({
        success:true,
        data:arr,
    })
})


/*****************************************/

module.exports = {
    app,
    sequelize
};



//开启监听服务
const server = app.listen(60020, () => {
    console.log('开启成功');
});

