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
const playAgainColor = document.getElementById('playAgainColor');
colorList.innerHTML = colors.join(', ');

const  chooseColor = (colorArray, colorPlace) => {
    colorNum = Math.floor(Math.random() * colorArray.length);
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
playAgainColor.addEventListener('click', event => {chooseColor(colors, theLuckyColor)});

// Dice
const dice = [
    {
        num: 1,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.62 419.4 32 384 32zM224 288C206.4 288 192 273.6 192 256s14.38-32 32-32s32 14.38 32 32S241.6 288 224 288z"/></svg>'
    } , {
        num: 2,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.62 419.4 32 384 32zM128 192C110.4 192 96 177.6 96 160s14.38-32 32-32s32 14.38 32 32S145.6 192 128 192zM320 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 384 320 384z"/></svg>'
    } , {
        num: 3,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.62 419.4 32 384 32zM128 192C110.4 192 96 177.6 96 160s14.38-32 32-32s32 14.38 32 32S145.6 192 128 192zM224 288C206.4 288 192 273.6 192 256s14.38-32 32-32s32 14.38 32 32S241.6 288 224 288zM320 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 384 320 384z"/></svg>'
    } , {
        num: 4,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.62 419.4 32 384 32zM128 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S145.6 384 128 384zM128 192C110.4 192 96 177.6 96 160s14.38-32 32-32s32 14.38 32 32S145.6 192 128 192zM320 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 384 320 384zM320 192c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 192 320 192z"/></svg>'
    } , {
        num: 5,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.62 419.4 32 384 32zM128 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S145.6 384 128 384zM128 192C110.4 192 96 177.6 96 160s14.38-32 32-32s32 14.38 32 32S145.6 192 128 192zM224 288C206.4 288 192 273.6 192 256s14.38-32 32-32s32 14.38 32 32S241.6 288 224 288zM320 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 384 320 384zM320 192c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 192 320 192z"/></svg>'
    } , {
        num: 6,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.62 419.4 32 384 32zM128 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S145.6 384 128 384zM128 288C110.4 288 96 273.6 96 256s14.38-32 32-32s32 14.38 32 32S145.6 288 128 288zM128 192C110.4 192 96 177.6 96 160s14.38-32 32-32s32 14.38 32 32S145.6 192 128 192zM320 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 384 320 384zM320 288c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 288 320 288zM320 192c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 192 320 192z"/></svg>'
    }
];
const yourDiceSVG = document.getElementById('yourDiceSVG');
const myDiceSVG = document.getElementById('myDiceSVG');
const diceResult = document.getElementById('diceResult');
const playAgainDice = document.getElementById('playAgainDice');

const diceGame = (diceArray, yourDiceShow, myDiceShow) => {
    const diceNum = () => {
        return Math.floor(Math.random() * dice.length)
    };
    const yourDiceO = diceArray[diceNum()];
    const myDiceO = diceArray[diceNum()];
    yourDiceShow.innerHTML = yourDiceO.svg;
    myDiceShow.innerHTML = myDiceO.svg;
    if(yourDiceO.svg === myDiceO.svg){
        diceResult.innerHTML = 'Tie!';
        yourDiceShow.style.fill = 'yellow';
        myDiceShow.style.fill = 'yellow';
    } else if (yourDiceO.svg < myDiceO.svg) {
        diceResult.innerHTML = 'You won!';
        yourDiceShow.style.fill = 'red';
        myDiceShow.style.fill = 'blue';
    } else {
        diceResult.innerHTML = 'I won!';
        yourDiceShow.style.fill = 'blue';
        myDiceShow.style.fill = 'red';
    }
};
diceGame(dice, yourDiceSVG, myDiceSVG);
playAgainDice.addEventListener('click', event => {diceGame(dice, yourDiceSVG, myDiceSVG)});


