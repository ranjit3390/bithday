function showWish () {
    const box = document.getElementById('wishbox');
    box.classList.remove('hidden');
}

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 150;
const confettis = [];

for (let i = 0; i < confettiCount; i++) {
    confettis.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 50,
        title: Math.floor(Math.random() * 10)-5 
     });
}

function drawConfetti() {
    ctx.clearRect(0,0, canvas.width,canvas.height);
    confettis.forEach(p => {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r,0,Math.PI *2);
        ctx.fill();
        p.y += Math.cos(p.d) + 1;
        p.x += Math.sin(p.d);

        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(drawConfetti);
}

drawConfetti();
