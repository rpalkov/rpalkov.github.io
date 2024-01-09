

document.querySelector('.arrow-link').addEventListener('click', function (event) {
    event.preventDefault();
    const nextSection = document.querySelector('#next-section');
    nextSection.scrollIntoView({
        behavior: 'smooth'
    });
    this.classList.add('hide');
});

window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const arrowLink = document.querySelector('.arrow-link');
    if (scrollTop === 0) {
        arrowLink.classList.remove('hide');
    } else {
        arrowLink.classList.add('hide');
    }
});

particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: {
            value: '#ffffff' 
        },
        shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
        opacity: { value: 0.5, random: false, anim: { enable: false } },
        size: { value: 3, random: true, anim: { enable: false } },
        line_linked: { enable: true, distance: 150, color: '#000000', opacity: 0.4, width: .5 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
});
