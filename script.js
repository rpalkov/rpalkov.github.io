

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