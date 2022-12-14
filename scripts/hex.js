//Hex values array
const hex = ["0", "1", "2",  "3",  "4",  "5",  "6",  "7",  "8", "9", "A", "B", "C", "D", "E", "F"];

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

//Defining variables
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const card = document.querySelector(":root");
const cardCenter = document.getElementById('card');
const mage = document.getElementById('mage');
const magic = document.getElementById('magic');

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

btn.addEventListener('click', function(){
    //Without the '#' would never work out.
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        const randomNumber = getRandomNumber();
        console.log(randomNumber)
        hexColor += hex[randomNumber];
        
    }
    color.textContent = hexColor;
    card.style.setProperty('--card-top', hexColor)
})

window.addEventListener('load', function(){
    mage.innerText = mageArr[Math.floor(Math.random() * mageArr.length)];
});

window.addEventListener('load', function(){
    magic.innerText = magicArr[Math.floor(Math.random() * magicArr.length)];
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}