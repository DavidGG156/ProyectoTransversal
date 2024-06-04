//SLIDER
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
let currentIndex = 0;
const slideWidth = slides[0].clientWidth;

function nextSlide() {
    if (currentIndex >= slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlide();
}

function updateSlide() {
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

setInterval(nextSlide,3000);

//GRAFICA

        const populationData = {
            labels: [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2023],
            datasets: [{
                label: 'Población Mundial (en miles de millones)',
                data: [2.5, 3.0, 3.7, 4.4, 5.3, 6.1, 6.9, 7.8, 8.0],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        };
        const config = {
            type: 'line',
            data: populationData,
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        };

        const ctx = document.getElementById('populationChart').getContext('2d');
        new Chart(ctx, config);

//FORMULARIO
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    this.contact_number.value = Math.random() * 100000 | 0;

    emailjs.sendForm('service_tpt76wa', 'template_pqfurth', this)
        .then(function() {
            alert('Correo enviado exitosamente!');
        }, function(error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});

//API MAPA


