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

    // Setup section contact
    $('.section-contact').html(`
        <section class="py-5 bg-primary text-white" style="background: linear-gradient(135deg, #0a2f44 0%, #1e7e8c 100%);">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8">
                        <h2 class="display-6 fw-bold mb-3 text-white">¿Tienes un negocio o quieres distribuir nuestros productos?</h2>
                        <p class="lead mb-4 opacity-90">Estamos buscando alianzas con restaurantes, hoteles y tiendas gourmet. Cuéntanos tu proyecto y te asesoramos.</p>
                        <div class="row g-3">
                            <div class="col-md-4">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-phone-alt fs-4 me-3 bg-white text-primary p-3 rounded-circle"></i>
                                    <div>
                                        <small>Llamanos</small>
                                        <p class="fw-bold mb-0">+58 212 555 1234</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-envelope fs-4 me-3 bg-white text-primary p-3 rounded-circle"></i>
                                    <div>
                                        <small>Escríbenos</small>
                                        <p class="fw-bold mb-0">ventas@elpacifico.com</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-clock fs-4 me-3 bg-white text-primary p-3 rounded-circle"></i>
                                    <div>
                                        <small>Horario</small>
                                        <p class="fw-bold mb-0">Lun-Vie 8am - 6pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
                        <img src="/assets/images/logo.png" alt="Distribuidora El Pacifico" class="img-fluid mb-3 text-center" width="250">
                        <div>
                            <a href="/contacto/" class="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill shadow">
                                <i class="fas fa-paper-plane me-2"></i>Contactar ahora
                            </a>
                        </div>
                        <p class="mt-3 small opacity-75">Respondemos en menos de 24h</p>
                    </div>
                </div>
            </div>
        </section>
    `);

    // Función para dibujar canvas del carrusel con diferentes estilos
    function drawCarouselCanvases() {
        // Canvas principales del carrusel
        $('.canvas-carousel').each(function(index) {
            var canvas = this;
            var ctx = canvas.getContext('2d');
            var w = canvas.width;
            var h = canvas.height;
            
            // Diferentes gradientes según la posición
            var gradients = [
                ['#1e7e8c', '#0a2f44'], // Azul oscuro
                ['#c99e6d', '#b38958'], // Dorado
                ['#166a76', '#1e7e8c'], // Azul medio
                ['#0a2f44', '#1e7e8c']  // Azul profundo
            ];
            
            var gradient = ctx.createLinearGradient(0, 0, w, h);
            gradient.addColorStop(0, gradients[index % gradients.length][0]);
            gradient.addColorStop(1, gradients[index % gradients.length][1]);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, w, h);
            
            // Dibujar iconos de peces/olas
            ctx.fillStyle = 'rgba(255,255,255,0.1)';
            for (var i = 0; i < 10; i++) {
                var x = Math.random() * w;
                var y = Math.random() * h;
                var size = Math.random() * 30 + 10;
                ctx.beginPath();
                ctx.arc(x, y, size/2, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // Dibujar texto del producto
            ctx.font = 'bold 24px Poppins, sans-serif';
            ctx.fillStyle = 'rgba(255,255,255,0.3)';
            ctx.textAlign = 'center';
            ctx.fillText('🐟', w/2, h/2);
        });
        
        // Miniaturas
        $('.canvas-thumbnail').each(function(index) {
            var canvas = this;
            var ctx = canvas.getContext('2d');
            var w = canvas.width;
            var h = canvas.height;
            
            var gradient = ctx.createLinearGradient(0, 0, 0, h);
            gradient.addColorStop(0, '#a8ede0');
            gradient.addColorStop(1, '#fed6e3');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, w, h);
            
            ctx.font = 'bold 16px Poppins, sans-serif';
            ctx.fillStyle = '#1e7e8c';
            ctx.textAlign = 'center';
            ctx.fillText('🔍', w/2, h/2);
        });
    }

    // Llamar a la función después de que el documento esté listo
    $(document).ready(function() {
        // ... (tu código existente)
        
        // Dibujar carruseles
        drawCarouselCanvases();
        
        // Hacer que las miniaturas sean clickeables (Bootstrap ya lo maneja con data-bs-slide-to)
    });
});