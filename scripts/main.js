/*
    Peter Casey
    v 0.0001
    10/3/17
*/

// Convience function to get HTML element
function getE(id) {
    return document.getElementById(id);
}

function getEleText(id) {
    return document.getElementById(id).value;
}

// Simple function to test our setup
function test() {
    alert("Testing getEleText(): " + getEleText("stuff"));
}

function readText() {
    // Grab the input element from the document
    let inputItem = document.getElementById("stuff");
    // Grab the text from the input element
    let theText = inputItem.value;
    // Demonstrate...
    alert("value is " + theText);
    let theTextUpper = theText.toUpperCase();
 //   inputItem.value = theTextUpper;
    // Grab the output element from the document
    let outputItem = document.getElementById("stuff2");
    outputItem.value = theTextUpper;        
}