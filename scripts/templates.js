function getBookTemplate(indexBook) {
    return `
    <article class="book_card">
        <h2>${books[indexBook].name}</h2>
        <img
            src="./assets/img/${books[indexBook].img}"
            alt="Buchcover von ${books[indexBook].name}"
        />
        <p>Autor: ${books[indexBook].author}</p>
        <p>Erscheinungsjahr: ${books[indexBook].publishedYear}</p>
        <p>Preis: ${books[indexBook].price} €</p>
        <div id="likes_${indexBook}" class="book_likes"></div>

        <section class="book_comments">
            <h3>Kommentare</h3>
            <ul id="comments_${indexBook}"></ul>
            <label for="comment_input_${indexBook}">Dein Kommentar</label>
            <input id="comment_input_${indexBook}" type="text" />
            <button onclick="addComment(${indexBook})">Senden</button>
        </section>
    </article>
    `;
}

function getLikesTemplate(indexBook, likeClass) {
    return `
    <button
        onclick="toggleLike(${indexBook})"
        class="like_button ${likeClass}"
        aria-label="Gefällt mir"
    >♥</button>
    <span>${books[indexBook].likes}</span>
    `;
}

function getCommentTemplate(indexBook, indexComment) {
    return `
    <li>${books[indexBook].comments[indexComment]}</li>
    `;
}
