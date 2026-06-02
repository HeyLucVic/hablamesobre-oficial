const modal = document.getElementById("betaModal");

const openBtn = document.getElementById("openBetaModal");

const closeBtn = document.querySelector(".close-modal");

openBtn.addEventListener("click", function(e){

e.preventDefault();

modal.style.display = "block";

});

closeBtn.addEventListener("click", function(){

modal.style.display = "none";

});

window.addEventListener("click", function(e){

if(e.target === modal){

modal.style.display = "none";

}

});

/* ========================= */
/* MODAL BIENVENIDA */
/* ========================= */

document.addEventListener("DOMContentLoaded", () => {

    const welcomeModal =
        document.getElementById("welcomeModal");

    const continueBtn =
        document.getElementById("continueBtn");

    const hideWelcome =
        document.getElementById("hideWelcome");

    if(
        localStorage.getItem("hideWelcome")
        !== "true"
    ){

        welcomeModal.style.display = "block";

    }

    continueBtn.addEventListener("click", () => {

        if(hideWelcome.checked){

            localStorage.setItem(
                "hideWelcome",
                "true"
            );

        }

        welcomeModal.style.display = "none";

    });

});

const introBtn =
document.getElementById("openWelcomeModal");

if(introBtn){

introBtn.addEventListener("click", () => {

const modal =
document.getElementById("welcomeModal");

modal.style.display = "block";

const audio =
modal.querySelector("audio");

if(audio){

audio.currentTime = 0;

audio.play();

}

});

}