/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/
const changeTitle = function () {
  let header1 = document.getElementsByTagName(`h1`);
  for (let i = 0; i < header1.length; i++) {
    header1 = header1[i].style.color = `red`;
    return header1;
  }
  return header1;
};
changeTitle();

/* ESERCIZIO 2
   Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */
const classItem = document.getElementsByTagName(`h1`);
const addClassToTitle = function () {
  for (i = 0; i < classItem.length; i++) {
    classItem[i].classList.add("myHeadings");
  }
};
console.log(classItem);

addClassToTitle();
/* ESERCIZIO 3
          Scrivi una funzione per che cambi il testo dei p figli di un div
         */
const pSelector = document.getElementsByTagName("p");
const changePcontent = function () {
  for (i = 0; i < pSelector.length; i++) {
    if (pSelector[i] === pSelector[0]) {
      pSelector[i].innerHTML = "questo è il primo spazio per gli esercizi";
    } else {
      pSelector[i].innerHTML =
        "questo è il secondo spazio dedicato ad esercizi";
    }
  }
};
changePcontent();
console.log(pSelector);

/* ESERCIZIO 4
          Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
         */

const linkColor = document.querySelector("a:first-of-type");
const changeUrls = function () {
  linkColor.innerHTML = "Questo link porta a google";
  linkColor.setAttribute("href", "https://www.google.com");
};
changeUrls();
console.log(linkColor);

/* ESERCIZIO 5
          Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */

const addToTheSecond = function () {
  const lastList = document.getElementById("secondList");
  const listItem = document.createElement("li");
  listItem.innerText = "4rd";
  lastList.appendChild(listItem);
};
addToTheSecond();

/* ESERCIZIO 6
          Scrivi una funzione che aggiunga un secondo paragrafo al primo div
       */

const addParagraph = function () {
  const oneDiv = document.querySelector("div:first-of-type");
  const newP = document.createElement("p");
  newP.innerText = "Lorem ipsum";
  oneDiv.appendChild(newP);
  console.log(oneDiv);
};
addParagraph();

/* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */

const hideFirstUl = function () {
  const list1 = document.getElementById("firstList");
  list1.remove();
};
hideFirstUl();

/* ESERCIZIO 8 
          Scrivi una funzione che renda verde il background di ogni lista non ordinata
         */

const paintItGreen = function () {
  const ulList = document.getElementsByTagName("ul");
  for (i = 0; i < ulList.length; i++) {
    ulList[i].style.backgroundColor = "green";
  }
};
paintItGreen();

/* ESERCIZIO 9
          Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
         */

const makeItClickable = function () {
  const newTitleH1 = document.querySelector(".myHeadings:first-of-type");

  console.log();
};
makeItClickable();

/* ESERCIZIO 10
          Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
         */

const revealFooterLink = function () {
  const footerLink = document.getElementsByName("h3");
  const newValue = document.getElementsByTagName("a");
  console.log(newValue);
  // newValue.classList.add("footer-link");
  // const newLinkByClass = document.getElementsByClassName("footer-link");
};
revealFooterLink();

/* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */

const generateTable = function () {};

/* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */

const addRow = function () {};

/* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */

const deleteVowels = function () {};
