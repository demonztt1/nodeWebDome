/**
 * Created by Administrator on 2017/9/22.
 */
const express=require('express');
module.exports=function () {
    var router=express.Router();

    //检查登录状态
    router.use((req, res, next)=>{
      if(!req.session['admin_id']){
          res.redirect('/login');
    }else {
          next();
      }
    });
    router.use('/',function (req,res) {
        res.render('users.ejs',{}) ;
    });

    return router;
}