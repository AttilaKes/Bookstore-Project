// PLANUNG (wie Kevin in Sektion I, Lektion 02 „Notizen anzeigen lassen“):
// Notizen erst auf Deutsch, vor der Abgabe ins Englische übersetzen oder löschen.
//
// User Stories aus der Checkliste:
// - Alle Bücher aus dem JSON-Array rendern: Titel, Bild, Likes, Preis,
//   Kommentare (Marco, Livecall 10.11.: auch Autor und Erscheinungsjahr)
// - Mindestens 3 Bücher, bei jedem Kommentare hinzufügen
//   (optional: im LocalStorage speichern)
// - Like: Herzfarbe ändern, Gefällt-mir-Anzahl +1 oder -1
//   (optional: im LocalStorage speichern)
// - Optional: Bücher als Favoriten markieren und gesondert anzeigen
//   (Filterbuttons: Modul 6, Sektion VII, Lektion 03)

// PLATZHALTER: nach Sektion II, Lektion 10 durch Kevins JSON ersetzen
// (oder eigene Bücher mit gleicher Struktur, Marco 10.11.).
// Danach die Schlüssel in scripts/templates.js angleichen.
let books = [
    {
        name: "Der Name des Windes",
        author: "Patrick Rothfuss",
        publishedYear: 2007,
        price: 12.99,
        likes: 1249,
        liked: false,
        img: "pexels-automnenoble-6562142.jpg",
        comments: ["Platzhalter-Kommentar 1", "Platzhalter-Kommentar 2"],
    },
    {
        name: "Der Hobbit",
        author: "J.R.R. Tolkien",
        publishedYear: 1937,
        price: 9.99,
        likes: 873,
        liked: false,
        img: "pexels-evi-rodemann-3557962-34260800.jpg",
        comments: ["Platzhalter-Kommentar 1"],
    },
    {
        name: "1984",
        author: "George Orwell",
        publishedYear: 1949,
        price: 10.99,
        likes: 512,
        liked: false,
        img: "pexels-eneszn-12967509.jpg",
        comments: [],
    },
];

function init() {
    getFromLocalStorage();
    renderBooks();
}

function renderBooks() {
    const BOOKS_CONTENT_REF = document.getElementById("books_content");
    BOOKS_CONTENT_REF.innerHTML = "";

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        BOOKS_CONTENT_REF.innerHTML += getBookTemplate(indexBook);
        renderComments(indexBook);
    }
}

function renderComments(indexBook) {
    const COMMENTS_REF = document.getElementById(`comments_${indexBook}`);
    COMMENTS_REF.innerHTML = "";

    for (
        let indexComment = 0;
        indexComment < books[indexBook].comments.length;
        indexComment++
    ) {
        COMMENTS_REF.innerHTML += getCommentTemplate(indexBook, indexComment);
    }
}

function toggleLike(indexBook) {
    // PLANUNG:
    // - liked umschalten: aus false wird true und umgekehrt
    // - likes um 1 erhöhen oder verringern
    // - Herzfarbe: Klasse "liked" aus style.css. Templates enthalten kein if
    //   (Kevin, Sektion I, Lektion 11), die Entscheidung trifft script.js
    // - neu rendern, optional speichern
}

function addComment(indexBook) {
    // PLANUNG:
    // - Text aus dem Feld "comment_input_" + indexBook holen
    // - leere Eingabe abfangen wie addNote() im Notizblock (trim)
    // - Text an die Kommentare des Buchs anhängen (push)
    // - Feld leeren, neu rendern, optional speichern
}

function saveToLocalStorage() {
    // PLANUNG (optional laut Checkliste):
    // - books mit JSON.stringify speichern, Muster wie im Notizblock
}

function getFromLocalStorage() {
    // PLANUNG (optional laut Checkliste):
    // - mit JSON.parse laden und nur übernehmen, wenn nicht null (Notizblock)
}
