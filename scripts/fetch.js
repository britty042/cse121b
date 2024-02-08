const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  const outputElement = document.querySelector("#output");
  results = data;
  
  const html = `<h2>${results.name}</h2>`
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
    console.log("third", data);
    const outputList = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.forEach ((line) => {
        const html = `<li>${line.name}</li>`;
        outputList.innerHTML += html;
    });
}

async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
        const listData = await response.json();
        doStuffList(listData);
    }
}
getPokemon(url);
getPokemonList(urlList);
console.log("second: ", results);