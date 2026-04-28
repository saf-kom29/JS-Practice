// ==============================
// STEP 1: SELECT ELEMENTS
// ==============================

// TODO: Select input field
// const input = ...
const input = document.getElementById("searchInput")
// TODO: Select button
// const button = ...
const btn = document.getElementById("searchBtn")
// TODO: Select results container
// const container = ...
const results = document.getElementById("resultsContainer")

// ==============================
// STEP 2: EVENT LISTENER
// ==============================

// TODO: Add click event to button
// When clicked → call your function

btn.addEventListener("click", fetchBooks)
input.addEventListener("submit", fetchBooks)

// ==============================
// STEP 3: CREATE FUNCTION
// ==============================

// TODO: Create an async function

async function fetchBooks() {
    results.innerHTML = ""
    const user_input = input.value.toLowerCase()

    if (user_input === "") {
        return
    }

    const url = `https://openlibrary.org/search.json?q=${user_input}`

     results.textContent = "Loading results..."
    try {
        const response = await fetch(url, {
            headers: { Accept: "application/json" }
        })


        const data = await response.json()
        console.log(data)

        if (data.numFound === 0) {
            results.textContent = "Sorry! We couldn't find the result you're looking for. Please enter something else!"
        }

results.textContent = ""

        const books = data.docs

        for (let i = 0; i < 12; i++) {
            if (!books[i]) break;

            const book = books[i]

            const card = document.createElement("div")
            card.classList.add("book")
            card.innerHTML = `
            <h4>Title:</h4>
            <p>${book.title}</p>
            <h4>Author Name:</h4>
            <p>${book.author_name[0]}</p>`
            results.appendChild(card)
        }

        //local storage!
        localStorage.setItem("books", JSON.stringify(data.docs))



    }
    catch (error) {
        results.textContent = `${error} occurred. Please try again.`
        console.error(error);
    }
}

// ==============================
// GET USER INPUT
// ==============================

// TODO: Get value from input
// TIP: input.value

// TODO: OPTIONAL → prevent empty searches


// ==============================
// BUILD API URL
// ==============================

// TODO: Insert user input into this URL:
// https://openlibrary.org/search.json?q=YOUR_SEARCH

// TIP: use template literals → `...${variable}`


// ==============================
// FETCH DATA
// ==============================

// TODO: fetch the API

// TODO: convert to JSON

// TODO: console.log the data


// ==============================
// DISPLAY RESULTS
// ==============================

// TIP: data.docs contains the books

// TODO: clear previous results

// TODO: loop through results (limit to ~10)

// Inside loop:

// TODO: create a div

// TODO: add class "book"

// TODO: display:
// - title
// - author_name (array → use [0])

// TODO: append to container


// ==============================
// SAVE TO LOCAL STORAGE
// ==============================

// TODO: store results using JSON.stringify


// ==============================
// STEP 4: LOAD SAVED RESULTS
// ==============================

// TODO: when page loads:

// TODO: get saved data

// TODO: check if it exists

// TODO: parse it

// TODO: loop and display again


// ==============================
// BONUS
// ==============================

// TODO: add "Enter key" support (keydown event)


// TODO: add a clear button for localStorage

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        fetchBooks()
    } 
})