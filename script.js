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
    renderBooks();
}

function renderBooks() {
    const BOOKS_CONTENT_REF = document.getElementById("books_content");
    BOOKS_CONTENT_REF.innerHTML = "";

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        let likeClass = getLikeClass(indexBook);
        BOOKS_CONTENT_REF.innerHTML += getBookTemplate(indexBook, likeClass);
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

function getLikeClass(indexBook) {
    if (books[indexBook].liked) {
        return "liked";
    } else {
        return "";
    }
}

function toggleLike(indexBook) {
    if (books[indexBook].liked) {
        books[indexBook].likes--;
        books[indexBook].liked = false;
    } else {
        books[indexBook].likes++;
        books[indexBook].liked = true;
    }

    renderBooks();
}

function addComment(indexBook) {
    const INPUT_REF = document.getElementById(`comment_input_${indexBook}`);
    let comment = INPUT_REF.value.trim();

    if (comment === "") {
        return;
    }

    books[indexBook].comments.push(comment);
    INPUT_REF.value = "";

    renderComments(indexBook);
}
