// Button defined
let clickInput = document.querySelector(`.searchButton`)
// search bar defined
let enterInput = document.querySelector(`.searchPokemon`)

//if enter pressed, a click occurs, function getSearch is called
enterInput.addEventListener(`keyup`, getEnter)
// if button clicked, input stored in userInput
clickInput.addEventListener(`click`, getSearch)

let spriteLocation = document.querySelector(`.sprite-location`)

function getEnter(enter) {
    enter.preventDefault();
    if (enter.keyCode === 13) {
        document.querySelector(`.searchButton`).click();
    }
}

async function getPokemon(pokemon) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    console.log(response)
    let data = await response.json();
    console.log(data);

    let quotesSprite = JSON.stringify(data.sprites.front_default);
    let pokemonSprite = quotesSprite.replaceAll('"', '');
    let img = document.createElement("img");
    img.src = pokemonSprite;
    spriteLocation.innerHTML = "";
    spriteLocation.append(img);
    img.style.height = `200px`;
    img.style.width = `200px`;
}

function getSearch(userInput) {
    userInput = enterInput.value;
    getPokemon(userInput);

}