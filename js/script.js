const scenes = document.querySelectorAll(".scene"); /*scenes = variabel, der via DOM querySelectorAll finder alle elementer med class "scene", og gemmer dem i en NodeList.*/

const btns = document.querySelectorAll(".btn"); /*btns = variabel, der via DOM querySelectorAll finder alle elementer med class "btn", og gemmer dem i en NodeList (bruges til event listeners)*/


const hideAllScenes = () => { //Arrow funktion, der skjuler alle scener
    scenes.forEach(scene => scene.classList.remove("active")); //Gennemgår alle scener i NodeList og fjerner class "active"
}

const showScene = (sceneId) => { //Arrow funktion, der viser én scene ud fra selector i sceneId
    hideAllScenes (); //Nulstiller alle synlige scener før en ny aktiveres
    document.querySelector(sceneId).classList.add("active"); //Finder DOM-elementet via selector i sceneId og tilføjer class "active"
}

const nextScene = (e) => { //Event handler, der bestemmer hvilken scene der vises baseret på knap tekst
    const btn = e.currentTarget; //Henter den knap der udløser eventet
    const text = btn.textContent.trim(); //Henter knappens tekst

    switch (true) { 

        case text.includes("Start scenarie"): //Hvis knapteksten indeholder "Start scenarie", vis scenen "#scene-choice".
            showScene("#scene-choice");
        break;

        case text.includes ("Klik på linket"):
            showScene("#click-link1");
        break;

        case text.includes("Hvad nu"):
            showScene("#click-link2");
        break;

        case text.includes("Undersøg afsender"):
            showScene("#check-sender1");
        break;

        case text.includes("Fortsæt"):
            showScene("#check-sender2");
        break;

        case text.includes("Slet mailen"):
            showScene("#delete-mail");
        break;

        case text.includes("Start forfra"):
            showScene("#scene-start");
        break;

        default:
            console.log("Ingen match:", text); //Logger hvis ingen case matcher teksten

    }
}

btns.forEach(btn => { //Gennemgår alle knapper i NodeList og tilføjer en event listener til hver
    btn.addEventListener("click", nextScene); //Tilføjer click-event listener, som kalder nextScene
})
