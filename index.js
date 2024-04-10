(function () {
    // Theme Toggle
    const bodyEl = document.querySelector('body');
    const lightMode = 'light-mode';
    if (localStorage.getItem(lightMode) === 'true') {
        bodyEl.classList.add(lightMode);
    }

    const handleMode = () => {
        document.querySelector('#light-icon').classList.toggle('hidden');
        document.querySelector('#dark-icon').classList.toggle('hidden');
        bodyEl.classList.toggle(lightMode);
        localStorage.setItem(lightMode, bodyEl.classList.contains(lightMode))
    }
    document.querySelector('#theme-toggle').addEventListener('click', handleMode)

    // Menu Toggle
    const toggleEl = document.querySelector('#menu-toggle');
    const menuEl = document.querySelector('.menu');
    toggleEl.addEventListener('click', () => {
        toggleEl.classList.toggle('toggle');
        menuEl.classList.toggle('visible');
    })
})()