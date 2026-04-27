// ==============================
// STEP 1: SELECT ELEMENTS
// ==============================

// TODO: Select the button using getElementById
// const button = ...
const jokebtn = document.getElementById("getJokesBtn")
const jokeContainer = document.getElementById("jokesContainer")
const deleteBtn = document.getElementById("delete")
// TODO: Select the container where jokes will go
// const container = ...


// ==============================
// STEP 2: EVENT LISTENER
// ==============================

// TODO: Add a click event listener to the button
// When clicked → call your function (you must create it)
jokebtn.addEventListener("click", fetchJokes)
deleteBtn.addEventListener("click", deleteStorage)
// ==============================
// STEP 3: CREATE FETCH FUNCTION
// ==============================

// TODO: Create an async function (name it whatever you want)

// Inside the function:

 async function fetchJokes() {
    jokeContainer.innerHTML = ""
    jokebtn.textContent = "Get Jokes"
    const url = "https://official-joke-api.appspot.com/random_joke"

    jokeContainer.textContent = "Loading..."

    const response = await fetch(url, {
        headers: {Accept: "application/json"}
    })

    if (!response) {
        jokeContainer.textContent = "We couldn't generate a joke... :("
        jokebtn.textContent = "Try again?"
    }

    const data = await response.json()

        jokeContainer.textContent = ""

    const finalResults = document.createElement("div")
    finalResults.innerHTML = `<div class="joke"> <p>Q: ${data.setup}</p>
<p>A: ${data.punchline}</p></div>`
    jokeContainer.appendChild(finalResults)


    localStorage.setItem("jokes", JSON.stringify(data))

    const saved = localStorage.getItem("jokes")

    
        const jokes = JSON.parse(saved) 
    
    console.log(jokes.setup, jokes.punchline)


 }

function deleteStorage(saved) {
    localStorage.clear()
    jokeContainer.innerHTML = ""
}
    // TODO: Clear previous jokes from the container
    // (hint: innerHTML = "")

    // TODO: Use fetch() to call this API:
    // https://official-joke-api.appspot.com/jokes/ten

    // TODO: Convert the response into JSON
    // (remember: await + .json())

    // TODO: Log the data to the console to inspect it

    // ==============================
    // STEP 4: LOOP THROUGH DATA
    // ==============================

    // TODO: Loop through the array of jokes
    // (use for loop OR forEach)

        // Inside loop:

        // TODO: Create a div element

        // TODO: Add a class to it ("joke")

        // TODO: Insert joke.setup and joke.punchline into the div

        // TODO: Append the div to the container


    // ==============================
    // STEP 5: LOCAL STORAGE
    // ==============================

    // TODO: Save the jokes to localStorage
    // IMPORTANT: You must stringify the data


// ==============================
// STEP 6: LOAD SAVED DATA
// ==============================

// TODO: When the page loads (window.onload or similar):

    // TODO: Get saved jokes from localStorage

    // TODO: Check if data exists

    // TODO: Parse the JSON string back into an object

    // TODO: Loop through the saved jokes

        // Recreate and display them exactly like before


// ==============================
// BONUS (if you want to be ready for anything)
// ==============================

// TODO: Add error handling with try/catch

// TODO: Add a second button to clear localStorage