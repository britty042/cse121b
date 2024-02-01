/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Brittney Child",
    photo: {
        src: "images/Brittney.jpg",
        alt: "Brittney Child",
    },
    favoriteFoods: ["Mashed Potatoes", "Fresh Garden Tomatoes", "Chocolate", "Cookies", "Ice cream"],
    hobbies: ["Reading", "Sewing", "Sports", "Cheering for my kids", "Anything with Pictures"],
    placesLived: [],
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived = [
    {
        place: "Kaysville, UT",
        length: "18 years",
    },
    {
        place: "Rexburg, ID",
        length: "2 years",
    },
    {
        place: "Roy, UT",
        length: "3 years",
    },
    {
        place: "Clinton, UT",
        length: "12 years",
    },
]
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").innerHTML = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo.src;
document.querySelector("#photo").alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
}
)

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
}
)

/* Places Lived DataList */
myProfile.placesLived.forEach(location => {
    let d1 = document.createElement("d1");

    let dt = document.createElement("dt");
    dt.textContent = `Place: ${location.place}`;

    let dd = document.createElement("dd");
    dd.textContent = `Length: ${location.length}`;

    d1.appendChild(dt);
    d1.appendChild(dd);

    document.getElementById("places-lived").appendChild(d1);
})




