
//This script is to change the dolors of the page when the theme selector has fark selected

const themeSelector = document.querySelector('#theme-selector')//(Hint: document.querySelector)
function changeTheme() {
    const selectedTheme = themeSelector.value
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
    if (selectedTheme === 'dark') {
        ReportBody.classList.add('dark');
        img.src = byui-logo_white.png
    }
    else {
        ReportBody.classList.remove('dark')
        img.src = logo.webp
    }

// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);