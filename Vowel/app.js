var normalword = [];
var vowelword = [];

function addwords(){
   var USR_INP = document.getElementById("user_input").value;
  
//    normalword.push(USR_INP);
var flag=0;
for( var i= 0; i<USR_INP.length;i++){
    if(USR_INP[i] === "a"||USR_INP[i] === "e"||USR_INP[i] ==="i"||USR_INP[i] ==="o"||USR_INP[i] ==="u"){
        vowelword.push(USR_INP);
        flag=1
        break;
    }
    else{
        if(USR_INP[i] !== "a"||USR_INP[i] !== "e"||USR_INP[i] !=="i"||USR_INP[i] !=="o"||USR_INP[i] !=="u"){
            normalword.push(USR_INP);
            break;
        }
    }

}
// if(flag==1){
    for(var j=0;j<=USR_INP.length;j++){
document.getElementById('normal-words').innerHTML="<li>"+normalword[j]+"<li>"
}
// }
for(var k=0 ; k<=USR_INP.length ; k++){
    document.getElementById('vowel-words').innerHTML="<li>"+vowelword[k]+"<li>"
    }
    
}
