var slider = tns({
  container: ".my-slider",
  items: 1,
  gutter: 100,
  slideBy: "page",
  autoplay: true,
  controls: false,
  navPosition: "bottom",
});

const accordion = document.querySelectorAll(".accordion__tab h4");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.nextElementSibling.classList.toggle("open");
    accordion.querySelector("i").classList.toggle("open");
  });
});
