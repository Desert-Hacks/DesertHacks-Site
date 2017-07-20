document.addEventListener("DOMContentLoaded", function(event) {
  let colors = ["#B52945", "#F9D178", "#5B9BA5", "#574D68"];
  let hovers = ["#DB8A9A", "#FFE4AA", "#A7CBD1", "#C3BCD1"];
  let randInt = Math.floor((Math.random() * 4));

  document.body.style.backgroundColor = colors[randInt];

  let style = document.createElement("style");
  // WebKit hack
  style.appendChild(document.createTextNode(""));
  // Add the <style> element to the page
  document.head.appendChild(style);
  style.sheet.insertRule(`a i:hover{ color: ${hovers[randInt]}`, 0);
});
