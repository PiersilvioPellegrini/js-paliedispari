/**
 * Commento della funzione
 * @param  parola - parola inserita dall'utente
 * @param  parolaInvertita - parola invertita
 */

//verificare se una detrminata parola è palindroma

// Dichiaro le variabili
const parolaEl = document.querySelector("[name='parola']");
const resultEl = document.querySelector(".result");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", getPalindroma);

function getPalindroma() {
  // assegno il valore inserito dall'utente alla varibaile
  const parola = parolaEl.value;

  // Verifico l'inserimento di una parola
  if (parola === "") {
    alert("Inserisci una parola");
  } else {
    // split = trasformo la parola in una array
    // reverse = inverto l'ordine degli elementi dell'array
    // join = trasformo l'array in una stringa
    const parolaInvertita = parola.split("").reverse().join("");
    if (parola === parolaInvertita) {
      resultEl.innerHTML = "La parola è palindroma";
      resultEl.classList.add("bg-success");
    } else {
      resultEl.innerHTML = "La parola non è palindroma";
        resultEl.classList.add("bg-danger");
    }
  }
}
