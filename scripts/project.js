/*Global Variables*/
let dogsList = [];
const dogsElement = document.querySelector("#dogs");

/*Get dogs function (fetch file)*/
const getDogs = async () => {
    const response = await fetch("https://data.cambridgema.gov/resource/sckh-3xyx.json");
    dogsList = await response.json();
    displayDogs(dogsList);
}

/*Display Dogs function*/
const displayDogs = async (dogs) => {

    dogs.forEach(dog => {
        let article = document.createElement("article");

        let h3 = document.createElement("h3");
        let dogName = dog.dog_name;
        let firstLetter = dogName.charAt(0);
        let firstLetterCap = firstLetter.toUpperCase()
        let remainingLetters = dog.dog_name.slice(1);
        const capitalizedDogName = firstLetterCap + remainingLetters.toLowerCase();
        h3.textContent = `Dog's Name: ${capitalizedDogName}`;

        let h4 = document.createElement("h4");
        h4.textContent = `Breed: ${dog.dog_breed}`;

        let h5 = document.createElement("h5");
        h5.textContent = `NEIGHBORHOOD: ${dog.neighborhood.toUpperCase()}`;     

        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);
        dogsElement.appendChild(article);      
    })

    alphabeticalDogs(dogs);
}

const alphabeticalDogs = (dogs) => {
    return dogs.sort((x,y) => (x.dog_name.toLowerCase() > y.dog_name.toLowerCase())  ? 1 : ((y.dog_name.toLowerCase() > x.dog_name.toLowerCase()) ? -1 : 0));
}

/*Reset the list*/
const resetDogs = () => {
    dogsElement.innerHTML = "";
}
/*Sort Dogs function*/
const filterDogs = (dogs) => {
    resetDogs();
    let filter = document.getElementById("filtered").value;

    switch (filter) {
    /*Names starting with A-M*/
        case "firstalphabet":
            let firstHalfDogs =  dogs.filter(dog => dog.dog_name.charAt(0).toLowerCase() >=  "a" && dog.dog_name.charAt(0).toLowerCase() <= "m");
            displayDogs(firstHalfDogs);
            break;

    /*Names starting with N-Z*/
        case "secondalphabet":
            let secondHalfDogs =  dogs.filter(dog => dog.dog_name.charAt(0).toLowerCase() >=  "n" && dog.dog_name.charAt(0).toLowerCase() <= "z");
            displayDogs(secondHalfDogs);
            break;

    /*If their breed is a Goldendoodle*/
        case "goldendoodles":
            let goldendoodles = dogs.filter(dog => dog.dog_breed.toLowerCase() == "goldendoodle");
            displayDogs(goldendoodles);
            break;
    /*If their breed is any mix of a Labrador*/
        case "labrador":
            let lab = dogs.filter(dog => dog.dog_breed.toLowerCase().includes("lab"));
            displayDogs(lab);
            break;
    /*If their breed is any mix of a Poodle*/
        case "poodles":
            let poodle = dogs.filter(dog => dog.dog_breed.toLowerCase().includes("oodle"));
            displayDogs(poodle);
            break;
  
    /*If their breed is listed as Mixed Breed*/
        case "mixedbreed":
            let mixed = dogs.filter(dog => dog.dog_breed.toLowerCase().includes("mixed"));
            displayDogs(mixed);
            break;
  
    /*If they live in Cambridgeport*/
        case "cambridgeport":
            let cambridgeport = dogs.filter(dog => dog.neighborhood.toLowerCase().includes("cambridgeport"));
            displayDogs(cambridgeport);
            break;
  
    /*Display All*/
        case "all":
            displayDogs(dogs);
            break;
        }
    }



document.querySelector("#filtered").addEventListener("change", () => {filterDogs(dogsList)})

getDogs();