//################## Lab 1 Function ##################
function addNumbers() {
    var value1 = parseInt(document.getElementById("textBox").value);
    var value2 = parseInt(document.getElementById("textBox2").value);
    var sum = value1 + value2;
    if (sum > 1000) {
        window.alert(sum)
    } else {
        document.getElementById("textBox2").value = sum;
    }
}

//################## Lab 2 Function ##################
function openLink() {
    var link = document.getElementById("UserInputLink").value;
    if (link.includes("http://") || link.includes("https://")) {
        console.log("Valid link was given", link);
        window.location.href = link;
    } else {
        console.log("Invalid link was given trying to add http://", link);
        link = "http://" + link;
        console.log("The new link is ", link);
        window.location.href = link;
    }
}

//################## Lab 3 Functions ##################
var openedWindow;

function openNewTabWithDefaultValues() {
    var url = document.getElementById("url").value
    openedWindow = window.open(url, "_blank", "menubar=no,height=200,width=200,status=no")
}

function resizeCurrentWindow() {
    var height = document.getElementById("height").value
    var width = document.getElementById("width").value
    openedWindow.resizeTo(width, height);
    openedWindow.focus();
}

//################## Lab 4 Function ##################
function changeColor() {
    var color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
}

//################## Lab 5 Function ##################
function showInfo() {
    if (navigator.language == "en-US") {
        window.alert("Your browser is " + getBrowserName() + " and your language is set to '" + navigator.language + "'")
    } else {
        window.alert("Έχεις Browser τύπου " + getBrowserName() + " Και η Γλώσσα σου είναι " + navigator.language)
    }
}

function getBrowserName() {

    /* navigator.appName is not longer reliable and returns "Netscape" in all major browsers revisions so we need
    to use a custom script instead. The following code was found on https://stackoverflow.com/a/9851769 and was
    slightly modified for our needs, It checks for browser specific methods to determine the browser name */
    if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) return "Opera";
    if (typeof InstallTrigger !== 'undefined') return "Firefox";
    if (/constructor/i.test(window.HTMLElement) || (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification))) return "Safari";
    if (/*@cc_on!@*/!!document.documentMode) return "Internet Explorer";
    if (!(/*@cc_on!@*/!!document.documentMode) && !!window.StyleMedia) return "Edge";
    if (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) return "Chrome";
    if (isChrome && (navigator.userAgent.indexOf("Edg") != -1)) return "Edge Chromium";
}

//################## Lab 6 Functions ##################
function getHost() {
    window.alert(location.hostname);
}

function getPath() {
    window.alert(location.pathname);
}

function f(x) {
    document.getElementById("Name_of_list_box").value;
    console.log(document.getElementById("Name_of_list_box"));
}