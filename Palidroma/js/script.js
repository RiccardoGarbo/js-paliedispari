
/*
1-Dichiaro una variabile da cui prendo la parola che inserisce l'utente
2-Avvio una funzione dove all'interno dichiaro una variabile che come valore ha la parola inserita dall'utente ma al contrario.
3-In ritorno alla funzione chiedo se la parola inserita dall'utente è uguale alla stessa parola ma al contrario.
4-Stampo il risultato in console
*/

//1-Dichiaro una variabile da cui prendo la parola che inserisce l'utente

const userWord = prompt('Inserisci una parola palindroma').toLowerCase()

//2-Avvio una funzione dove all'interno dichiaro una variabile che come valore ha la parola inserita dall'utente ma al contrario.
/**
 * 
 * @param {string} word the word we want check
 * @returns the result if the word is palindrome or not 
 */

function checkPalindrome(word) {
    const userReverseWord = userWord.split('').reverse().join('');
    console.log(userReverseWord)

    //3-In ritorno alla funzione chiedo se la parola inserita dall'utente è uguale alla stessa parola ma al contrario.

    return userWord === userReverseWord;
}

//4-Stampo il risultato in console
console.log(checkPalindrome(userWord))

