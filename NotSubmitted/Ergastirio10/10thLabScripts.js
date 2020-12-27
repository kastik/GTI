//######################## Lab 1 & 2 ###############################
var imgArray = ["images/1.jpg","images/2.jpeg","images/3.jpg"];
var currentImgIndex = 0;
var imgInterval

function startSlideShow(){
    if(imgInterval===undefined) {
        console.log(imgInterval)
        imgInterval = setInterval(nextImg, 1000)
    }}

function stopSlideShow(){
    clearInterval(imgInterval)
    imgInterval = undefined
}

function nextImg(){
    if(currentImgIndex <= imgArray.length-2){
        currentImgIndex +=1;}
    else{
        currentImgIndex = 0;}

    document.getElementById("myImg").setAttribute("src",imgArray[currentImgIndex]);
}


//######################## Lab 2 ###############################
var timeout

function startSlideWithCustomInterval(){
    var slideSeconds = (document.getElementById("slideMilliseconds").value)*1000
    startSlideShow()
    timeout = setTimeout(stopSlideShow,slideSeconds)
}
function stopTimeout(){
    clearTimeout(timeout)
}

//######################## Lab 3 ###############################

function modifyATags(){
    var linkCollection = document.getElementsByTagName("a")
    for(var i=0; i<linkCollection.length; i++) {
        linkCollection.item(i).setAttribute("onclick", "confirmExit(event)")
    }
}
// Help was found from https://stackoverflow.com/a/57122120
function confirmExit(event){
    if(!confirm("Do you want to exit this website?")){
        event.preventDefault()
    }
}
