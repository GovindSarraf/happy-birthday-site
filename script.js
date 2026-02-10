
/* DOOR */
function openDoor() {
  document.getElementById("lock").classList.add("open");
  document.querySelector(".centerBtn").style.display = "none";
  setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("lock").style.display = "none";
  }, 500);
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

/* SLIDER */
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);



// // IMAGE LIST
// const images = [
//   "./images-and-icons/",
//   "https://picsum.photos/id/1015/800/500",
//   "https://picsum.photos/id/1016/800/500",
//   "https://picsum.photos/id/1020/800/500",
//   "https://picsum.photos/id/1024/800/500",
//   "https://picsum.photos/id/1035/800/500",
//   "https://picsum.photos/id/1019/800/500",
//   "https://picsum.photos/id/1021/800/500",
//   "https://picsum.photos/id/1022/800/500",
//   "https://picsum.photos/id/1023/800/500"
// ];

// const popup = document.getElementById("popup");
// const popupThumbs = document.getElementById("popupThumbs");
// const lightbox = document.getElementById("lightbox");
// const lightImg = document.getElementById("lightImg");

// // CREATE POPUP THUMBNAILS
// images.forEach((src, i) => {
//   let img = document.createElement("img");
//   img.src = src;
//   img.onclick = () => openLightbox(i);
//   popupThumbs.appendChild(img);
// });

// // OPEN POPUP
// function openPopup() {
//   popup.style.display = "flex";
// }

// // CLOSE POPUP
// function closePopup() {
//   popup.style.display = "none";
// }

// // OPEN LIGHTBOX FULL IMAGE
// function openLightbox(i) {
//   lightImg.src = images[i];
//   lightbox.style.display = "flex";
// }

// // CLOSE LIGHTBOX
// function closeLightbox() {
//   lightbox.style.display = "none";
// }







// IMAGE LIST
const images = [
  "./images-and-icons/IMG-20260209-WA0001.jpg",
"./images-and-icons/IMG-20260209-WA0002.jpg",
"./images-and-icons/IMG-20260209-WA0003.jpg",
"./images-and-icons/IMG-20260209-WA0004.jpg",
"./images-and-icons/IMG-20260209-WA0005.jpg",
"./images-and-icons/IMG-20260209-WA0006.jpg",
"./images-and-icons/IMG-20260209-WA0007.jpg",
"./images-and-icons/IMG-20260209-WA0009.jpg",
"./images-and-icons/IMG-20260209-WA0012.jpg",
"./images-and-icons/IMG-20260209-WA0015.jpg",
"./images-and-icons/IMG-20260209-WA0016.jpg",
"./images-and-icons/IMG-20260209-WA0017.jpg",
"./images-and-icons/IMG-20260209-WA0018.jpg",
"./images-and-icons/IMG-20260209-WA0022.jpg",
"./images-and-icons/IMG-20260209-WA0024.jpg",
"./images-and-icons/IMG-20260209-WA0026.jpg",
"./images-and-icons/IMG-20260209-WA0027.jpg",
"./images-and-icons/IMG-20260209-WA0028.jpg",
"./images-and-icons/IMG-20260209-WA0030.jpg",
"./images-and-icons/IMG-20260209-WA0034.jpg",
"./images-and-icons/IMG-20260209-WA0036.jpg",
"./images-and-icons/IMG-20260209-WA0040.jpg",
"./images-and-icons/IMG-20260209-WA0042.jpg",
"./images-and-icons/IMG-20260209-WA0044.jpg",
"./images-and-icons/IMG-20260209-WA0045.jpg",
"./images-and-icons/IMG-20260209-WA0047.jpg",
"./images-and-icons/IMG-20260209-WA0048.jpg",
"./images-and-icons/IMG-20260209-WA0049.jpg",
"./images-and-icons/IMG-20260209-WA0052.jpg",
"./images-and-icons/IMG-20260209-WA0056.jpg",
"./images-and-icons/IMG-20260209-WA0059.jpg",
"./images-and-icons/IMG-20260209-WA0062.jpg",
"./images-and-icons/IMG-20260209-WA0064.jpg"
];

const uniquePopup = document.getElementById("uniquePopup");
const uniquePopupThumbs = document.getElementById("uniquePopupThumbs");
const uniqueLightbox = document.getElementById("uniqueLightbox");
const uniqueLightImg = document.getElementById("uniqueLightImg");

let currentImageIndex = 0;

// CREATE POPUP THUMBNAILS
images.forEach((src, i) => {
  let img = document.createElement("img");
  img.src = src;
  img.onclick = () => openUniqueLightbox(i);
  uniquePopupThumbs.appendChild(img);
});

// OPEN POPUP
function openUniquePopup() {
  uniquePopup.style.display = "flex";
}

// CLOSE POPUP
function closeUniquePopup() {
  uniquePopup.style.display = "none";
}

// OPEN LIGHTBOX FULL IMAGE
function openUniqueLightbox(i) {
  currentImageIndex = i;
  uniqueLightImg.src = images[i];
  uniqueLightbox.style.display = "flex";
}

// CLOSE LIGHTBOX
function closeUniqueLightbox() {
  uniqueLightbox.style.display = "none";
}

// SHOW NEXT IMAGE
function nextUniqueImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  uniqueLightImg.src = images[currentImageIndex];
}

// SHOW PREVIOUS IMAGE
function prevUniqueImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  uniqueLightImg.src = images[currentImageIndex];
}