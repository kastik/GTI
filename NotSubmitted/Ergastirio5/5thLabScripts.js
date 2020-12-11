
//################## Lab 1 Function ##################
function addNumbers(){
    var value1 = parseInt(document.getElementById("textBox").value);
    var value2 = parseInt(document.getElementById("textBox2").value);
    var sum = value1 + value2;
    if(sum>1000){
        window.alert(sum)
    }else{
        document.getElementById("textBox2").value = sum;
    }
}

//################## Lab 2 Function ##################
function openLink(){
    var link = document.getElementById("UserInputLink").value;
    if(link.includes("http://") || link.includes("https://")){
        console.log("Valid link was given", link);
        window.location.href = link;
    }else{
        console.log("Invalid link was given trying to add http://", link);
        link = "http://" + link;
        console.log("The new link is ",link);
        window.location.href = link;
    }
}

//################## Lab 3 Functions ##################
//TODO
var openedWindow;
function openNewTabWithDefaultValues(){
    openedWindow = window.open("https://facebook.com","_blank","menubar=no,height=200,width=200,status=no")
}
function resizeCurrentWindow(){

    console.log(height,width,openedWindow)
    openedWindow.resizeTo(width,height);
    openedWindow.focus();
}

//################## Lab 4 Function ##################
function changeColor(){
    var color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
}

//################## Lab 5 Function ##################
function showInfo(){
    if(navigator.language=="en-US"){
        window.alert("Your browser is "+getBrowserName()+" and your language is set to '"+navigator.language+"'")
    }
    else {
        window.alert("Έχεις Browser τύπου " + getBrowserName() + " Και η Γλώσσα σου είναι " + navigator.language)
    }
}

function getBrowserName(){
    /* Code found on https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
    since navigator.appName is not longer reliable and returns "Netscape" in latest browsers revisions */
    if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) return "Opera";
    if(typeof InstallTrigger !== 'undefined') return "Firefox";
    if(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification)))return "Safari";
    if(/*@cc_on!@*/!!document.documentMode)return "Internet Explorer";
    if(!(/*@cc_on!@*/!!document.documentMode) && !!window.StyleMedia)return "Edge";
    if(!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime))return "Chrome";
    if(isChrome && (navigator.userAgent.indexOf("Edg") != -1))return "Edge Chromium";
}

//################## Lab 6 Function ##################
function getHost(){
    window.alert(location.hostname);
}
function getPath(){
    window.alert(location.pathname);
}