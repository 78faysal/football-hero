const cardBtns = document.querySelectorAll('.selectBtn');

Object.keys(cardBtns).forEach((key, index) => {
    cardBtns[key].addEventListener('click', () => {
        console.log('clicked')
    });
});



document.getElementById('player-expenses').addEventListener('click', function () {
    const playerValue = document.getElementById('player-expenses-input').value;
    console.log(playerValue)
})