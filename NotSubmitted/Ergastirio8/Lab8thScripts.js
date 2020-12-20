//Lab 1
function getElement(event){
    var textInput = document.getElementById("textInput")
    var textArea = document.getElementById("textArea")
    textInput.value = event.target.tagName
    textArea.value = event.target.valueOf()
}
//Lab 2
function updateElement(event){
        event.target.innerText = "Με επέλεξες!!"
}


//Lab 3
var selectedLiItems = 0;

function updatedElements(event){
    if(selectedLiItems<3) {
        event.target.innerText = "Με επέλεξες!!"
        selectedLiItems +=1;
    }else{
        window.alert("Δεν μπορείς να επιλέξεις παραπάνω απο 3")
    }
}

//Lab 4
function updateTextColor(){
    var paok = document.getElementsByTagName("a")
    for(var i=0; paok.length; i++){
        paok[i].setAttribute("class","customColors")
    }

}

function lab8(){
    var tag = document.getElementById("create").value
    var color = document.getElementById("color").value
    var div = document.getElementById("pnlCreate")
    var newElement = document.createElement(tag)
    newElement.style.backgroundColor=color
    newElement.innerText="This is "+tag +" With "+color
    div.append(newElement)
}