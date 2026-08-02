// Original message
const fullMessage = `
Thanatho Vundey, Okkakka Nimisham Marala Marala, Pudathava Manasa.

❤️ Happy Friendship Day ❤️

With lots of love,
-Boji 😊
`;

function startSurprise() {

    // Play music
    const music = document.getElementById("bgMusic");

    music.play().catch(function(error){
        console.log(error);
    });

    // Hide first screen
    document.getElementById("welcome").style.display = "none";

    // Show surprise
    const surprise = document.getElementById("surprise");
    surprise.classList.remove("hidden");

    // Typewriter effect
    const msg = document.querySelector(".message");
    msg.innerHTML = "";

    let i = 0;

    function typing() {

        if(i < fullMessage.length){

            msg.innerHTML += fullMessage.charAt(i);

            i++;

            setTimeout(typing,40);

        }

    }

    typing();

}
