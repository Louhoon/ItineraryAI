function displayItinerary(res) {
  new Typewriter("#travel-plan", {
    strings: res.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

function generateItinerary(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let apiKey = "3b7o30109b4aft0712c02563ba2bbf20";
  let context =
    "You are an AI that loves to travel and your mission is to provide a short few lines trip itinerary of 3 days, NOT MORE. Written in basic HTML, written from the left. PLEASE add 2 return line AFTER EACH DAYS. ALSO Day 1 :, Day 2 : and Day 3 : should be inside a <strong></strong> element. Do not add a title. add 2 return line again And sign at the end with <strong>ItineraryAI</strong>. Please follow correctly the user instructions";
  let prompt = `User instructions : Generate a trip itinerary about ${searchInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let itineraryElement = document.querySelector("#travel-plan");
  itineraryElement.classList.remove("hidden");
  itineraryElement.innerHTML = `<lord-icon
    src="https://cdn.lordicon.com/oqaajvyl.json"
    trigger="loop"
    colors="primary:#fad1e6,secondary:#e8308c"
    style="width:30px;height:30px">
</lord-icon> Generating an itinerary for ${searchInput.value}`;

  axios.get(apiUrl).then(displayItinerary);
}

let travelPlanElement = document.querySelector("#form");
travelPlanElement.addEventListener("submit", generateItinerary);

document.addEventListener("DOMContentLoaded", () => {
  new Typewriter("h1", {
    strings: "Mesmerizing an itinerary for your next trip",
    autoStart: true,
    delay: "natural",
  });
});
