console.log("portfolio loaded successfully");


// start nav active link on scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// end nav active link on scroll

// start project expand function
const cards = document.querySelectorAll(".project-card");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

// initial active
cards[index].classList.add("active");

function showSlide(newIndex){

    // remove active from current
    cards[index].classList.remove("active");
    cards[index].classList.add("exit");

    // loop logic
    index = (newIndex + cards.length) % cards.length;

    // clean all cards before showing
    cards.forEach(card => {
        card.classList.remove("exit");
    });

    // show new card
    cards[index].classList.add("active");
}

next.addEventListener("click", () => {
    showSlide(index + 1);
});

prev.addEventListener("click", () => {
    showSlide(index - 1);
});
