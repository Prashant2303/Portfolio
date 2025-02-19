export function handleScroll() {
    const snapEl = document.querySelector('.snap-con');
    snapEl.scrollTop = 0;
    const absEl = document.querySelector('.absolute');
    const bioEl = document.querySelector('.bio');
    const aboutEl = document.querySelector('.about-section');
    snapEl.addEventListener('scroll', () => {
        if (snapEl.scrollTop > 250) {
            absEl.style.right = '50%';
            bioEl.style.opacity = 1;
            aboutEl.style.display = 'none';
        } else {
            absEl.style.right = '0';
            bioEl.style.opacity = 0;
            aboutEl.style.display = 'block';
        }
    })
}