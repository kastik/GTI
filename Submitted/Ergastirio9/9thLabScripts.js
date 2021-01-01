
//####################### Lab 1 ##############################
var imgArray = ["images/1.jpg","images/2.jpeg","images/3.jpg"];
var currentImgIndex = 0;
function previousImg(){
    if(currentImgIndex !== 0){
        currentImgIndex -=1;
    }
    else{
        currentImgIndex = 2;
    }
    document.getElementById("myImg").setAttribute("src",imgArray[currentImgIndex]);
}

function nextImg(){
    if(currentImgIndex <= imgArray.length-2){
    currentImgIndex +=1;
    }
    else{
        currentImgIndex = 0;
    }
    document.getElementById("myImg").setAttribute("src",imgArray[currentImgIndex]);
}


//######################### Lab 2 #############################
var imgArray2 = ["images/1.jpg","images/2.jpeg","images/3.jpg"];
var heightArray2 = ["width:400px;height:400px;","width:450px;height:450px;","width:500px;height:500px;"]
var multiArray = [imgArray2,heightArray2]
var currentImgIndex2 = 0;


function previousImg2(){
    if(currentImgIndex2 !== 0){
        currentImgIndex2 -=1;}
    else{
        currentImgIndex2 = 2;}
    document.getElementById("myImg").setAttribute("src",multiArray[0][currentImgIndex2]);
    document.getElementById("myImg").setAttribute("style",multiArray[1][currentImgIndex2])
}

function nextImg2(){

    if(currentImgIndex2 <= multiArray[0].length-2){
        console.log(multiArray[0].length)
        currentImgIndex2 +=1;
    }
    else{
        console.log(multiArray[0].length+"else")
        currentImgIndex2 = 0;
    }
    document.getElementById("myImg").setAttribute("src",multiArray[0][currentImgIndex2]);
    document.getElementById("myImg").setAttribute("style",multiArray[1][currentImgIndex2]);
}


//######################## Lab 3 ###############################
function updateUrlBackground() {
    for(var i=0; i<document.links.length; i++){
        if(isExternalURL(document.links.item(i).href)){
            document.links.item(i).style.backgroundColor = "red"
        }
        else{
            document.links.item(i).style.backgroundColor = "green"
        }
    }
}
// Found on https://stackoverflow.com/a/9744104
function isExternalURL(url) {
    return new URL(url).host !== (location.host);
}


//######################## Lab 4 ###############################
var areSourcesShown = false

function showSources() {
    var sourcesDiv = document.getElementById("sourcesDiv")
    if(!areSourcesShown){
        for (var i = 0; i < document.images.length; i++) {
            sourcesDiv.append(document.createElement("h1").innerText = document.images.item(i).src)
            sourcesDiv.append(document.createElement("br"))
        }
        document.getElementById("SourcesBtn").innerText = "Εξαφάνισε"
        areSourcesShown = true
    }
    else{
        sourcesDiv.innerHTML = ""
        document.getElementById("SourcesBtn").innerText = "Εμφάνισε"
        areSourcesShown = false
    }
}


//######################## Lab 5 ###############################
function updateListbox(){
    var text = document.getElementById("textBox").value
    var select = document.getElementById("MySelect")
    if(text!==""){
        var element = document.createElement("option")
        element.text = text
        select.options.add(element)
    }
}

//######################## Lab 6 ###############################
function doRandStuff() {
    var table = document.getElementById("myTable");

    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells.item(j).innerHTML = Math.floor(Math.random() * 10) + 1;
            if (table.rows[i].cells.item(j).innerText < 5) {
                table.rows[i].cells.item(j).style.backgroundColor = "red"
            } else {
                table.rows[i].cells.item(j).style.backgroundColor = "green"
            }
        }
    }
}

//######################## Lab 7 ###############################
var h1Colored = false;
var h2Colored = false;

function updateBackground(){

    let i;
    var selectObj = document.getElementById("mySelect");
    var selectedTagStr = selectObj.value
    var elementsArray = document.getElementsByTagName(selectedTagStr);
    var buttonObj = document.getElementById("myButton")

    if(selectedTagStr==="h1"){
        if( !h1Colored){
            h1Colored = true
            buttonObj.innerText = "Αποχρωματισμός"
            for(i = 0; i<elementsArray.length; i++){
                elementsArray.item(i).style.backgroundColor = "yellow"
            }
        }else{
            h1Colored = false
            for(i = 0; i<elementsArray.length; i++){
                elementsArray.item(i).style.backgroundColor = "white"
            }

            buttonObj.innerText = "Χρωματισμός"
        }
    }else{
        if(!h2Colored){
            h2Colored = true
            buttonObj.innerText = "Αποχρωματισμός"
            for(i = 0; i<elementsArray.length; i++){
                elementsArray.item(i).style.backgroundColor = "yellow"
            }
        }else{
            h2Colored = false
            for(i = 0; i<elementsArray.length; i++){
                elementsArray.item(i).style.backgroundColor = "white"
            }

            buttonObj.innerText = "Χρωματισμός"}}

}
function updateButtonText(){
    var myButton = document.getElementById("myButton")

    var selectedTagStr = document.getElementById("mySelect").value
    if(selectedTagStr==="h1"){
        if(h1Colored){
            myButton.innerText = "Αποχρωματισμός"
        }else{
            myButton.innerText = "Χρωματισμός"
        }
    }else{
        if(h2Colored){
            myButton.innerText = "Αποχρωματισμός"
        }else {
            myButton.innerText = "Χρωματισμός"
        }
    }
}

