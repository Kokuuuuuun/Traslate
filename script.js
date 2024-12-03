const logo = document.getElementById('checkbox');
const blacktext = document.getElementById('whitext');
const blacktext2 = document.getElementById('whitext2');
const blacktext3 = document.getElementById('whitext3');
const blacktext4 = document.getElementById('whitext4');
const blacktext5 = document.getElementById('whitext5');
const blacktext00 = document.getElementById('whitext00');
const blacktext6 = document.getElementById('whitext6');
const blacktext7 = document.getElementById('whitext7');
const blacktext8 = document.getElementById('whitext8');
const blacktext9 = document.getElementById('whitext9');
const blacktext0 = document.getElementById('whitext0');
const blacktext10 = document.getElementById('whitext10');
const blacktext11 = document.getElementById('whitext11');
const blacktext12 = document.getElementById('whitext12');
const blacktext13 = document.getElementById('whitext13');
const blacktext14 = document.getElementById('whitext14');
const blacktext15 = document.getElementById('whitext15');

// Función para aplicar el modo oscuro
function applyDarkMode() {
    document.body.classList.add('dark-mode');
    document.getElementById("moon").style.display = "block";
    document.getElementById("sun").style.display = "none";
    blacktext.classList.add('dark-mode');
    blacktext2.classList.add('dark-mode');
    blacktext3.classList.add('dark-mode');
    blacktext4.classList.add('dark-mode');
    blacktext5.classList.add('dark-mode');
    blacktext6.classList.add('dark-mode');
    blacktext7.classList.add('dark-mode');
    blacktext8.classList.add('dark-mode');
    blacktext9.classList.add('dark-mode');
    blacktext0.classList.add('dark-mode');
    blacktext10.classList.add('dark-mode');
    blacktext11.classList.add('dark-mode');
    blacktext12.classList.add('dark-mode');
    blacktext13.classList.add('dark-mode');
    blacktext14.classList.add('dark-mode');
    blacktext15.classList.add('dark-mode');
}

// Función para quitar el modo oscuro
function removeDarkMode() {
    document.body.classList.remove('dark-mode');
    document.getElementById("sun").style.display = "block";
    document.getElementById("moon").style.display = "none";
    blacktext.classList.remove('dark-mode');
    blacktext2.classList.remove('dark-mode');
    blacktext3.classList.remove('dark-mode');
    blacktext4.classList.remove('dark-mode');
    blacktext5.classList.remove('dark-mode');
    blacktext6.classList.remove('dark-mode');
    blacktext7.classList.remove('dark-mode');
    blacktext8.classList.remove('dark-mode');
    blacktext9.classList.remove('dark-mode');
    blacktext0.classList.remove('dark-mode');
    blacktext10.classList.remove('dark-mode');
    blacktext11.classList.remove('dark-mode');
    blacktext12.classList.remove('dark-mode');
    blacktext13.classList.remove('dark-mode');
    blacktext14.classList.remove('dark-mode');
    blacktext15.classList.remove('dark-mode');

}

document.getElementById('whitext2').addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight * 0.2,
        behavior: 'smooth'
    });
});

document.getElementById('whitext3').addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight * 1.45,
        behavior: 'smooth'
    });
});

document.getElementById('whitext4').addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight * 2.85,
        behavior: 'smooth'
    });
});

document.getElementById('cv-button').addEventListener('click', () => {
    const pdf = '/Curriculum/Curriculum-Gilbert.pdf';
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'Curriculum vitae - Gilbert Castillo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});