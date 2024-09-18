// Wähle den Button und das Antwort-Element mit Klassen
const showAnswerBtn = document.querySelector(".show-answer-btn");
const answer = document.querySelector(".answer");
console.log(showAnswerBtn);
// Füge ein Click-Event zum Button hinzu
showAnswerBtn.addEventListener("click", () => {
  answer.classList.toggle("hidden");
});

const bookmarkButton = document.querySelector('[data-js="bookmark1"]');

bookmarkButton.addEventListener("click", () => {
  if (bookmarkButton.classList.contains("bookmarked")) {
    bookmarkButton.innerHTML = `
      <button data-js="bookmark1" class="bookmarkButton">
        <?xml version="1.0" encoding="UTF-8"?><svg width="70px" height="70px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 16V10C9 8.89543 9.89543 8 11 8H13C14.1046 8 15 8.89543 15 10V16L13.1094 14.7396C12.4376 14.2917 11.5624 14.2917 10.8906 14.7396L9 16Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </button>
    `;
    bookmarkButton.classList.remove("bookmarked");
  } else {
    bookmarkButton.innerHTML = `
      <svg width="70px" height="70px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="1.5">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75  12C22.75 6.06294 17.9371 1.25 12 1.25ZM11 7.25C9.48122 7.25 8.25 8.48122 8.25 10V16C8.25 16.2766 8.40224 16.5307 8.64611 16.6613C8.88997 16.7918 9.18588 16.7775 9.41603 16.624L11.3066 15.3636C11.7265 15.0837 12.2735 15.0837 12.6934 15.3636L14.584 16.624C14.8141 16.7775 15.11 16.7918 15.3539 16.6613C15.5978 16.5307 15.75 16.2766 15.75 16V10C15.75 8.48122 14.5188 7.25 13 7.25H11Z" fill="#000000"></path>
      </svg>
    `;
    bookmarkButton.classList.add("bookmarked");
  }
});
