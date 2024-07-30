const display=document.getElementById("input")
function func(input){
    display.value+=input;
}
function erase(){
    display.value="";
}
function equal(){
    try{
  display.value=eval(display.value);
    }
    catch(error){
        display.value="Error"
    }
}