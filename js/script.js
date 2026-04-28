const scenes = document.querySelectorAll(".scene") /*scenes = variabel, der via DOM querySelectorAll finder alle elementer med class "scene", og gemmer dem i en Nodelist.*/

const btns = document.querySelectorAll(".btn") /*btns = variabel, der via DOM querySelectorAll finder alle elementer med class "btn", og gemmer dem i en Nodelist (bruges til event listeners)*/


const hideAllScenes = () => { /*Arrow funktion. Skjuler alle scener ved at fjerne class "active"*/
    scenes.forEach(scene => scene.classList.remove("active"));
}

const showScene = (sceneId) => { /*Arrow funktion. Viser én scene baseret på Id*/
    hideAllScenes (); 
    document.getElementById(sceneId).classList.add("active");
}

const nextScene = (e) => { /**/
    const btn = e.currentTarget; 
    const text = btn.textContent.trim();

    switch (true) {

        case text.includes("Start scenarie"):
            showScene("scene-choice");
        break;

        case text.includes ("Klik på linket"):
            showScene("click-link1");
        break;

        case text.includes("Hvad nu"):
            showScene("click-link2");
        break;

        case text.includes("Undersøg afsender"):
            showScene("check-sender1");
        break;

        case text.includes("Fortsæt"):
            showScene("check-sender2");
        break;

        case text.includes("Slet mailen"):
            showScene("delete-mail");
        break;

        case text.includes("Start forfra"):
            showScene("scene-start");
        break;

        default:
            console.log("Ingen match:", text); 

    }
}

//Event Listeners
btns.forEach(btn => {
    btn.addEventListener("click", nextScene);
})
