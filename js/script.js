const btns = document.querySelectorAll('.btn'); /*Variabel, der finder alle elementer med klassen btn*/

const stages = document.querySelectorAll(".stage"); /*Variabel, der finder alle elementer med klassen stage. Herfra bruge index numre til at fortælle hvilken scene, der skal vises*/

const nextStage =(e) => {
    console.log(e.target.textContent); /*Logger teksten på den knap, der blev klikket på*/

    switch(e.target.textContent) {
        case "Start scenarie":
        console.log("Start was clicked"); /*Logger at start knappen blev klikket på*/
        stages[0].classList.remove("active");
        stages[1].classList.add("active");

    }
}


for(const btn of btns){
    btn.addEventListener("click", nextStage); /*Tilføjer eventlistener til alle knapper, der lytter efter et klik og kalder funktionen nextStage*/
}