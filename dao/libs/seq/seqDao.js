/**
 * Created by Administrator on 2017/9/27.
 */
const { query } = require('./../../../config/mysqlpool')
let baseColumnList=`code,name,length,value,remark`;
let save = async function ( ) {
    let sql = `INSERT INTO sys_seq(${baseColumnList}) VALUE(?,?,?,?,?)`
    var  addSqlParams = [pd.code, pd.name,pd.length,pd.value,pd.remark];
    let dataList = await query( sql ,addSqlParams);
    return dataList
};
let  del=async function (pd) {
    let sql=`DELETE FROM sys_seq WHERE CODE=(?)`
    var  addSqlParams = [pd.code];
    let dataList = await query( sql ,addSqlParams);
    return dataList
}
let  delAll=async function (pd) {
    let sql =`DELETE FROM sys_seq WHERE CODE in (`
    var addSqlParams=[];
}
let  edit =async function (pd) {
    let sql =`update  sys_seq set `

    if (pd.name != undefined || pd.name!=null || pd.name !=''){
        sql=sql+ `  name = '${pd.name}' ,`
    }
    if (pd.length !=undefined || pd.length!=null|| pd.length!='' ){
        sql=sql+ `  length =${pd.length} ,`
    }
    if (pd.value !=undefined || pd.value!=null || pd.value!=''){
        sql=sql+`  value = ${pd.value},`
    }
    if (pd.remark !=undefined || pd.remark!=null || pd.remark!=''){
        sql=sql+`  remark = '${pd.remark}',`
    }
    sql=sql+`  code = ${pd.code} WHERE code = ${pd.code}`

   await query( sql ).catch(() => {});


}
let  list =async function (page) {

}
let listAll = async function (pd) {
    let sql = `SELECT ${baseColumnList} FROM sys_seq `
    if (pd !=undefined && pd !=null && pd !=''){
        sql=sql+ `WHERE 1=1 `
        if (pd.code !=undefined && pd.code!=null && pd !=''){
            sql=sql+` AND code = ${pd.code}`
        }
        if (pd.name != undefined && pd.name!=null && pd.name !=''){
            sql=sql+ ` AND name = '${pd.name}'`
        }
        if (pd.length !=undefined && pd.length!=null && pd.length!='' ){
            sql=sql+ ` AND length =${pd.length}`
        }
        if (pd.value !=undefined && pd.value!=null && pd.value!=''){
            sql=sql+` AND value = ${pd.value}`
        }
    }
    let dataList = await query( sql );
    return dataList
}
exports.save = save;
exports.del=del;
exports.delAll=delAll;
exports.edit=edit;
exports.list=list;
exports.listAll=listAll;