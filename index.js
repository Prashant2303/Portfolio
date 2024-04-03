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

    // Dark Mode Toggle
    const bodyEl = document.querySelector('body');
    const darkMode = 'dark-mode';
    if (localStorage.getItem(darkMode) === 'true') {
        bodyEl.classList.add(darkMode);
    }
    const handleMode = () => {
        // if(bodyEl.classList.contains(darkMode)) {
        //     localStorage.setItem(darkMode, 'false');
        // } else {
        //     localStorage.setItem(darkMode, 'true' )
        // }
        localStorage.setItem(darkMode, !bodyEl.classList.contains(darkMode))
        bodyEl.classList.toggle(darkMode);
    }
    document.querySelector('#toggle-btn').addEventListener('click', handleMode)
})()