let el = document.getElementsByClassName("folder");

for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("mouseover", function () {
        el[i].style.cursor = "pointer";

    });

    el[i].addEventListener("click", function () {

        let childs = el[i].childNodes;
        let j = 0;

        for (; j < childs.length && childs[j].nodeName != "H3"; j++) {
            alert(childs[j].nodeName)
        }
       
        openFolder(childs[j].textContent)
    });
}

let windows = document.getElementById("window");;
/**
 * Open a folder
 * 
 * @param {String} name Folder name
 */
function openFolder(name) {
    
    for(win of windows.childNodes){
        if(win.textContent==name){
        //    maximizzing(name);
        return 1;
        }
    }

    let stringFolder='<nav class="">'
    +'<nav class="barre-de-titre">'
    +'<a class=window-button><img src="images/closing-button.png"alt="an delete button"></a>'
    +'<a class=window-button><img src="images/minimizing-button.png"alt="an delete button"></a>'
    +'<a class=window-button><img src="images/maximizing-button.png"alt="an delete button"></a>'
    +'<h2 id="title-terminal">'+name+'</h2></nav>'
    + '</nav>';

    windows.insertAdjacentHTML("afterbegin", stringFolder);
    
    
    
 //   return 1;
}