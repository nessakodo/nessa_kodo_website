
const h2 = document.createElement("h2");
h2.textContent = "ABOUT ME";

document.querySelector("body").appendChild(h2);

const h3 = document.createElement("h3");
h3.textContent = "My love for technology was reignited when I entered the NFT space in early 2021. Since then, I have been actively teaching myself new mediums, softwares, and methods to help me integrate my current skillsets into the more useful applications within the tech sphere. I am currently working to learn Software Engineering at the Flatiron School, in Denver, Colorado.";

document.querySelector("body").appendChild(h3); 

const input = document.getElementById("button");
input.addEventListener('click', function() {
  alert("Whenever you find yourself doubting how far you can go, just remember how far you have come.");
});