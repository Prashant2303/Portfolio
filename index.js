(function () {
    // Theme Toggle
    const bodyEl = document.querySelector('html');
    const sunIcon = document.querySelector('#light-icon');
    const moonIcon = document.querySelector('#dark-icon');
    const lightMode = 'light-mode';

    if (localStorage.getItem(lightMode) === 'true') {
        bodyEl.classList.add(lightMode);
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }

    const handleMode = () => {
        sunIcon.classList.toggle('hidden');
        moonIcon.classList.toggle('hidden');
        bodyEl.classList.toggle(lightMode);
        localStorage.setItem(lightMode, bodyEl.classList.contains(lightMode))
    }
    document.querySelector('#theme-toggle').addEventListener('click', handleMode)

    // Menu Toggle
    const toggleEl = document.querySelector('#menu-toggle');
    const menuEl = document.querySelector('.menu');
    function toggle() {
        toggleEl.classList.toggle('toggle');
        menuEl.classList.toggle('visible');
    }
    toggleEl.addEventListener('click', toggle);
    menuEl.addEventListener('click', toggle);

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

    // Fade In
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        })
    });

    document.querySelectorAll('.fade-out').forEach(section => {
        observer.observe(section);
    })
})()