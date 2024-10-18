// Nickname Generator

// Nicknames
let nicknames = [
  '"Crusher"',
  '"The Scientist"',
  '"The Hawk"',
  '"The Cheif"',
  '"The Sloth"',
  '"The Jester"',
];

// Event Listeners
document.getElementById("randBtn").addEventListener("click", randNickname);
document.getElementById("allBtn").addEventListener("click", allNicknames);

// Functions
function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

function randNickname() {
  document.getElementById("outputDiv").innerHTML = "";
  let firstName = document.getElementById("firstNameInput").value;
  let lastName = document.getElementById("lastNameInput").value;
  let randNum = randomInt(0, 6);
  document.getElementById(
    "outputDiv"
  ).innerHTML += `<p>${firstName} ${nicknames[randNum]} ${lastName}</p>`;
}

function allNicknames() {
  document.getElementById("outputDiv").innerHTML = "";
  let firstName = document.getElementById("firstNameInput").value;
  let lastName = document.getElementById("lastNameInput").value;
  for (let i = 0; i < 6; i++) {
    document.getElementById(
      "outputDiv"
    ).innerHTML += `<p>${firstName} ${nicknames[i]} ${lastName}</p>`;
  }
}
