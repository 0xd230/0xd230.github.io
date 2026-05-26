const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

let particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


for (let i = 0; i < 50; i++) {
    let radius = Math.random() * 4 + 2;

    particles.push({
        radius : radius,
        x : Math.random() * window.innerWidth,
        y : Math.random() * canvas.height,
        v_x : Math.random(),
        v_y : Math.random() * 0.6 + 0.4
    });
}

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((obj) => {
        obj.y -= obj.v_y;
        
        if ((obj.y - obj.radius) < 0) {
            obj.y = canvas.height + obj.radius
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 0, 0, ${(obj.y / canvas.height)})`;
        ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(updateCanvas);
}

updateCanvas();