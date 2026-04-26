const btns = document.querySelectorAll('.btn'); /*Variabel, der finder alle elementer med klassen btn*/

const scenes = document.querySelectorAll(".scene"); /*Variabel, der finder alle elementer med klassen scene. Herfra bruge index numre til at fortælle hvilken scene, der skal vises*/

const nextScene = (e) => {
    console.log(e.target.textContent); /*Logger teksten på den knap, der blev klikket på*/

    switch(e.target.textContent) {
        case "Start scenarie":
            console.log("Start was clicked"); /*Logger at start knappen blev klikket på*/
            scenes[0].classList.remove("active");
            scenes[1].classList.add("active");
        break;

        case "Klik på linket for at se karakter":
            scenes[1].classList.remove("active");
            scenes[2].classList.add("active");
        break;

        case "Hvad nu?":
            scenes[2].classList.remove("active");
            scenes[5].classList.add("active");
        break;

        case "Undersøg afsender nærmere":
            scenes[1].classList.remove("active");
            scenes[3].classList.add("active");
        break;

        case "Fortsæt":
            scenes[3].classList.remove("active");
            scenes[6].classList.add("active");
        break;

        case "Slet mailen med det samme":
            scenes[1].classList.remove("active");
            scenes[4].classList.add("active");
        break;

        case "Start forfra":
            scenes[4].classList.remove("active");
            scenes[5].classList.remove("active");
            scenes[6].classList.remove("active");
            scenes[0].classList.add("active");
        break;

        default: console.log("No matching case found"); /*Logger hvis ingen af cases matcher den klikkede knaps tekst*/


    }
}


for(const btn of btns){
    btn.addEventListener("click", nextScene); /*Tilføjer eventlistener til alle knapper, der lytter efter et klik og kalder funktionen nextScene*/
}