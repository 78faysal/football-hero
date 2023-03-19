const cardBtns = document.querySelectorAll('.selectBtn');
const cardList = document.querySelector('.card-list');

Object.keys(cardBtns).forEach((key, index) => {
    cardBtns[key].addEventListener('click', () => {
        const title = cardBtns[key].parentNode.querySelector('.card-title').textContent;
        const li = document.createElement('li');
        li.textContent = title;
        cardList.appendChild(li);

        cardBtns[key].disabled = true;
        cardBtns[key].style.backgroundColor = 'gray';
    });
});



document.getElementById('player-expenses').addEventListener('click', function () {
    const playerInput = document.getElementById('player-expenses-input');
    const playerValue = Number(playerInput.value);
    const totalPlayer = cardList.children.length;
    const expenses = document.getElementById('expensesOfTotalPlayer');
    expenses.textContent = playerValue * totalPlayer;
})


document.getElementById('calculateTotal').addEventListener("click", () =>{
    const managerValue = parseInt(document.getElementById('managerValue').value);
    const coachValue = parseInt(document.getElementById('coachValue').value);
    const playersValue = parseInt(document.getElementById('expensesOfTotalPlayer').textContent);
    const totalValue = managerValue + playersValue + coachValue ;
    console.log(totalValue);
    var totalValueInput = document.getElementById('totalValue');
    totalValueInput.textContent = totalValue;
    console.log(totalValue)
})