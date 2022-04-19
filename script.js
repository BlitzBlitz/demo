const checkpoint = 300;
const checkpoint2 = 750;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  let scrollPercent = (currentScroll / checkpoint) * 100;
  let scrollPercent2 = ((currentScroll - 200) / checkpoint2) * 100;

  if (currentScroll <= checkpoint) {
    scrollPercent = 100 - scrollPercent.toFixed(2);
    opacity = 1 - scrollPercent / 100;
  } else {
    scrollPercent = 10;
    opacity = 1;
  }
  console.log(currentScroll + "/" + checkpoint2 + " = " + scrollPercent2 / 100);
  document.querySelector(".fade-in-section").style.transform =
    "translateX(" + scrollPercent + "%)";
  document.querySelector(".fade-in-section").style.opacity = opacity;
  document.querySelector(".fade-in-section2").style.opacity =
    currentScroll <= checkpoint2 ? scrollPercent2 / 100 : 1;
});
