/*
1-Creiamo gli elementi che ci servono nel file HTML
2-Creiamo le variabili per raccogliere gli elementi dal file HTML
3-Genero un numero random tra 1-5 attraverso una funzione
4-Prendo il valore datomi dall'user attraverso una funzione 
5-Sommare il numero dell'utente con il numero del computer
6-Stabilisco con una funzione se il numero è pari o dispari
7-Dichiaro chi ha vinto in pagina
*/

//2-Creo le variabili per raccogliere gli elementi dal file HTML
const form = document.querySelector('form')
const inputNumberUser = document.querySelector('input')
const winner = document.querySelector('h1')
const selectPlayer = document.querySelector('select')
const player = document.getElementById('player')
const cpu = document.getElementById('cpu')
const sumResult = document.querySelector('h2')

//3-Genero un numero random tra 1-5 attraverso una funzione
function randomNumber() {
    return parseInt(Math.floor(Math.random() * 5) + 1)
}
//4-Prendo il valore datomi dall'user attraverso una funzione 
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const userNumber = parseInt(inputNumberUser.value)
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert('Inserisci un numero da 1 a 5')
        return;
    }
    console.log(userNumber, 'numero user')
    const numberCpu = randomNumber()
    console.log(numberCpu, 'numero cpu')
    //5-Sommare il numero dell'utente con il numero del computer
    const sum = userNumber + numberCpu
    console.log(sum, 'somma numeri cpu e user')
    //6-Stabilisco con una funzione se il numero è pari o dispari
    let result = isEven(sum) ? 'Pari' : 'Dispari'
    console.log(result)
    //7-Dichiaro chi ha vinto in pagina
    let choisePlayer = selectPlayer.value
    console.log(choisePlayer)
    if (choisePlayer === result) {
        winner.innerHTML = 'Ha vinto il giocatore'
    } else {
        winner.innerHTML = 'Ha vinto la CPU'
    }
    cpu.innerText += numberCpu
    player.innerText += choisePlayer + ' e il numero ' + userNumber
    sumResult.innerText = `La somma dei numeri è ${sum} quindi ${result} !`

})
function isEven(number) {
    return number % 2 === 0;
}




