function command(textInput){
   const arguments =  textInput.split(' ');
   
   if(arguments[0].includes("open")){
       alert("OPEN DETECTED")
       arguments.shift();
       alert("ELEMENT SUIVANT :"+arguments[0])
       openFile(arguments);
   }

}

function openFile(arguments){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "file/test.txt", true);
    rawFile.onreadystatechange = function() {
        var allText;
        alert(rawFile.readyState);
        if (rawFile.readyState === 4) {
             allText = rawFile.responseText;
             
             document.getElementById("terminal-line").insertAdjacentHTML("beforeend", "<p>"+allText+"</p>");
        }

    }
}

