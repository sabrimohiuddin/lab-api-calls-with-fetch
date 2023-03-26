

// const form  = document.querySelector("form")
// const BASE_URL = "https://opentdb.com/api.php?amount=10"


// form.addEventListener("submit", (event)=>{
//     event.preventDefault();

//     fetch(BASE_URL)
//     .then((response) => response.json())
//     .then((json) => {
//         json.results.forEach((result) =>{
//             functionName(result)
//         })
//     })
//     .catch(functionName);

// })


const form = document.querySelector('form');
const main = document.querySelector('main');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = 'https://opentdb.com/api.php?amount=10';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((question) => {
        const card = document.createElement('article');
        card.classList.add('card');

        const category = document.createElement('h2');
        category.textContent = question.category;
        card.appendChild(category);

        const text = document.createElement('p');
        text.textContent = question.question;
        card.appendChild(text);

        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        card.appendChild(answerButton);

        const answer = document.createElement('p');
        answer.classList.add('hidden');
        answer.textContent = question.correct_answer;
        card.appendChild(answer);

        answerButton.addEventListener('click', () => {
          answer.classList.toggle('hidden');
        });

        main.appendChild(card);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

