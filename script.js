// Show Games
const showGameBtn = document.querySelectorAll('.games h3');
for (let i = 0; i < showGameBtn.length; i++){
    showGameBtn[i].addEventListener('click', event => {
        let showStage = showGameBtn[i].nextElementSibling;
        let stageStatus = window.getComputedStyle(showStage).display;
        if(stageStatus === 'none'){
            showStage.style.display = 'block';
        } else {
            showStage.style.display = 'none';
        }
    })
}



// Lucky Color Game
const colors = ['Red', 'Blue', 'Yellow', 'Pink', 'White', 'Block', 'Green', 'Brown']

