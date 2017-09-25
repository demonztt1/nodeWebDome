/**
 * Created by Administrator on 2017/9/22.
 */

const express=require("express");
const static=require('express-static');
const mysql=require('mysql');
const cookieParser=require('cookie-parser');
const cookieSession =require('cookie-session');
const consolidate=require('consolidate');
const expressRoute=require('express-route');
const bodyParser=require('body-parser');
const multer=require('multer');
const molterObj=multer({dest:'./static/upbold'});

var server=express();
server.listen(80);


//1.前台请求数据
server.use(bodyParser.urlencoded())
server.use(molterObj.any());

//2.cookie session

server.use(cookieParser());
(function(){
    var keys=[ ];
    for (var i=0; i<100000;i++){
        keys[i]='a_'+Math.random();
    }
    server.use(cookieSession({
        name:'sess_id',
        keys:keys,
        maxAge:20*20*1000
    }))
})();

//3.模板

server .engine('html',consolidate.ejs);
server.set('views','template');
server.set('view engine','html');

//4.route

server.use('/login/',require('./roude/login/login.js')());
server.use('/users/',require('./roude/users/users.js')());
server.use('/',require('./roude/web/web.js')());


//5.defull static
server.use(static('./static/'));