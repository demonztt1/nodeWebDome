/**
 * Created by Administrator on 2017/9/24.
 */
const { query } = require('./../config/mysqlpool')


var tasks = function (username ) {
    let sql = `SELECT user_id,name,password FROM  sys_user WHERE user_id =${username}`;
    let dataList =  query( sql );
    return dataList;
};
async function getData() {
    var results =tasks('xx')  ;
    results.then(function(result) {
        console.log(result); // "Stuff worked!"
    }, function(err) {
        console.log("错误"+err); // Error: "It broke"
    });
}

getData();