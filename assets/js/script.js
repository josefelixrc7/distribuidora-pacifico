$(document).ready(function() {

    // Cambiar estilo del navbar al hacer scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('#mainNav').addClass('navbar-scrolled');
        } else {
            $('#mainNav').removeClass('navbar-scrolled');
        }
    });
    // Dibujar en todos los canvas placeholders un fondo marino
    $('.canvas-placeholder').each(function() {
        var canvas = this;
        var ctx = canvas.getContext('2d');
        var w = canvas.width;
        var h = canvas.height;

        // Fondo degradado azul
        var gradient = ctx.createLinearGradient(0, 0, 0, h);
        gradient.addColorStop(0, '#a8ede0');
        gradient.addColorStop(1, '#fed6e3');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);

        // Dibujar ondas
        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.lineWidth = 3;
        for (var i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(0, h * 0.3 + i * 20);
            ctx.bezierCurveTo(w * 0.25, h * 0.2 + i * 10, w * 0.75, h * 0.4 + i * 10, w, h * 0.25 + i * 15);
            ctx.strokeStyle = 'rgba(255,255,255,0.3)';
            ctx.stroke();
        }

        // Dibujar peces pequeños como puntos
        ctx.fillStyle = '#ffffff';
        for (var j = 0; j < 5; j++) {
            var x = Math.random() * w;
            var y = Math.random() * h;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.6)';
            ctx.fill();
        }

        // Opcional: texto de placeholder
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#1e7e8c';
        ctx.textAlign = 'center';
        ctx.fillText('Canvas', w/2, h/2);
    });
});