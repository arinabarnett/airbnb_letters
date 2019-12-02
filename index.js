document.addEventListener("mousemove", function(event) {
  const x = event.pageX;
  const y = event.pageY;

  document.querySelectorAll("div").forEach(div => {
    const divx = div.offsetLeft + 50 - x;
    const divy = div.offsetTop + 50 - y;
    const distance = Math.sqrt(divx * divx + divy * divy);
    const score = Math.exp(distance * -0.007);

    div.style.transform = "scale(" + score + ")";
    div.style.fontWeight = 100 + (100 * Math.round(8 * score));
  })
})
