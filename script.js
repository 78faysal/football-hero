const cardBtns = document.querySelectorAll('.selectBtn');
const cardList = document.querySelector('.card-list');

Object.keys(cardBtns).forEach((key, index) => {
    cardBtns[key].addEventListener('click', () => {
        const title = cardBtns[key].parentNode.querySelector('.card-title').textContent;
        const li = document.createElement('li');
        li.textContent = title;
        cardList.appendChild(li);
        
    });
});



document.getElementById('player-expenses').addEventListener('click', function () {
    const playerValue = document.getElementById('player-expenses-input').value;
    console.log(playerValue)
})