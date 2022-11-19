//Hex values array
const hex = ["0", "1", "2",  "3",  "4",  "5",  "6",  "7",  "8", "9", "A", "B", "C", "D", "E", "F"];

//Emoji & expression array
const magicArr = [
    "🦾", "🫀", "🧠",
    "⚡", "🔥", "✨", "🫧",
    "🍊", "🍋", "🥭", "🥥", "🍄",
    "🍟", "🍔", "🍕", "🍱", "🍣", "🍤", "🍫",
    "🫖", "🥤", "🧋", "🧉",
    "🎈", "🕹️", "🧶", "📚"
];
const mageArr = ["👨‍💻", "🥷", "🧙‍♂️"];

//Defining variables
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const card = document.querySelector(":root");
const mage = document.getElementById('mage');
const magic = document.getElementById('magic');


//Defining functions
color.addEventListener('click', function(){
    navigator.clipboard.writeText(color.textContent);
    alert(`Copied ${color.textContent}`)
})

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