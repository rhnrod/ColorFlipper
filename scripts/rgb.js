// Defining variables
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const card = document.querySelector(":root");
const mage = document.getElementById('mage');
const magic = document.getElementById('magic');
const cardCenter = document.getElementById('card');
const rgbColor = {
    r: '',
    g: '',
    b: ''
};

//Emoji & expression array
const magicArr = [
    "๐ฆพ", "๐ซ", "๐ง ",
    "โก", "๐ฅ", "โจ", "๐ซง",
    "๐", "๐", "๐ฅญ", "๐ฅฅ", "๐",
    "๐", "๐", "๐", "๐ฑ", "๐ฃ", "๐ค", "๐ซ",
    "๐ซ", "๐ฅค", "๐ง", "๐ง",
    "๐", "๐น๏ธ", "๐งถ", "๐"
];
const mageArr = ["๐จโ๐ป", "๐ฅท", "๐งโโ๏ธ"];


// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});



//Defining functions
cardCenter.addEventListener('click', function(){
    navigator.clipboard.writeText(color.textContent);
    alert(`Copied ${color.textContent}`);
});

btn.addEventListener('click', function() {
    rgbColor.r = getRandomNumber();
    rgbColor.g = getRandomNumber();
    rgbColor.b = getRandomNumber();

    const setRgbColor = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`

    card.style.setProperty('--card-top', setRgbColor);
    color.textContent = setRgbColor;

});

window.addEventListener('load', function(){
    mage.innerText = mageArr[Math.floor(Math.random() * mageArr.length)];
});

window.addEventListener('load', function(){
    magic.innerText = magicArr[Math.floor(Math.random() * magicArr.length)];
});

function getRandomNumber(min, max) {
    min = Math.ceil(0);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max - min) + min);
}