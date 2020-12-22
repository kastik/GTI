//Lab 1
function checkInput() {
    var inputObj = document.getElementById("userInput")
    var userInput = inputObj.value
    console.log((typeof userInput) + " " + userInput)
    if (!isNaN(parseInt(userInput))) {
        inputObj.style.backgroundColor = "yellow"
    } else if (userInput == "") {
        inputObj.style.backgroundColor = "red"
    } else {
        inputObj.style.backgroundColor = "green"
    }
}

// Lab 2
function updateTextbox2() {
    var textbox1 = document.getElementById("textbox1").value
    document.getElementById("textbox2").value = textbox1.toUpperCase()
    console.log(textbox1 + " " + textbox2)

}

// Lab3
function setImg1() {
    document.getElementById("img").src = "imageFiles/1.jpg"
}

function setImg2() {
    document.getElementById("img").src = "imageFiles/2.jpg"
}

function setImg3() {
    document.getElementById("img").src = "imageFiles/3.jpeg"
}
//Lab 4
function goodbyeAlert(){
    window.alert("Bye Bye")

}
function welcomeAlert(){
    window.alert("Welcome to my page!!!")
}
//##################Lab 5#####################
function focus1(){
    document.getElementById("textbox1").style.backgroundColor="yellow"
}
function focus2(){
    document.getElementById("textbox2").style.backgroundColor="yellow"
}
function focus3(){
    document.getElementById("textbox3").style.backgroundColor="yellow"
}
function focus4(){
    document.getElementById("textbox4").style.backgroundColor="yellow"
}
function blur1(){
    var textboxValue = document.getElementById("textbox1").value
    if(textboxValue==""){
        document.getElementById("textbox1").style.backgroundColor="red"
    }else{
        document.getElementById("textbox1").style.backgroundColor="white"
    }
}
function blur2(){
    var textboxValue = document.getElementById("textbox2").value
    if(textboxValue==""){
        document.getElementById("textbox2").style.backgroundColor="red"
    }else{
        document.getElementById("textbox2").style.backgroundColor="white"
    }
}
function blur3(){
    var textboxValue = document.getElementById("textbox3").value
    if(textboxValue==""){
        document.getElementById("textbox3").style.backgroundColor="red"
    }else{
        document.getElementById("textbox3").style.backgroundColor="white"
    }
}
function blur4(){
    var textboxValue = document.getElementById("textbox4").value
    if(textboxValue==""){
        document.getElementById("textbox4").style.backgroundColor="red"
    }else{
        document.getElementById("textbox4").style.backgroundColor="white"
    }
}
//################# Lab 6#####################
function lab6Focus(obj){
    obj.style.backgroundColor="yellow"
}
function lab6blur(obj){
    var textboxValue = obj.value
    if(textboxValue==""){
        obj.style.backgroundColor="red"
    }else{
        obj.style.backgroundColor="white"
    }
}