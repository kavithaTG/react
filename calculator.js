let outputScreen=document.getElementById("output Screen");

function display(num){
   outputScreen.value+=num;
}
function calculator(){
   try{
       outputScreen.value=eval(outputScreen.value)
   }
   catch(err)
   { alert("invalid")}
}
function Clear(){
   outputScreen.value="";
}
function del(){
   outputScreen.value=outputScreen.value.slice(0,-1)
}