window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.style.background = "rgba(13,17,23,0.85)";
  } else {
    header.style.background = "rgba(13,17,23,0.5)";
  }

});
