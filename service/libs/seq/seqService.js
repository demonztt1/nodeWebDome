/**
 * Created by Administrator on 2017/9/25.
 */

const seqDao = require('./../../../dao/libs/seq/seqDao');
let save = async function (pd) {
    return seqDao.save(pd);
};
let  del=async function (pd) {
    return seqDao.del(pd);
}
let  delAll=async function (pd) {
    return seqDao.delAll(pd);
}
let  edit =async function (pd) {
    return seqDao.edit(pd);
}
let  list =async function (page) {
   return seqDao.list(page);
}
let listAll = async function (pd) {
    return seqDao.delAll(pd);
}
let getSeq=async function (pd) {
    let seqPd=await seqDao.listAll(pd);
    let seqPdOed= seqPd[0];
    let val =seqPdOed.value;
    val=val+1;
    seqPdOed.value=val;
    edit(seqPdOed);
    return val;

}


exports.save = save;
exports.del=del;
exports.delAll=delAll;
exports.edit=edit;
exports.list=list;
exports.listAll=listAll;
exports.getSeq=getSeq;