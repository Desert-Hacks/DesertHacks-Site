document.addEventListener("DOMContentLoaded", function(event) {
  let colors = ["#B52945", "#EFC873", "#64AA65", "#5B9BA5", "#574D68"];
  let randInt = Math.floor((Math.random() * 5));

  document.body.style.backgroundColor = colors[randInt];
});
