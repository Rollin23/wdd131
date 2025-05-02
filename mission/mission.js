
//This script is to change the dolors of the page when the theme selector has fark selected

const themeSelector = document.querySelector('#theme-selector');
const logoImg = document.querySelector('.logoImg');

function changeTheme() {
    const selectedTheme = themeSelector.value

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        logoImg.src = 'byui-logo_white.png';
    } else {
        document.body.classList.remove('dark');
        logoImg.src = 'logo.webp';
    }

}

themeSelector.addEventListener('change', changeTheme);