//Lab 1
function getElement(event){
    var textInput = document.getElementById("textInput")
    var textArea = document.getElementById("textArea")
    textInput.value = event.target.tagName
    textArea.value = event.target.innerText
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

function lab8a(){
    var selectedTag = document.getElementById("tags").value
    var selectedColor = document.getElementById("colors").value
    var div = document.getElementById("pnlCreate")
    var newElement = document.createElement(selectedTag)
    newElement.createAttribute("style")
    newElement.setAttribute("style",selectedColor)
    newElement.innerText="This is "+selectedTag +" With "+selectedColor
    div.append(newElement)
}
function lab8b(){
    var selectedTag = document.getElementById("tags").value
    var selectedColor = document.getElementById("colors").value
    var div = document.getElementById("pnlCreate")
    div.innerHTML = "<"+selectedTag+" style='background-color:"+selectedColor+"'>Lab 8b"+"</"+selectedTag+">"
    console.log(div.innerHTML)
}