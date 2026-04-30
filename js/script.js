const scenes = document.querySelectorAll(".scene"); /*scenes = variabel, der via DOM querySelectorAll finder alle elementer med class "scene", og gemmer dem i en NodeList.*/

const btns = document.querySelectorAll(".btn"); /*btns = variabel, der via DOM querySelectorAll finder alle elementer med class "btn", og gemmer dem i en NodeList (bruges til event listeners)*/


const hideAllScenes = () => {
    scenes.forEach(scene => scene.classList.remove("active"));
}

const showScene = (sceneId) => {
    hideAllScenes();

    const scene = document.querySelector(sceneId);

    if (scene) {
        scene.classList.add("active");
    }
    else{
        console.log("Scene findes ikke", sceneId);
    }
}

//Event handler
const nextScene = (e) => {
    const text = e.currentTarget.textContent.trim().toLowerCase();

    switch (text) {
        case "start scenarie":
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
            console.log("Ingen match", text);
    }
}

//Event listeners
btns.forEach(btn => {
    btn.addEventListener("click", nextScene);
})
