const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");
 
const messages = [
  "even spooky things are loved",
  "a carved pumpkin smiles because of the light inside of it",
  "I'm sure a ghoul would love what you're making.",
  "some candy shared is better than all candy eaten",
  "trick or treat? you decide",
  "we all wear costumes sometimes. it's okay to take off the mask now.",
];
 
button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);
 
  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});
