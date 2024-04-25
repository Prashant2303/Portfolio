(function () {
    // Theme Toggle
    const bodyEl = document.querySelector('html');
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

    // Duplicate list elements
    const scrollerInners = document.querySelectorAll('.scroller-inner');
    scrollerInners.forEach(scrollerInner => {
        const children = Array.from(scrollerInner.children);
        children.forEach(child => {
            const duplicateEl = child.cloneNode(true);
            duplicateEl.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicateEl);
        })
    })
})()