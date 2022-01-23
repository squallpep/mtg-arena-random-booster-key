
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

let myArray = []
for(let i = 0; i < 11; i++){
  let randomSet_1 = makeid(5)
  let randomSet_2 = makeid(5)
  let randomSet_3 = makeid(5)
  let randomSet_4 = makeid(5)
  let randomSet_5 = makeid(5)

  myArray.push(randomSet_1+"-"+randomSet_2+"-"+randomSet_3+"-"+randomSet_4+"-"+randomSet_5 + "\r\n")
}

document.getElementById("myInput0").value = myArray[0]
document.getElementById("myInput1").value = myArray[1]
document.getElementById("myInput2").value = myArray[2]
document.getElementById("myInput3").value = myArray[3]
document.getElementById("myInput4").value = myArray[4]
document.getElementById("myInput5").value = myArray[5]
document.getElementById("myInput6").value = myArray[6]
document.getElementById("myInput7").value = myArray[7]
document.getElementById("myInput8").value = myArray[8]
document.getElementById("myInput9").value = myArray[9]
}

function copyKey0() {

  var copyText = document.getElementById("myInput0");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
} 
function copyKey1() {

  var copyText = document.getElementById("myInput1");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
} 
function copyKey2() {

  var copyText = document.getElementById("myInput2");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
} 
function copyKey3() {

  var copyText = document.getElementById("myInput3");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
} 
function copyKey4() {

  var copyText = document.getElementById("myInput4");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
} 
function copyKey5() {

  var copyText = document.getElementById("myInput5");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
} 
function copyKey6() {

  var copyText = document.getElementById("myInput6");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
} 
function copyKey7() {

  var copyText = document.getElementById("myInput7");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
} 
function copyKey8() {

  var copyText = document.getElementById("myInput8");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
} 
function copyKey9() {

  var copyText = document.getElementById("myInput9");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
} 