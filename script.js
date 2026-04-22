const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            card.classList.add('visible');
        }
    });
});

window.addEventListener('load', () => {
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, i * 200);
    });
});

function filtrar(tipo) {
    cards.forEach(card => {
        if (tipo === 'todos') {
            card.style.display = 'block';
        } else if (card.classList.contains(tipo)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function irPortafolio() {
    document.getElementById("portafolio").scrollIntoView({
        behavior: "smooth"
    });
}

function mostrarPortafolio() {
    const hero = document.getElementById("hero");
    const portafolio = document.getElementById("portafolio");

    hero.classList.add("ocultar");

    setTimeout(() => {
        hero.style.display = "none";

        portafolio.classList.remove("oculto");

        setTimeout(() => {
            portafolio.classList.add("mostrar");
        }, 50);

    }, 1000);
}