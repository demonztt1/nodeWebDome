/**
 * Created by Administrator on 2017/9/23.
 */
const crypto = require('crypto');

module.exports={

    MD5_SUFFIX:'90d01973229a6a6ac6003f7489ebff42@',
    md5:function (str) {
        var obj =crypto.createHash('md5');
        var strs=str;
        obj.update(strs);
        obj.u
        return obj.digest('hex');

    }
}