/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
    const fullName = "Brittney Child";
    let currentYear = new Date().getFullYear();
    let profilePicture = "images/Brittney.jpg";


/* Step 3 - Element Variables */
    const nameElement = document.getElementById("name");
    const foodElement = document.getElementById("food");
    const yearElement = document.querySelector("#year");
    const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */

    nameElement.innerHTML = `<strong>${fullName}</strong>`;
    yearElement.textContent = currentYear;
    imageElement.setAttribute("src", profilePicture);
    imageElement.setAttribute("alt", `This is ${fullName}`);



/* Step 5 - Array */
    let favFoods = ["Ice Cream", " Cookies", " Potatoes in any form", " Fresh Vegetables"]
    foodElement.innerHTML = favFoods;
    let newFood = " Burgers ";
    favFoods.push(newFood);
    foodElement.innerHTML += `<br> ${favFoods}`;
    favFoods.pop()
    foodElement.innerHTML += `<br>${favFoods}`;
    favFoods.shift()
    foodElement.innerHTML += `<br> ${favFoods}`;
    




