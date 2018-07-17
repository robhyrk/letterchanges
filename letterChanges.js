function LetterChanges(str) { 
let charArr = [];
let charStr = ''
for (let i=0;i<str.length;i++) {
   let charCode =  str.charCodeAt(i);
   
   if (charCode >= 65) {
   charArr.push(charCode + 1);
   } else {
    charArr.push(charCode)
   }
}

for (let i=0;i<charArr.length;i++) {
  if (charArr[i] === 97 || charArr[i] === 101 || charArr[i] === 105 || charArr[i] === 111 || charArr[i] === 117) {   
        charStr += String.fromCharCode(charArr[i]).toUpperCase();
    } else {
        charStr += String.fromCharCode(charArr[i]);
   }
}

  return charStr; 
         
}


   
LetterChanges("Insert string here");