let words = document.querySelectorAll(".word");

words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opactiy = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

// Circle skill here
const circles = document.querySelectorAll(".circle");

// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the element is in view, perform the animation
      animateCircle(entry.target);
      // Stop observing once the animation is triggered (optional)
      observer.unobserve(entry.target);
    }
  });
}

// Loop through each circle element and create an observer for it
circles.forEach((elem) => {
  // Create an Intersection Observer for each circle element with the callback
  const observer = new IntersectionObserver((entries) => handleIntersection(entries, observer));
  // Start observing each circle element
  observer.observe(elem);
});

// Function to animate the circle
function animateCircle(elem) {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
}


// Mix it up Portfolio work on Projects

var mixer = mixitup(".portfolio-gallery");

// Activate Menu when scroll down ////////////////////////////

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky NavBar ///////////////////////////////

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// Togle Icon NavBar ////////////////////////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};


window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};



// Paral lax /////////////////////////////////////////////////////

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show-items");
    }else{
      entry.target.classList.remove("show-items");
    }
  }) 
})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-scale");
scrollTop.forEach((el)=>observer.observe(el));



// Get all filter buttons and add a click event listener to each of them
const filterButtons = document.querySelectorAll('.btn.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the "active" class from all buttons
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    // Add the "active" class to the clicked button
    button.classList.add('active');
  });
});



