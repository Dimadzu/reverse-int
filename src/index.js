module.exports = function reverse (n) {
    let strArr= String(n).split('');
    let newStrArr=[];
   for(let n = strArr.length; n>=0; n--){
    if(strArr[n]!=="-"){
       newStrArr.push(strArr[n]);}
   }
   let reverseNumber= Number(newStrArr.join(""));
   return reverseNumber;
    
}