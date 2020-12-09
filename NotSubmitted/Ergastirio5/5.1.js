function f(){
    var value1 = parseInt(document.getElementById("textbox").value);
    var value2 = parseInt(document.getElementById("textbox2").value);
    sum = value1 + value2;
    if(sum>1000){
        window.alert(sum)
    }else{
        document.getElementById("textbox2").value = sum;
    }
}