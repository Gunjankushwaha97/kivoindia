
// const slider = document.querySelector(".slider");

// document.querySelector(".next").addEventListener("click", () => {
// slider.scrollBy({
// left:350,
// behavior:"smooth"
// });
// });

// document.querySelector(".prev").addEventListener("click", () => {
// slider.scrollBy({
// left:-350,
// behavior:"smooth"
// });
// });




// const items = document.querySelectorAll(".faq-item");

// items.forEach(item => {
// item.addEventListener("click", () => {

// items.forEach(el => el.classList.remove("active"));
// item.classList.add("active");

// });
// });



//card//
const slider = document.querySelector(".slider");

document.querySelector(".right").addEventListener("click", () => {
slider.scrollBy({
left:320,
behavior:"smooth"
});
});

document.querySelector(".left").addEventListener("click", () => {
slider.scrollBy({
left:-320,
behavior:"smooth"
});
});