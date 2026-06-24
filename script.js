// =============================
// Birthday Website - Om Anton
// =============================

const startBtn = document.getElementById("start");
const home = document.getElementById("home");
const gallery = document.getElementById("gallery");
const wish = document.getElementById("wish");
const music = document.getElementById("music");

const slides = document.querySelectorAll(".slide");
const typing = document.getElementById("typing");

let current = 0;

// Pesan ulang tahun
const message =
`Selamat Ulang Tahun, Om Anton.

Semoga Om selalu diberikan kesehatan,
umur yang panjang,
rezeki yang melimpah,
serta kebahagiaan di setiap langkah.

Terima kasih telah menjadi sosok ayah
yang penuh kasih, sabar,
dan selalu memberikan teladan yang baik.

Semoga semua doa dan harapan Om
dikabulkan oleh Tuhan.

Selamat menikmati hari yang spesial ini.

🎉 Happy Birthday Om Anton 🎉`;

startBtn.addEventListener("click", () => {

    home.style.display = "none";
    gallery.style.display = "flex";

    music.play().catch(() => {
        console.log("Browser memblokir autoplay.");
    });

    slideShow();

});

function slideShow(){

    let index = 0;

    slides[index].classList.add("active");

    const interval = setInterval(() => {

        slides[index].classList.remove("active");

        index++;

        if(index >= slides.length){

            clearInterval(interval);

            gallery.style.display = "none";

            wish.style.display = "flex";

            typeText();

            return;
        }

        slides[index].classList.add("active");

    },3000);

}

function typeText(){

    let i = 0;

    const speed = 45;

    const interval = setInterval(()=>{

        typing.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){

            clearInterval(interval);

            createConfetti();

        }

    },speed);

}


// =============================
// Confetti
// =============================

function createConfetti(){

    for(let i=0;i<120;i++){

        const confetti = document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDuration=
        (Math.random()*3+2)+"s";

        confetti.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },5000);

    }

}