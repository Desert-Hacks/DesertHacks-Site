document.addEventListener("DOMContentLoaded", function(event) {
  let colors = ["#B52945", "#F9D178", "#64AA65", "#5B9BA5"];
  let randInt = Math.floor((Math.random() * 4) + 1);

  document.body.style.backgroundColor = colors[randInt];
});
