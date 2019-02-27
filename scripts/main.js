var mainBlock = document.getElementsByClassName('general-Block');

function scrollToMain() {
    mainBlock[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
}