(function () {
    // Dynamic Text
    const dynamicTextArray = ['Unnecessary', 'Inaccessible', 'Slow', 'kinda Cool'];
    const dynamicText = document.querySelector('#dynamic-text');
    console.log(dynamicText.innerHTML, localStorage.getItem('dark-mode'));

    let i = 0;
    setInterval(() => {
        if (i === dynamicTextArray.length) {
            i = 0;
        }
        dynamicText.innerHTML = dynamicTextArray[i++];
    }, 2000)

    // Theme Toggle
    const bodyEl = document.querySelector('body');
    const lightMode = 'light-mode';
    if (localStorage.getItem(lightMode) === 'true') {
        bodyEl.classList.add(lightMode);
    }

    const handleMode = () => {
        const icon = document.querySelector('.material-symbols-rounded');
        icon.innerHTML = bodyEl.classList.contains(lightMode) ? 'light_mode' : 'dark_mode';
        bodyEl.classList.toggle(lightMode);
        localStorage.setItem(lightMode, bodyEl.classList.contains(lightMode))
    }
    document.querySelector('#toggle-btn').addEventListener('click', handleMode)
})()