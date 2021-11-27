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

// select div for typeTwo box

let typeTwoBox = document.querySelector(`.type-two`);
let typeTwoText = document.querySelector(`.type-text-two`);

// select circle for colour depending on Types

let colourCircle = document.querySelector(`.circle`);

// select text to be appended for pokedex entry

let pokedexDescription = document.querySelector(`.pokedex-entry`)

// select name to append text name and word name
let textName = document.querySelector(`.text-name`);
let selectedName = document.querySelector(`.pokemon-name`);

function getEnter(enter) {
    enter.preventDefault();
    if (enter.keyCode === 13) {
        document.querySelector(`.searchButton`).click();
    }
}

function getSearch(userInput) {
    userInput = enterInput.value;
    typeOneBox.style = null;
    typeOneText.innerHTML = ``;
    typeTwoBox.style = null;
    typeTwoText.innerHTML = ``;
    colourCircle.style.background = ``
    spriteLocation.innerHTML = ``;
    pokedexDescription.innerHTML = ``;
    selectedName.innerHTML = ``;
    textName.innerHTML = ``;
    getPokemon(userInput);
    getDescription(userInput)
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
    // typeColour(typeOneCap);

    if (JSON.stringify(data.types.length) > 1) {
        let typeTwo = (JSON.stringify(data.types[1].type.name)).replaceAll('"', '')
        let typeTwoCap = typeTwo.charAt(0).toUpperCase() + typeTwo.slice(1);
        console.log(typeTwoCap);
        typeTwoColour(typeTwoCap);
        typeColour(typeOneCap);
    } else {
        typeColour(typeOneCap);
    }

    // to find description that is english and append it
    if (JSON.stringify(data.types.length) > 1) {
        colourCircle.style.background = ``;
        colourCircle.style.background = `linear-gradient(to bottom right, ${typeOneBox.style.backgroundColor}, ${typeTwoBox.style.backgroundColor})`
    } 
    else {
        colourCircle.style.background = ``;
        colourCircle.style.background = `linear-gradient(to bottom right, ${typeOneBox.style.backgroundColor}, #FFF)`   
    }

    // to find pokemon name and append it to the right place
    let quoteName = JSON.stringify(data.name);
    let pokemonName = quoteName.replaceAll('"', '')
    let pokemonNameCap = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

    selectedName.append(pokemonNameCap)
    textName.append(`Name:`)
}

function typeColour(colour) {
typeOneBox.style.height = `25px`;
typeOneBox.style.width = `70px`;
typeOneBox.style.zIndex = `1`;
typeOneBox.style.borderRadius = `15px`;
typeOneBox.style.marginTop = `10px`;
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

typeOneText.append(colour);
typeOneText.style.zIndex = `2`;
typeOneText.style.color = `#FFF`;
typeOneText.style.textAlign = `center`;
typeOneText.style.marginTop = `4.5%`;
typeOneText.style.borderStyle = "2px solid #b31b1b";
}


function typeTwoColour(colourTwo) {
    typeTwoBox.style = null;
    typeTwoText.innerHTML = ``
    typeTwoBox.style.height = `25px`;
    typeTwoBox.style.width = `70px`;
    typeTwoBox.style.zIndex = `1`;
    typeTwoBox.style.borderRadius = `15px`;
    typeTwoBox.style.marginTop = `10px`;
        if (colourTwo === `Fire`) {
            typeTwoBox.style.backgroundColor = "#f08030";
        } else if (colourTwo === `Normal`) {
            typeTwoBox.style.backgroundColor = "#a8a878";
        } else if (colourTwo === `Fighting`) {
            typeTwoBox.style.backgroundColor = "#c03028";
        } else if (colourTwo === `Water`) {
            typeTwoBox.style.backgroundColor = "#6890f0";
        } else if (colourTwo === `Flying`) {
            typeTwoBox.style.backgroundColor = "#a890f0";
        } else if (colourTwo === `Grass`) {
            typeTwoBox.style.backgroundColor = "#78c850";
        } else if (colourTwo === `Poison`) {
            typeTwoBox.style.backgroundColor = "#a040a0";
        } else if (colourTwo === `Electric`) {
            typeTwoBox.style.backgroundColor = "#f8d030";
        } else if (colourTwo === `Ground`) {
            typeTwoBox.style.backgroundColor = "#e0c068";
        } else if (colourTwo === `Psychic`) {
            typeTwoBox.style.backgroundColor = "#f85888";
        } else if (colourTwo === `Rock`) {
            typeTwoBox.style.backgroundColor = "#b8a038";
        } else if (colourTwo === `Ice`) {
            typeTwoBox.style.backgroundColor = "#98d8d8";
        } else if (colourTwo === `Bug`) {
            typeTwoBox.style.backgroundColor = "#a8b820";
        } else if (colourTwo === `Dragon`) {
            typeTwoBox.style.backgroundColor = "#7038f8";
        } else if (colourTwo === `Ghost`) {
            typeTwoBox.style.backgroundColor = "#705898";
        } else if (colourTwo === `Dark`) {
            typeTwoBox.style.backgroundColor = "#705848";
        } else if (colourTwo === `Steel`) {
            typeTwoBox.style.backgroundColor = "#b8b8d0";
        } else if (colourTwo === `Fairy`) {
            typeTwoBox.style.backgroundColor = "#ee99ac";
        } 
    
    typeTwoText.append(colourTwo);
    typeTwoText.style.borderStyle = "2px solid #b31b1b";
    typeTwoText.style.zIndex = `2`;
    typeTwoText.style.color = `#FFF`;
    typeTwoText.style.textAlign = `center`;
    typeTwoText.style.marginTop = `4.5%`;
    }

    async function getDescription(description) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${description}/`);
        console.log(response)
        let data = await response.json();
        console.log(data);
        console.log(data.flavor_text_entries[0].language.name)
        console.log(data.flavor_text_entries[0].flavor_text)
        
        for (let i = 0; i < data.flavor_text_entries.length; i++){
            if (data.flavor_text_entries[i].language.name === `en`) {
                let newEntry = `"${data.flavor_text_entries[i].flavor_text}"`;
                pokedexDescription.append(newEntry)
                break;
            } 
        } 
    
    }