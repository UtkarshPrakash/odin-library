let myLibrary = [
    {
        "link": "https://colbybryant.com/wp-content/uploads/2018/03/maxresdefault.jpg?w=685",
        "title": "Iron Man",
        "director": "Jon Favreau",
        "release": 2008,
        "watched": "Yes"
    },
    {
        "link": "https://www.hdwallpapers.net/previews/interstellar-the-movie-475.jpg",
        "title": "Interstellar",
        "director": "Frank Darabont",
        "release": 1994,
        "watched": "Yes"
    },
    {
        "link": "https://www.koimoi.com/wp-content/new-galleries/2020/05/pk-box-office-heres-the-daily-breakdown-of-aamir-khan-anushka-sharmas-satirical-drama-of-2014-0001.jpg",
        "title": "PK",
        "director": "Rajkumar Hirani",
        "release": 2014,
        "watched": "Yes"
    }
];

libSize = myLibrary.length

toggleDict = {"Yes": "No", "No": "Yes"}
 
for (let i=0; i<libSize; i++) {

    const container = document.querySelector("#container");
    const card = document.createElement("div");

    const pic = document.createElement("img");
    const title = document.createElement("div");

    const metadata = document.createElement("div");
    const director = document.createElement("div");
    const release = document.createElement("div");
    const watched = document.createElement("div");

    const buttons = document.createElement("div");
    const remove = document.createElement("button");
    const toggle = document.createElement("button");
    
    // add class to the card
    card.classList.add("card");

    pic.classList.add("cover");
    title.classList.add("display-heading");

    director.classList.add("display-text");
    release.classList.add("display-text");
    watched.classList.add("display-text");

    buttons.classList.add("buttons");
    remove.classList.add("remove-button");
    toggle.classList.add("toggle-button");

    // adding text content
    pic.src = myLibrary[i]["link"];
    title.textContent = myLibrary[i]["title"];
    director.textContent = "Director: " + myLibrary[i]["director"];
    release.textContent = "Release: " + myLibrary[i]["release"];
    watched.textContent = "Watched: " + myLibrary[i]["watched"];
    remove.textContent = "Remove";
    toggle.textContent = "Toggle";

    metadata.appendChild(director);
    metadata.appendChild(release);
    metadata.appendChild(watched);

    buttons.appendChild(toggle);
    buttons.appendChild(remove);

    card.appendChild(pic);
    card.appendChild(title);
    card.appendChild(metadata);
    card.appendChild(buttons);

    container.appendChild(card);

}

function Movie() {
    // the constructor
}

function addMovieToLibrary() {
    // adding boook
}

// function to display all the books in cards

// New Book button -> brings up a form
// Fill the author, title, num pages, read flag, etc. 

// submit tries to send data to a server by default
// need to use the event.preventDefault();

// Button on book's display to remove the book from the library
// Button on book's display to change its read status