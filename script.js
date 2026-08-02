// Original message
const fullMessage = `
            Some people enter our lives and
            become unforgettable.

            Thank you for every laugh,
            every memory,
            every silly conversation,
            every moment of support,
            and for simply being YOU.

            I hope our friendship stays
            beautiful forever.

            Wishing you happiness,
            success,
            and endless smiles

❤️ Happy Friendship Day ❤️

With lots of love,
-Boji , john😊
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