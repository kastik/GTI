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