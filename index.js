let Chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");

let heures = 0;
let minutes = 0; 
let secondes = 0;
let tiers = 0;

let timeout;

let estArrete = true;

const demarrer = () => {
    if (estArrete) {
        estArrete = false;
        defilerTemps();
    }
};

const arrêter = () => {
    if (!estArrete) {
        estArrete = true;
        clearTimeout(timeout);
    }
};

const defilerTemps = () => {
    if (estArrete) return;
        
    secondes = parseInt(secondes);
    minutes = parseInt(minutes);
    heures = parseInt(heures);
    tiers = parseInt(tiers);

    tiers++;
    if (tiers == 60) {
        secondes++;
        tiers = 0;
    }
    if (secondes == 60) {
        minutes++;
        secondes = 0;
    }

    if (minutes == 60) {
        heures++;
        minutes= 0;
    }

    //affichage
if (tiers < 10 ) {
    tiers= "0" +tiers
}

    if (secondes < 10) {
        secondes = "0" +secondes
    }

    if (minutes < 10) {
        minutes = "0" +minutes
    }

    if (heures < 10) {
        heures = "0" +heures
    }

    Chrono.textContent = `${heures}: ${minutes}: ${secondes} :${tiers}`;

  timeout = setTimeout(defilerTemps, 15);
};

const reset = () => {
    Chrono.textContent = "00:00:00:00";
    estArrete = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    tiers = 0;
    clearTimeout(timeout);   
};


startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arrêter);
resetBtn.addEventListener("click", reset);

const darkBtn = document.getElementById("reglage");
let isDarkMode = false;

darkBtn.onclick = function () {
    let mode = document.querySelector('body');
    if (isDarkMode) {
        mode.classList.remove('dark');
        isDarkMode = false;  
    } else {
        mode.classList.add( 'dark');
        isDarkMode = true;
    }
    
}
