/**
    verifica dati inseriti dall'utente
 * 
 */
function verificaDati() {
  let numUser = document.querySelector("[name='numero']");
  let type = document.querySelector("[name='tipo']");
  if (
    numUser.value == "" ||
    type.value == "" ||
    parseInt(numUser.value < 1) ||
    parseInt(numUser.value) > 5
  ) {
    console.log("errore");
    resultEl.innerHTML = "hai inserito dei dati non validi";
    resultEl.style.color = "blue";
  }
}

/**
    genaratore di numeri random compresi tra 1 e 5
*   @param {number} min - numero minimo
*   @param {number} max - numero massimo
    @returns {number} - numero random
 * 
 */

function getRandomInt(min, max) {
  min = 1;
  max = 5;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
    Somma tra i due valori
 * @param {number} numUser - numero inserito dall'utente
 * @param {number} numRandom - numero random generato dal computer
 * @returns {number} - somma dei due numeri
 * 
 */
function somma(numUser, numRandom) {
  return numUser + numRandom;
}





// Dichiaro le variabili
const type = document.querySelector("[name='tipo']");
const numEl = document.querySelector("[name='numero']");

const resultEl = document.querySelector(".result");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", function () {
  verificaDati();
  const typeValue = type.value;
  console.log(typeValue);

  const numUser = parseInt(numEl.value);
  const numRandom = getRandomInt();
  console.log("il nuomero casule è " + numRandom);
  const sommaNum = somma(numUser, numRandom);
  console.log("la somma è " + sommaNum);

  // Verifico se la somma è pari o dispari
  //   se il resto della divisione per 2 è 0
  if (sommaNum % 2 == 0) {
    console.log("la somma è pari");
    // se il valore inserito dall'utente è pari
    if (typeValue == "pari") {
      // inserisco il risultato in html
      resultEl.innerHTML = "Hai vinto";
      resultEl.style.color = "green";
    } else {
      resultEl.innerHTML = "Hai perso";
      resultEl.style.color = "red";
    }
  }
});
