Array.from(document.getElementsByClassName("crop")).forEach(function (element) {
  element.style.marginBottom = -element.offsetWidth / 1.7 + "px";
});
window.addEventListener("resize", () => {
  Array.from(document.getElementsByClassName("crop")).forEach(function (
    element
  ) {
    element.style.marginBottom = -element.offsetWidth / 1.7 + "px";
  });
});

const handleScrollAnimation = (scrollElement) => {
  if (
    scrollElement.getBoundingClientRect().top <=
    ((window.innerHeight || document.documentElement.clientHeight) * 75) / 100
  ) {
    scrollElement.classList.add("visible");
    if (scrollElement.classList.contains("invisible")) {
      scrollElement.classList.remove("invisible");
    }
  } else {
    scrollElement.classList.add("invisible");
    if (scrollElement.classList.contains("visible")) {
      scrollElement.classList.remove("visible");
    }
  }
};
const Elements = document.querySelectorAll(".js-scroll");
window.addEventListener("scroll", () => {
  Elements.forEach((element) => {
    handleScrollAnimation(element);
  });
});

const texts = document.getElementsByClassName("hello");
texts[0].innerHTML += "&nbsp".repeat(46);
