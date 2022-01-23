
function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function myRandomKey(){
let randomSet_1 = makeid(5)
let randomSet_2 = makeid(5)
let randomSet_3 = makeid(5)
let randomSet_4 = makeid(5)
let randomSet_5 = makeid(5)

return alert(randomSet_1+"-"+randomSet_2+"-"+randomSet_3+"-"+randomSet_4+"-"+randomSet_5)
}