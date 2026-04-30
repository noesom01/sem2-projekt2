const scenes = document.querySelectorAll(".scene"); /*scenes = variabel, der via DOM querySelectorAll finder alle elementer med class "scene", og gemmer dem i en NodeList.*/

const btns = document.querySelectorAll(".btn"); /*btns = variabel, der via DOM querySelectorAll finder alle elementer med class "btn", og gemmer dem i en NodeList (bruges til event listeners)*/



const hideAllScenes = () => { //Arrow funktion, der skjuler alle scener
    scenes.forEach(scene => scene.classList.remove("active")); //Gennemgår alle scener i NodeList og fjerner "active", så de ikke vises
}

const showScene = (sceneId) => { //Arrow funktion, der viser én specifik scene baseret på Id
    hideAllScenes(); //Sikrer at alle andre scener skjules først 

    const scene = document.querySelector(sceneId); //Finder det specifikke scene-element i DOM

    if (scene) { //Hvis scenen findes
        scene.classList.add("active"); //Tilføjer "active" så scenen bliver synlig
        
    }
    else{ //Hvis scenen ikke findes
        console.log("Scene findes ikke", sceneId); //Logger fejl i konsolen 
    }
}


const nextScene = (e) => { //Arrow funktion, der modtager click-eventet (e), og styrer sceneskift via switch-case baseret på knaptekst
    const text = e.currentTarget.textContent.trim().toLowerCase(); //Henter knaptekst, 

    switch (text) { //Vælger scene baseret på knaptekst

        case "start scenarie": //Hvis knappen med teksten "start scenarie" klikkes, vises scenen med id "scene-choice"
            showScene ("#scene-choice");
        break;

        case "klik på linket for at se karakter":
            showScene ("#click-link1")
        break;

        case "hvad nu?":
            showScene("#click-link2");
        break;

        case "undersøg afsender nærmere":
            showScene("#check-sender1")
        break;

        case "fortsæt":
            showScene("#check-sender2")
        break;

        case "slet mailen med det samme":
            showScene("#delete-mail");
        break;

        case "start forfra":
            showScene("#scene-start")
        break;

        default:
            console.log("Ingen match", text); //Logger hvis knaptekst ikke matcher nogen defineret case 
    }
}


btns.forEach(btn => { //Gennemgår alle knapper i NodeList og tilføjer en event listener til hver
    btn.addEventListener("click", nextScene); //Tilføjer click-event listener, som kalder nextScene
})
