/**
 * Created by Administrator on 2017/9/22.
 */
const express=require('express');

module.exports=function () {
    var router=express.Router();

    router.get('/',function (req,res, next) {
        res.redirect('/index.html');
    });

    return router;
}