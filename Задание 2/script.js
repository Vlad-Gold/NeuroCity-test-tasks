const isDraw = () => {
    let WIDTH = 800, HEIGHT = 600;
    let canvas = document.getElementById('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,WIDTH,HEIGHT);


    // окружность
    let arcRadius = 50;
    ctx.fillStyle = "red";
    ctx.arc(0 + arcRadius, 0 + arcRadius, arcRadius, 0, 2 * Math.PI, false);
    ctx.fill();

    // Треугольник
    let trSize = 100;
    ctx.fillStyle = 'grey';
    ctx.beginPath();
    ctx.moveTo(0, HEIGHT);
    ctx.lineTo(trSize/2, HEIGHT - trSize);
    ctx.lineTo(trSize, HEIGHT);
    ctx.fill();
   
    // квадрат
    let sqrSize = 100;
    ctx.fillStyle = "yellow";
    ctx.fillRect(WIDTH - sqrSize, 0, sqrSize, sqrSize);

    // прямоугольник
    let rectSize = sqrSize*1.5;
    ctx.fillStyle = "black";
    ctx.fillRect(WIDTH - sqrSize, HEIGHT - rectSize, sqrSize, rectSize);

    
}


// Ну и вызываем рисовалку
isDraw();



