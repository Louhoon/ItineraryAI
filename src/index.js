function generateItinerary(event) {
  event.preventDefault();

  new Typewriter("#travel-plan", {
    strings:
      "Day 1: Paris Arrive in Paris and check into your hotel Visit iconic landmarks like the Eiffel Tower and Notre-Dame Cathedral Take a leisurely stroll along the Seine River Enjoy dinner at a local bistro",
    autoStart: true,
    delay: 3,
    cursor: "",
  });
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
