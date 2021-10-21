// Show next element
const showNextOne = arr => {
    for (let i = 0; i < showGameBtn.length; i++){
        arr[i].addEventListener('click', event => {
            let showStage = arr[i].nextElementSibling;
            let stageStatus = window.getComputedStyle(showStage).display;
            if(stageStatus === 'none'){
                showStage.style.display = 'block';
            } else {
                showStage.style.display = 'none';
            }
        })
    }
}
// Show Games
const showGameBtn = document.querySelectorAll('.games h3');
showNextOne(showGameBtn);

// Lucky Color Game
const colors = ['red', 'blue', 'yellow', 'pink', 'white', 'green', 'black', 'green', 'brown', 'purple', 'violet', 'gray'];
const theLuckyColor = document.getElementById('theLuckyColor');
const colorList = document.getElementById('colorList');
const playAgain = document.getElementById('playAgain');
colorList.innerHTML = colors.join(', ');

const  chooseColor = (colorArray, colorPlace) => {
    colorNum = Math.floor(Math.random() * (colorArray.length - 1));
    colorPlace.color = colorArray[colorNum];
    colorPlace.innerHTML = colorPlace.color;
    colorPlace.style.backgroundColor = colorPlace.color;
    const lightColor = ['yellow', 'white', 'pink'];
    if(lightColor.includes(colorPlace.color)){
        colorPlace.style.color = 'black';
    } else {
        colorPlace.style.color = 'white';
    }
} 
chooseColor(colors, theLuckyColor);
playAgain.addEventListener('click', event => {chooseColor(colors, theLuckyColor)});
