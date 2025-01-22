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
});
