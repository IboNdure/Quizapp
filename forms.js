document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector(".submitFlex button"); // Greife auf den Submit-Button zu
  const questionTextarea = document.getElementById("questions");
  const answerTextarea = document.getElementById("answers");
  const tagTextarea = document.getElementById("tag");
  const main = document.querySelector("main");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const question = questionTextarea.value.trim();
    const answer = answerTextarea.value.trim();
    const tag = tagTextarea.value.trim();

    if (question !== "" && answer !== "") {
      // Erstelle eine neue Karte (qucard)
      const newCard = document.createElement("section");
      newCard.classList.add("qucard"); // Füge die Klasse qucard hinzu

      newCard.innerHTML = `
       <li>   
      <button data-js="bookmark1" class="bookmarkButton">
            <svg width="70px" height="70px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path d="M9 16V10C9 8.89543 9.89543 8 11 8H13C14.1046 8 15 8.89543 15 10V16L13.1094 14.7396C12.4376 14.2917 11.5624 14.2917 10.8906 14.7396L9 16Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
          </li>
          <p>${question}</p>
          <button class="show-answer-btn">Show Answer</button>
          <li class="answer" style="display: none;">
            <p>${answer}</p>
          </li>
          ${tag}
        `;

      // Füge die neue Karte vor dem Nav-Element ein
      main.insertBefore(newCard, document.querySelector("nav"));

      // Leere die Textareas nach dem Einfügen der neuen Karte
      questionTextarea.value = "";
      answerTextarea.value = "";
      tagTextarea.value = "";

      // Event Listener für Show Answer Button hinzufügen
      const showAnswerBtn = newCard.querySelector(".show-answer-btn");
      const answerDiv = newCard.querySelector(".answer");
      showAnswerBtn.addEventListener("click", () => {
        answerDiv.style.display =
          answerDiv.style.display === "none" ? "block" : "none";
      });
    } else {
      alert("Bitte füllen Sie sowohl die Frage als auch die Antwort aus.");
    }
  });
});
