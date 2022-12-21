for (const invisible of document.getElementsByClassName("fadeInOnLoad")) {
  setTimeout(() => {
    invisible.classList.add("fadedIn");
  }, 800);
}

const invisibles = document.getElementsByClassName("mustFadeIn");

window.addEventListener("scroll", () => {
  for (const invisible of invisibles) {
    if (invisible.classList.contains("fadedIn"))
      continue;
    
    if (invisible.getBoundingClientRect().top - window.innerHeight / 3 <= window.innerHeight / 3) {
      invisible.classList.add("fadedIn");
    }
  }
});
