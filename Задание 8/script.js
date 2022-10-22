const randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const getRandomColor = () => { 
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const isDraw = () => {
    let WIDTH = 800, HEIGHT = 600;
    let canvas = document.getElementById('canv');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    for(let i = 10; i <= 100; i++){
        let rectSize = randomInt(10, 100);
        let x = randomInt(0, WIDTH);
        let y = randomInt(0, HEIGHT);
        ctx.fillStyle = getRandomColor();
        ctx.fillRect(x, y, rectSize, rectSize);
    }
}

setInterval(() => {
    isDraw();
}, 1000);
