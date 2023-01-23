console.log("test");

/* 
Aufgabe

html eingabe Fromular

function weather ()  

Zahlen 1-10

mit if und ... else

8-10 = super
6-7 = gut
3-5 = okay
0-2 = schlecht

&&

*/


let inputWetterZahl = document.querySelector("#inputWetterZahl");
let outputFeld = document.querySelector("#outputFeld");

let button = document.querySelector("#button");


button.addEventListener("click", vergleichen);



function vergleichen() {
    console.log("funktion wird abgefragt, eventListener geht")

    const input = (inputWetterZahl.value);
    console.log("Zahl: " + input);

    let outputErgebnis = "0";  // werte von if und else ren 

    if (input >= 0 && input <= 2) {
        outputErgebnis = "schlecht";
    }
    else if (input >= 3 && input <= 5) {
        outputErgebnis = "okay";
    }
    else if (input >=6 && input <=7 ){
        outputErgebnis = "gut";
    }
    else if (input >=8 && input <=10){
        outputErgebnis = "super";
    }
    else {
        outputErgebnis = "Fehler !!! Keine Zahl zwischen 0 und 10 eingegeben.";
    }



    outputFeld.innerHTML = outputErgebnis;
    outputFeld.style.color = "green";

    outputFeld.classList.add("js_backgroundColor");
    // gibt add remove und toggle 

}

pruefen();