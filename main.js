// Button defined
let clickInput = document.querySelector(`.searchButton`)
// search bar defined
let enterInput = document.querySelector(`.searchPokemon`)

enterInput.addEventListener(`keyup`, getEnter)
clickInput.addEventListener(`click`, getSearch)

function getEnter(enter) {
    enter.preventDefault();
    if (enter.keyCode === 13) {
        document.querySelector(`.searchButton`).click();
    }
}

function getSearch(userInput) {
    userInput = enterInput.value;
    console.log(userInput);
}