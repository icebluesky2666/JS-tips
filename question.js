// 全部排列组合
function permute(temArr,testArr){
  var permuteArr=[];
  var arr = testArr;
  function innerPermute(temArr){
        for(var i=0,len=arr.length; i<len; i++) {
            if(temArr.length == len - 1) {
                if(temArr.indexOf(arr[i]) < 0) {
                    permuteArr.push(temArr.concat(arr[i]));
                }
                continue;
            }
            if(temArr.indexOf(arr[i]) < 0) {
                innerPermute(temArr.concat(arr[i]));
            }
        }
    }
innerPermute(temArr);
return permuteArr;     
}
// 取前三个
var result = permute([],[2,4,5,6,7,8,9])
var num = 0;
var resultNew = result.map(function(item){
  return item.slice(4);
}).filter(function(value){
   // 246 一个号码位置正确
   if (value[0] == 2||value[1] == 4||value[2] == 6){
     // 包含 692  2个 位置都不正确
     if(value.findIndex(6)!=-1 && value.findIndex(6)!=0){
      num++;
     }
     if(value.findIndex(9)!=-1 && value.findIndex(6)!=0){

     }
     return true;
   }else{
     return false;
   }
})
// 判断各个条件
resultNew.forEach((value)=>{
  // 246 一个号码位置都正确
  value
})