/**
 * Created by Administrator on 2017/9/23.
 */

const { query } = require('./../../../config/mysqlpool')
let getUser = async function (username ) {
    let sql = `SELECT user_id,name,password FROM  sys_user WHERE user_id =${username}`
    let dataList = await query( sql )
    return dataList
};

module.exports= getUser;