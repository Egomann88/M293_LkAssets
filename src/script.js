window.onload = function init() {
  console.clear();
  this.loadPage();
  this.Main();
}

/**
 * @param {String} url - address for the HTML to fetch
 * @return {String} the resulting HTML string fragment
 */
async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

/**
 * tests and loads a page
 */
async function loadPage() {
  let html = "Not-Supported.html";
  if (await checkScreenSize())
    html = "index-content.html";

  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = await fetchHtmlAsText(html);
}

/**
 * 
 * @returns 
 */
async function checkScreenSize() {
  if (screen.width >= 1024)
    return true;

  return false;
}

/* main part */
/* Sie kennen die wichtigsten Konstrukte von JavaScript. */
function Main() {
  // take over task from: constuctor
  setTimeout(() => {  // Dont ask questions, just accept it
    /* Sie wissen wie man Variablen in JavaScript definiert. */
    variablen();

    /* Sie wissen, wie man Konstanten in JavaScript definiert. */
    konstante();

    /* Sie wissen, wie man Datentypen in JavaScript verwendet. */
    datenTypen();

    /* Sie wissen, wie man Operatoren in JavaScript verwendet. */
    operatoren();

    /* Sie wissen, wie man bedingte Anweisungen und Verzweigungen in JavaScript verwendet (if - else if - else, switch) */
    elseif();

    /* Sie wissen, wie man Schleifen in JavaScript verwendet. */
    fLoop();

    /* Sie wissem, wie man Funktionen in JavaScript definiert und aufruft. */
    funktion();

    /* Sie wissen, dass es in JavaScript verschiedene möglichkeiten gibt Funktionen zu definieren. */
    funktion2();

    /* Sie wissen, wie man in JavaScript Funktionsparameter übergibt und auswertet. */
    parameter(42, "Hallo", false);

    /* Sie wissen, wie man in JavaScript Rückwerte definiert. */
    let x = Rückwert();
    console.log(x);

    /* Sie wissen, wie man in JavaScript auf Fehler reagieren kann und welche Fehlerarten es gibt. */
    fehlerArten();

    /* Sie wissen, wie man in JavaScript Objekte erstellt und verwendet. */
    objekte();

    /* Sie wissen, wie man in JavaScript Arrays erstellt und verwendet. */
    array();
  }, 800);
}


/* Sie wissen wie man Variablen in JavaScript definiert */
function variablen() {
  console.log("%cVariabelns", "font-size: 18px; color: blue;");

  let str = "Ja, ich weiss wie man in JavaScript Variabeln definiert.";
  console.log(str);
}

/* Sie wissen, wie man Konstanten in JavaScript definiert. */
function konstante() {
  console.log("%cKonstante", "font-size: 18px; color: blue;");

  const unChanableVariable = "I cannot be changed.";

  try {
    unChanableVariable = "My Value can be changed!";
  } catch (e) {
    console.error("Consts value cannot be changed: ", e);
  }
}

/* Sie wissen, wie man Datentypen in JavaScript verwendet. */
function datenTypen() {
  console.log("%cDatentypen", "font-size: 18px; color: blue;");

  let example1 = 24,
    example2 = "hello world";
  console.log(`Bespiel 1: ${example1} ist ein(e) ${typeof example1}`);
  console.log(`Bespiel 2: ${example2} ist ein(e) ${typeof example2}`);
}

/* Sie wissen, wie man Operatoren in JavaScript verwendet. */
function operatoren() {
  console.log("%cOperatoren", "font-size: 18px; color: blue;");

  let z1 = 24,
    z2 = 42,
    z3 = 37,
    z4 = 73,
    z5 = Math.floor(Math.random() * 100);

  z1 += z2;
  z2 *= z3;
  z3 /= z4;
  z4 -= z1;
  z5 = Math.sqrt(z5);

  console.log(z1);
  console.log(z2);
  console.log(z3);
  console.log(z4);
  console.log(z5);
}

/* Sie wissen, wie man bedingte Anweisungen und Verzweigungen in JavaScript verwendet (if - else if - else, switch) */
function elseif() {
  console.log("%cElseIf - Switch", "font-size: 18px; color: blue;");

  let z1 = Math.floor(Math.random() * 20),
    z2 = Math.floor(Math.random() * 20);
  var z3 = Math.round(Math.random());

  if (z3 == 1)
    z3 = true;
  else
    z3 = false;

  switch (z3) {
    case true:
      console.log("true", z1)
      break;
    case false:
      console.log("false", z2)
      break;
    default:
      console.error("Unbekannter Error");
      break;
  }
}

/* Sie wissen, wie man Schleifen in JavaScript verwendet. */
function fLoop() {
  console.log("%cSchleifen", "font-size: 18px; color: blue;");
  let i = 0;
  for (i; i < 2; i++) {
    console.log("for", i);
  }

  i = 0;
  while (i < 2) {
    console.log("while", i++);
  }

  i = 0;
  do {
    console.log("doWhile", i++);
  } while (i < 2);
}

/* Sie wissem, wie man Funktionen in JavaScript definiert und aufruft. */
function funktion() {
  console.log("%cFunktionen", "font-size: 18px; color: blue;");

  console.log("Ich bin eine Funkion");
  funktion2();
}

/* Sie wissen, dass es in JavaScript verschiedene möglichkeiten gibt Funktionen zu definieren. */
const funktion2 = () => {
  console.log("Ich bin eine andere Funkion");
}

function parameter(zahl, zeichenkette, wahrheitswert) {
  console.log("%cParameter", "font-size: 18px; color: blue;");

  console.log(zahl, zeichenkette, wahrheitswert);
}

function Rückwert() {
  console.log("%cRückwert", "font-size: 18px; color: blue;");

  return "Rückgabe"
}

/* Sie wissen, wie man in JavaScript auf Fehler reagieren kann und welche Fehlerarten es gibt. */
function fehlerArten() {
  console.log("%cFehler", "font-size: 18px; color: blue;");
  try {
    const x = "daw";
    x = "wad";  /* fehler erzeugen */
  } catch (e) { /* fehler fangen und in e speichern */
    console.error("Kein Fehler: " + e); /* selber Fehler ausgeben */
    //throw Error("Kein Fehler: " + e); /* beendet alle kommenden Funktionen, wenn einkommentiert */
    try {
      throw Error("Kein Fehler: " + e); /* selber Fehler ausgeben */
    } catch (e) {
      console.error("Kein Fehler: " + e);
    }
  }
}

/* Sie wissen, wie man in JavaScript Objekte erstellt und verwendet. */
function objekte() {
  console.log("%cobjekte", "font-size: 18px; color: blue;");
  const person = {
    id: Date.now(), /* UNIX timespamp as id */
    firstName: "Carlos",
    lastName: "Fernández",
    age: 42,
    birthDate: "2000-12-31",
  };

  console.log(JSON.stringify(person));
  console.log(person.id);
  console.log(person.firstName);
  console.log(person.lastName);
  console.log(person.age);
  console.log(person.birthDate);
}

/* Sie wissen, wie man in JavaScript Arrays erstellt und verwendet. */
function array() {
  console.log("%cArray", "font-size: 18px; color: blue;");

  let personen = [
    "Carlos",
    "Karlos",
    73, /* wenn Datentyp any, kann alles reingefüllt werden */
    42 /* wenn Datentyp any, kann alles reingefüllt werden */
  ];
  let test = []; /* array mit unbestimmert grösse */
  for (let i = 0; i < personen.length; i++) {
    console.log("Person: ", personen[i]);
  }
}