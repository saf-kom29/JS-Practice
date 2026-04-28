// ==============================
// STEP 1: SELECT ELEMENTS
// ==============================

// TODO: select input
// const input = ...
const input = document.getElementById("searchInput")
// TODO: select status text
const status = document.getElementById("statusText")
// const status = ...
const results = document.getElementById("resultsContainer")
// TODO: select results container
// const container = ...


// ==============================
// STEP 2: TIMER VARIABLE (DEBOUNCE)
// ==============================

// TODO: create a variable to store timeout
// let timer = ...


// ==============================
// STEP 3: INPUT EVENT (REAL-TIME SEARCH)
// ==============================

// TODO: add "input" event listener
// this fires EVERY time user types

let timer; // stores the timeout


input.addEventListener("input", () => {

    status.textContent = "Typing..."
    // 1. cancel previous timer
    clearTimeout(timer);

    // 2. start a new timer
    timer = setTimeout(() => {

        // 3. this runs AFTER user stops typing
        fetchMovies(input.value.trim());
    }, 500); // wait 500ms
});

// Inside event:

// TODO: clear previous timer
// (clearTimeout)

// TODO: set status text to "Typing..."

// TODO: create new timer using setTimeout
// delay: ~500ms

// Inside setTimeout:

// TODO: call your fetch function
// pass in input value


// ==============================
// STEP 4: FETCH FUNCTION
// ==============================

async function fetchMovies(input) {
    results.innerHTML = ""
    if (!input) return

    status.textContent = "Loading..."

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`, {
        headers: { Accept: "application/json" }
    })

    const data = await response.json()
    console.log(data)


if (data.length === 0) {
    status.textContent = "No movies found.";
    return;
} else status.textContent = ""

    for(i = 0; i < 10; i++) {
         const card = document.createElement("div")
        card.classList.add("movie")
        card.innerHTML = `<h2>Movie</h2>
        <p>${data[i].show.name}</p>
    <h2>Type</h2>
        <p>${data[i].show.type}</p>
    <h2>Language</h2>
        <p>${data[i].show.language}</p>`
        results.appendChild(card)
    }
}



// ==============================
// HANDLE NO RESULTS
// ==============================

// TODO: if Response is "False"
// show "No movies found"


// ==============================
// DISPLAY RESULTS
// ==============================

// TIP: data.Search is the array

// TODO: clear old results

// TODO: loop through movies (limit to ~8)

// Inside loop:

// TODO: create div

// TODO: add class "movie"

// TODO: display:
// - Title
// - Year

// TODO: append to container


// ==============================
// SAVE TO LOCAL STORAGE
// ==============================

// TODO: store results (stringify)


// ==============================
// STEP 5: LOAD SAVED RESULTS
// ==============================

// TODO: when page loads:

// TODO: get saved movies

// TODO: check if exists

// TODO: parse

// TODO: display again


// ==============================
// BONUS (HIGHLY TESTABLE)
// ==============================

// TODO: show "Done" after results load

// TODO: add error handling (try/catch)

// TODO: limit API calls properly (debounce working)

// TODO: add clear button for localStorage