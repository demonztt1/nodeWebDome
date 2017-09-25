/**
 * Created by Administrator on 2017/9/22.
 */
const express=require('express');

module.exports=function () {
    var router=express.Router();

    router.use('/',function (req,res) {
        res.send("web 启动").end();
    });

    return router;
}