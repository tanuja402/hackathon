const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');
const resultText = document.getElementById('resultText');

function drawDice(number) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(150, 20);
    ctx.lineTo(180, 50);
    ctx.lineTo(180, 150);
    ctx.lineTo(150, 180);
    ctx.lineTo(50, 180);
    ctx.lineTo(20, 150);
    ctx.lineTo(20, 50);
    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = 'black';
    switch (number) {
        case 1:
            drawDot(100, 100);
            break;
        case 2:
            drawDot(60, 60);
            drawDot(140, 140);
            break;
        case 3:
            drawDot(60, 60);
            drawDot(100, 100);
            drawDot(140, 140);
            break;
        case 4:
            drawDot(60, 60);
            drawDot(140, 140);
            drawDot(140, 60);
            drawDot(60, 140);
            break;
        case 5:
            drawDot(60, 60);
            drawDot(140, 140);
            drawDot(140, 60);
            drawDot(60, 140);
            drawDot(100, 100);
            break;
        case 6:
            drawDot(60, 60);
            drawDot(140, 140);
            drawDot(140, 60);
            drawDot(60, 140);
            drawDot(60, 100);
            drawDot(140, 100);
            break;
    }
    
    resultText.textContent = `Rolled Dice: ${number}`;
}

function drawDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    drawDice(randomNumber);
}

document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        rollDice();
    }
});

drawDice(1);
