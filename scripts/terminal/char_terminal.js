const nameTitleTerminal='adnan.kouakoua@';

let termTitle = document.getElementById('title-terminal');
termTitle.textContent = nameTitleTerminal+getNameMenu();

function getNameMenu(){
    return 'menu'
}


// AUTOMATIC CHANGE COLOR CHARACTERE █ (white and black)

const charSeek= document.getElementById('charactere');
let coloraltern="black";

setInterval(
    /**
     * AUTOMATIC CHANGE COLOR CHARACTERE █ (white and black)
     */
function(){
    
    if(coloraltern==="black"){

        charSeek.style.color="white";
        coloraltern="white";
    }
    else{

        charSeek.style.color="black";
        coloraltern="black";
    }  
},480

);

// INPUT CHARACTERE IN THE WEBSITE
const ENTER =13;
const ERASED =8;

/**
 * Cette manière d'obtenir les caractères, permet d'obtenir des touches complémentaires tel que enter indisponible dans d'autre manière.
 * @param {*} event 
 */
function erasKeyCode(event){

    move_right();
    let ascii=event.which;

    if(ascii===ERASED){

        var texte = document.getElementById("textInput");
        texte.innerHTML = texte.innerHTML.substring(0,texte.innerHTML.length-1);
        
    }
}
/**
 * Réalise l'entrée de caractère de l'utilisateur,
 *  si son évenement est la toucher enter alors le texte entrée auparavant devient est ajouter au html
 * @param {*} event 
 */
function affKeyCode(event){
    
    let ascii=event.which;
    
    if(ascii===ENTER){
        
            let varr = document.getElementById("textInput").cloneNode(true).innerHTML;
            
            document.getElementById("terminal-line").insertAdjacentHTML("beforebegin", "<p>adnankouakoua@terminal:<span>"+varr+"</span></p>");
            document.getElementById("textInput").innerHTML="";
            move_down();
            
            command(varr);
        
        
    }
    
    var texte = document.getElementById("textInput");
    
     let touche = String.fromCharCode(ascii);
    
    
    texte.innerHTML += touche+"";

}
function move_right() {
}
/**
 * déplace le curseur du terminal vers le bas
 */
function move_down() {
    let div = document.getElementById("text-terminal");
    div.scrollTop +=2000;
    div.scrollLeft=0;
  }


  var div = document.getElementById("terminal");
 // the thickness of the hovered border area

div.onmousemove = function(e) {
    let delta = 10;
    let rect = div.getBoundingClientRect();
    let x = e.clientX - rect.left,      // the relative mouse postion to the element
        y = e.clientY - rect.top,       // ...
        w = rect.right - rect.left,     // width of the element
        h = rect.bottom - rect.top;     // height of the element
        
   let c = "";                          // which cursor to use
   if(y < delta) c += "n";              // north
   else if( y > h - delta) c += "s";    // south
   if(x < delta) c += "w";              // west
   else if(x > w - delta) c += "e";     // east
   
   if(c)                                // if we are hovering at the border area (c is not empty)
       div.style.cursor = c + "-resize"; // set the according cursor
   else                                 
       div.style.cursor = "auto";    // set to pointer
}