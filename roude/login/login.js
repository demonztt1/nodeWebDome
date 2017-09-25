/**
 * Created by Administrator on 2017/9/22.
 */
const express=require('express');
const common=require("./../../libs/common.js");
const logindb=require('./../../service/login/login');

module.exports=function () {
    var router=express.Router();
    router.use('/login',function (req,res) {
        var username = req.body.username;
        var password = common.md5(username + req.body.password + common.MD5_SUFFIX);
        let user = logindb(username);
        user.then(function (data) {
            if (data.length == 0) {
                res.status(400).send('no this amdin').end();
            } else {
                console.log(data);
                if (data[0].password == password) {
                    //成功
                    req.session['admin_id'] = data[0].user_id;
                    res.status(200)
                    res.redirect('/users/');
                    return;
                } else {
                    res.status(404).send('this passord is incorrect').end();
                }
            }
        }, function (err) {
            console.error(err);
            res.status(500).send('database erro').end();
        });
    })
    router.use('/logout', function(req, res) {
        res.clearCookie('islogin');
        delete  req.session.admin_id;
        res.redirect('/');
    });
    router.use('/',function (req,res) {
        res.render('login.ejs',{})
    });

    return router;
}