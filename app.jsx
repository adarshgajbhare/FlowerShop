document.querySelector(".menu-icon-btn").addEventListener("click", function () {
  document.querySelector(".menu-icon-action").classList.toggle("hidden");
});

document.querySelector(".profile-div").addEventListener("click", function () {
  document.querySelector(".profile-action").classList.toggle("hidden");
});

document
  .querySelector(".dismiss-button")
  .addEventListener("click", function () {
    document.querySelector(".dismiss-action").classList.add("hidden");
  });

document
  .querySelector(".close-cart-button")
  .addEventListener("click", function () {
    document.querySelector(".shopping-cart").classList.add("hidden");
  });

document
  .querySelector(".open-cart-button")
  .addEventListener("click", function () {
    document.querySelector(".shopping-cart").classList.remove("hidden");
  });
document.querySelector(".show-more-btn").addEventListener("click", function () {
  document.querySelector(".show-more-flowers").classList.remove("hidden");
});

const btn = document.querySelectorAll(".buy-btn");

btn.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("fuckumean");
    const flowerName = btn.childNodes[3].innerText;
    const flowerLink = btn.childNodes[1].childNodes[1].currentSrc;
    const result = `Hello, I'd like to buy ${flowerName} Link here ${flowerLink}`;
    console.log(btn.childNodes[1].childNodes[1].currentSrc);
    const whatsappURL = `https://wa.me/+917887354667?text=${result}`;
    window.location.href = whatsappURL;
  });
});

const tl = gsap.timeline({
  delay: 1,
});

tl.from(".gsap1", {
  x: "-100%",
  y: "-100%",
  scale: 0,
  opacity: 0,
  duration: 0.2,
});
tl.from(".gsap2", {
  x: "-100%",
  y: "100%",
  opacity: 0,
  scale: 0,
  duration: 0.2,
});
tl.from(".gsap3", {
  y: "-100%",
  opacity: 0,
  scale: 0,
  duration: 0.2,
});
tl.from(".gsap4", {
  x: "-100%",
  y: "100%",
  opacity: 0,
  scale: 0,
  duration: 0.2,
});
tl.from(".gsap5", {
  x: "100%",
  y: "100%",
  opacity: 0,
  scale: 0,
  duration: 0.2,
});
tl.from(".gsap6", {
  x: "100%",
  y: "-100",
  opacity: 0,
  scale: 0,
  duration: 0.2,
});
tl.from(".gsap7", {
  x: "100%",
  y: "100%",
  opacity: 0,
  scale: 0,
  duration: 0.2,
});
tl.from(".gsap8", {
  x: "100%",
  y: "100%",
  opacity: 0,
  scale: 0,
  duration: 0.2,
});
tl.from(".gsap9", {
  x: "100%",
  y: "100%",
  opacity: 0,
  scale: 0,
  duration: 0.2,
});
tl.from(".gsap10", {
  x: "100%",
  y: "100%",
  opacity: 0,
  scale: 0,
  duration: 0.2,
});
