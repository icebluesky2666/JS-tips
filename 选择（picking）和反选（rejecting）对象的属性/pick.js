// 对象数组上过滤出来某些属性
function pick(obj, keys) {
    return keys.map(key =>
        key in obj ? {
            [key]: obj[key]
        } : {}
    ).reduce((res, now) => Object.assign(res, now), {})
}
// 反选过滤某些属性
function reject(obj, keys) {
    return Object.keys(obj)
        .filter((res) => { return !keys.includes(res) })
        .map(res => ({
            [res]: obj[res]
        })).reduce((res, now) => { return Object.assign(res, now) }, {})
}

var obj = [{
    id: '01',
    name: 'xiaoming',
    like: 'basketball',
    age: '17'
}, {
    id: '02',
    name: 'xiaoli',
    like: 'basketball',
    age: '18'
}]
var keys = ['id', 'name'];

//console.log(pick(obj, keys))
console.log(obj.map(res => reject(res, keys)))