
const musicInput = document.querySelector("#music-search-input")
const searchBtn = document.getElementById("music-search-btn")
const searchResults = document.querySelector("#music-search-results")
const status = document.querySelector(".status")

musicInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        fetchSearchMusic()
    }
})

searchBtn.addEventListener("click", (e) => {
    fetchSearchMusic()
})

async function fetchSearchMusic() {
    searchResults.innerHTML = ""
    const userinput = musicInput.value
    const response = await fetch(`https://discoveryprovider.audius.co/v1/tracks/search?query=${encodeURIComponent(userinput)}`)

    const data = await response.json()

    if (!response) {
        status.textContent = "Sorry - we couldn't find the song you were looking for. Try again!"
    }
    console.log(data)
    console.log(data.data[0].artwork["150x150"])

    for (let i = 0; i < 10; i++) {
        const card = document.createElement("div")
        card.classList.add("music-search-card")

        card.innerHTML = `
            <img src="${data.data[i].artwork?.["150x150"]}" alt="cover art">
            <h3>${data.data[i]?.title || "Unknown Name"}</h3>
            <p> <b>Artist:</b> ${data.data[i]?.artists || "Unknown Artist"}</p>
            <p> <b>Genre:</b> ${data.data[i]?.genre || "Not specified"}</p>
            <p> <b>Mood:</b> ${data.data[i]?.mood || "None"}</p>
            <p> <b>Description:</b> </p>
            <p class="subtext"><i>${data.data[i]?.description || "This creator did not add a description."}</i></p>
          </div>`
        searchResults.appendChild(card)
    }
}

// music reccomendation list

const musicList = document.querySelector(".music-list")

const submitBtn = document.getElementById("journal-submit-btn")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    fetchMoodMusic()
})

const selectedMoodText = document.querySelector("#selected-mood-text")

const emotionMap = {
    Happy: ["Upbeat", "Easygoing", "Cool", "Romantic"],
    Calm: ["Peaceful", "Tender", "Sophisticated", "Sensual"],
    Excited: ["Excited", "Energizing", "Feiry", "Rowdy", "Stirring"],
    Confident: ["Empowering", "Defiant", "Cool"],
    Lonely: ["Yearning", "Brooding"],
    Sad: ["Melancholy", "Sentimental", "Yearning"],
    Tired: ["Easygoing", "Peaceful"],
    Anxious: ["Serious", "Brooding", "Gritty"],
    Angry: ["Aggressive", "Fiery", "Defiant", "Gritty"]
}



async function fetchMoodMusic() {
    musicList.innerHTML = ``

    for (const mood of emotionMap[selectedMoodText.textContent]) {
        console.log(mood)
        const response = await fetch(`https://discoveryprovider.audius.co/v1/tracks/search?mood=${mood}`)
        const data = await response.json()

        console.log(data)

        for (let i = 0; i < 2; i++) {
            const card = document.createElement("div")
            card.classList.add("music-card")

            card.innerHTML = `
           <img src="${data.data[i].artwork?.["150x150"]}" alt="cover art">
           <h3>${data.data[i]?.title || "Unknown Name"}</h3>
           <p> <b>Artist:</b> ${data.data[i]?.artists || "Unknown Artist"}</p>
           <p> <b>Genre:</b> ${data.data[i]?.genre || "Not specified"}</p>
           <p> <b>Mood:</b> ${data.data[i]?.mood || "None"}</p>
           <button class="desc"> Description </button>
         </div>`
            const descBtn = card.querySelector(".desc")
            descBtn.addEventListener("click", (e) => {
                alert(`${data.data[i]?.description || "This creator did not add a description."}`)})

                musicList.appendChild(card)
            }

        }
        // 
    }