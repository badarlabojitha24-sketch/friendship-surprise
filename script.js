// Original message
const fullMessage = `
Some people come into our lives unexpectedly
and become one of the most beautiful chapters
of our story.

Thank you for every laugh,
every smile,
every memory,
and every moment we shared.

You are truly one of the best people
We've ever met.

No matter how busy life gets,
we hope our friendship always stays the same.

May your life always be filled with
happiness, success, peace,
and endless smiles.

❤️ Happy Friendship Day ❤️

With lots of love,
-Boji , John 😊
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