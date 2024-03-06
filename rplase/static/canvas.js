document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.addEventListener('mousedown', function(event) {
        var x = event.offsetX;
        var y = event.offsetY;

        // Конвертуємо координати кліка у координати пікселя на полотні
        var pixelX = Math.floor(x);
        var pixelY = Math.floor(y);

        // Замальовуємо піксель червоним кольором, розміром 5x5 пікселів
        ctx.fillStyle = 'red';
        ctx.fillRect(pixelX - 2, pixelY - 2, 5, 5);
    });
});