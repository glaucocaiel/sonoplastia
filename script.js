let animationInterval;
let isAnimating = true;

// Função de animação do processo de ligar
function animateLigar() {
    const itemsLigar = document.querySelectorAll('#ligar-process .process-item');
    itemsLigar.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
            const icon = item.querySelector('.icon');
            setTimeout(() => {
                icon.classList.add('green'); // Altera para verde após 2 segundos
            }, 2000);
        }, index * 1000);
    });
}

// Função de animação do processo de desligar
function animateDesligar() {
    const itemsDesligar = document.querySelectorAll('#desligar-process .process-item');
    itemsDesligar.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
            const icon = item.querySelector('.icon');
            icon.classList.add('green'); // Inicia com o ícone verde
            setTimeout(() => {
                icon.classList.remove('green'); // Altera para cinza após 2 segundos
            }, 2000);
        }, index * 1000);
    });
}

// Função para iniciar o loop da animação
function startAnimationLoop() {
    animateLigar();
    setTimeout(animateDesligar, 5000); // Inicia o processo de desligar após o processo de ligar

    // Reinicia o loop a cada 12 segundos
    animationInterval = setInterval(() => {
        resetAnimation();
        animateLigar();
        setTimeout(animateDesligar, 5000);
    }, 12000);
}

// Função para reiniciar a animação
function resetAnimation() {
    document.querySelectorAll('.process-item').forEach(item => {
        item.classList.remove('visible');
        const icon = item.querySelector('.icon');
        icon.classList.remove('green');
    });
}

// Função para parar e reiniciar a animação ao clicar no botão
document.getElementById('toggleButton').addEventListener('click', () => {
    if (isAnimating) {
        clearInterval(animationInterval);
        resetAnimation();
        document.getElementById('toggleButton').innerText = "Reiniciar Animação";
    } else {
        startAnimationLoop();
        document.getElementById('toggleButton').innerText = "Parar Animação";
    }
    isAnimating = !isAnimating;
});

// Iniciar o loop da animação ao carregar a página
startAnimationLoop();
