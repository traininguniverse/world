document.addEventListener('DOMContentLoaded', () => {
    const quoteParts = document.querySelectorAll('.quote-part');
    
    // Rozbij każde słowo na litery
    quoteParts.forEach(part => {
        const word = part.textContent;
        const letters = word.split('').map(letter => 
            `<span class="letter">${letter}</span>`
        ).join('');
        part.innerHTML = letters;
    });

    const quoteWrapper = document.querySelector('.main-quote');
    
    // Dodaj efekt falowania przy hover
    quoteWrapper.addEventListener('mouseenter', () => {
        document.querySelectorAll('.letter').forEach((letter, index) => {
            letter.classList.add('wavy');
            letter.style.animationDelay = `${index * 0.05}s`;
        });
    });

    // Usuń efekt falowania
    quoteWrapper.addEventListener('mouseleave', () => {
        document.querySelectorAll('.letter').forEach(letter => {
            letter.classList.remove('wavy');
            letter.style.animationDelay = '0s';
        });
    });

    // Obsługa przewijania
    const scrollIndicators = document.querySelectorAll('.scroll-indicator');
    
    scrollIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            const sections = document.querySelectorAll('section');
            if (index < sections.length - 1) {
                sections[index + 1].scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });

    // Animacja contentu przy scrollowaniu
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '-50px'
    };

    const contentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Obserwuj wszystkie elementy z klasą content
    document.querySelectorAll('.second-section .content').forEach(content => {
        contentObserver.observe(content);
    });
});
