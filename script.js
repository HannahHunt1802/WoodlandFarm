function showTooltip(event, text) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = `<strong>${text}</strong><br><small>Click to close</small>`;
    tooltip.style.left = event.pageX + "px";
    tooltip.style.top = event.pageY + "px";
    tooltip.style.display = "block";
    tooltip.style.opacity = "1";
    tooltip.onclick = () => tooltip.style.opacity = "0";
}
//bird animation js
document.addEventListener("DOMContentLoaded", () => {
    const birds = document.querySelectorAll(".bird");
    birds.forEach(bird => {
        //randomise vertical position
        const randomTop = Math.randogm() * window.innerHeight;
        bird.style.top = randomTop + "px";

        //randomise animation delay
        const randomDelay = Math.random() * 5;
        bird.style.animationDelay = randomDelay + "s";

        //randomise animation duration
        const randomDuration = Math.random() * 5 + 8; // between 8 and 13 seconds
        bird.style.animationDuration = randomDuration + "s";
    });
});

//cursor
const cursor = document.getElementById("cursor");
// following cursor
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
// when cursor clicks add clicked class
document.addEventListener("mousedown", () =>{
    cursor.classList.add("clicked");
});
// when cursor is not clicking remove clicked class
document.addEventListener("mouseup", () => {
    cursor.classList.remove("clicked");
});