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

function populateProjectsList() {
    const projects = [
        {
            title: "MQL Extension",
            link: "https://chromewebstore.google.com/detail/mql-extensions/khgcpljhlkiljndnfbijcjdkolhgocic?pli=1",
            tech: "ReactJS, Vite and Chrome Browser",
            points: [
                "Developed a Chrome extension to streamline interactions with MyQuestionList, enhancing user productivity.",
                "Implemented using ReactJS with Context API to effectively manage state.",
                "Integrated a Service Worker to sync login states with the main application, improving user session reliability.",
                "Published the extension on the Chrome Web Store, making it accessible for potential users globally."
            ]
        }
    ]

    const projectsEl = document.querySelector('.projects-section .projects');
    for (const project of projects) {
        const projectEl = document.createElement('div');
        projectEl.classList.add('project');

        const headingEl = document.createElement('span');
        headingEl.classList.add('heading');
        headingEl.innerText = project.title;
        projectEl.appendChild(headingEl);

        const infoEl = document.createElement('span');
        infoEl.innerHTML = ` | <i>${project.tech}</i> | <a href="${project.link}" target="_blank">Live Link 🔗</a>`;
        projectEl.appendChild(infoEl);

        const ulEl = document.createElement('ul');
        for (const point of project.points) {
            const liEl = document.createElement('li');
            liEl.innerText = point;
            ulEl.appendChild(liEl);
        }
        projectEl.appendChild(ulEl);

        projectsEl.appendChild(projectEl);
    }
}
populateProjectsList();