let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];
//updatingHomework
document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const mainTitle = document.getElementById("main-title")
mainTitle.innerHTML = "Welcome to the DOM Homepage"

  // Part 2
const theBody = document.querySelector('body')
theBody.style.backgroundColor = 'blue'
  // Part 3
const domFavoriteThings = document.getElementById('favorite-things');
domFavoriteThings.removeChild(domFavoriteThings.lastElementChild)
console.log(domFavoriteThings);

  // Part 4
const specialTitle = document.querySelectorAll('.special-title')
// console.log(specialTitle);
specialTitle.forEach(title => {
  title.style.fontSize = '2rem';
});
  // Part 5
const pastRaces = document.getElementById("past-races");
console.log(pastRaces);
pastRaces.children[3].remove();
  // Part 6
const li = document.createElement('li');
li.textContent='Pittsburgh';
console.log(li);
pastRaces.appendChild(li);


  // Part 7
const pghDiv = document.createElement('div');
pghDiv.className = ('blog-post');
const pghHeader = document.createElement('h1');
pghHeader.textContent = 'Welcome to Pittsburgh!';

const pghPara = document.createAttribute('p');

pghPara.textContent = 'Welcome to the Steelers Nation.';


pghPara.textContent = 'Welcome to the Steelers Nation. Home of Kennywood, The Point, and The Steel Mills! '
pghDiv.append(pghHeader);
pghDiv.append(pghPara);
console.log(pghDiv);
console.log(pghHeader);
console.log(pghPara);

main = document.getElementsByClassName('main')[0];
main.append(pghDiv);

  // Part 8
const quotesTitle = document.getElementById('quote-title');
quotesTitle.addEventListener('click',randomQuote);;

  // Part 9
const blogPost = document.querySelectorAll('.blog-post');
console.log(blogPost);
blogPost.forEach(div => {
  div.addEventListener('mouseout', function(event){
    event.target.classList.toggle('purple');
  })
div.addEventListener('mouseenter',function(event){
  event.target.classList.toggle('red');
})


});
})