// Button defined
let clickInput = document.querySelector(`.searchButton`)
// search bar defined
let enterInput = document.querySelector(`.searchPokemon`)

//if enter pressed, a click occurs, function getSearch is called
enterInput.addEventListener(`keyup`, getEnter)
// if button clicked, input stored in userInput
clickInput.addEventListener(`click`, getSearch)

let spriteLocation = document.querySelector(`.sprite-location`)

// div for typeOne box
let typeOneBox = document.querySelector(`.type`);
let typeOneText = document.querySelector(`.type-text`);

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

    // get sprite and append to the relevant div
    let quotesSprite = JSON.stringify(data.sprites.front_default);
    let pokemonSprite = quotesSprite.replaceAll('"', '');
    let img = document.createElement("img");
    img.src = pokemonSprite;
    spriteLocation.innerHTML = ``;
    spriteLocation.append(img);
    img.style.height = `200px`;
    img.style.width = `200px`;

    // find type/types and append to the relevant div
    let quoteTypeOne = JSON.stringify(data.types[0].type.name)
    let typeOne = quoteTypeOne.replaceAll('"', '')
    let typeOneCap = typeOne.charAt(0).toUpperCase() + typeOne.slice(1);
    console.log(typeOneCap);
    typeColour(typeOneCap);


    // let quoteTypeTwo = JSON.stringify(data.types[1].type.name)
    // console.log(quoteTypeTwo)
    
}

function getSearch(userInput) {
    userInput = enterInput.value;
    getPokemon(userInput);

}

function typeColour(colour) {
typeOneBox.style = null;
typeOneText.innerHTML = ``
typeOneBox.style.height = `25px`;
typeOneBox.style.width = `70px`;
typeOneBox.style.zIndex = `1`;
typeOneBox.style.borderRadius = `25px`;
    if (colour === `Fire`) {
        typeOneBox.style.backgroundColor = "#f08030";
    } else if (colour === `Normal`) {
        typeOneBox.style.backgroundColor = "#a8a878";
    } else if (colour === `Fighting`) {
        typeOneBox.style.backgroundColor = "#c03028";
    } else if (colour === `Water`) {
        typeOneBox.style.backgroundColor = "#6890f0";
    } else if (colour === `Flying`) {
        typeOneBox.style.backgroundColor = "#a890f0";
    } else if (colour === `Grass`) {
        typeOneBox.style.backgroundColor = "#78c850";
    } else if (colour === `Poison`) {
        typeOneBox.style.backgroundColor = "#a040a0";
    } else if (colour === `Electric`) {
        typeOneBox.style.backgroundColor = "#f8d030";
    } else if (colour === `Ground`) {
        typeOneBox.style.backgroundColor = "#e0c068";
    } else if (colour === `Psychic`) {
        typeOneBox.style.backgroundColor = "#f85888";
    } else if (colour === `Rock`) {
        typeOneBox.style.backgroundColor = "#b8a038";
    } else if (colour === `Ice`) {
        typeOneBox.style.backgroundColor = "#98d8d8";
    } else if (colour === `Bug`) {
        typeOneBox.style.backgroundColor = "#a8b820";
    } else if (colour === `Dragon`) {
        typeOneBox.style.backgroundColor = "#7038f8";
    } else if (colour === `Ghost`) {
        typeOneBox.style.backgroundColor = "#705898";
    } else if (colour === `Dark`) {
        typeOneBox.style.backgroundColor = "#705848";
    } else if (colour === `Steel`) {
        typeOneBox.style.backgroundColor = "#b8b8d0";
    } else if (colour === `Fairy`) {
        typeOneBox.style.backgroundColor = "#ee99ac";
    } 
    
    console.log(typeOneBox)
    console.log(typeOneText)

typeOneText.append(colour);
typeOneText.style.zIndex = `2`;
typeOneText.style.color = `#FFF`;
typeOneText.style.textAlign = `center`;
typeOneText.style.marginTop = `4.5%`
}