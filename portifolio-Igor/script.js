function toggleMenu(){
    const sidbar = document.getElementById('sidbar')
    if (sidbar.style.width === '250px') {
        sidbar.style.width = '0';
    } else {
        sidbar.style.width = '250px';
    }
};