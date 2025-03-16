const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "./images/shoyu.jpg",
    rating: 9,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Kojiro Ramen",
    restaurant: "Menya",
    image: "./images/kojiro.jpg",
    rating: 7,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Naruto Ramen",
    restaurant: "Ramen-ya",
    image: "./images/naruto.jpg",
    rating: 8,
    comment: "Rich and creamy!",
  },
  {
    id: 4,
    name: "Gyukotsu Ramen",
    restaurant: "Menya",
    image: "./images/gyukotsu.jpg",
    rating: 7,
    comment: "Very tasty!",
  },
  {
    id: 5,
    name: "Nirvana Ramen",
    restaurant: "Kempinski",
    image: "./images/nirvana.jpg",
    rating: 9,
    comment: "Unique recipe!",
  },
  {
    id: 6,
    name: "Kenyan Lobster",
    restaurant: "Sarova Stanley",
    image: "./images/images.jpeg",
    rating: 5,
    comment: "Tasty Food",
  },
];
document.addEventListener("DOMContentLoaded", () => {
 const ramenMenu = document.getElementById("ramen-menu");
 const selectedImage = document.getElementById("selected-ramen-image");
 const overlayName = document.getElementById("overlay-name");
 const overlayRestaurant = document.getElementById("overlay-restaurant");
 const detailRating = document.getElementById("detail-rating");
 const detailComment = document.getElementById("detail-comment");
 const newRamenForm = document.getElementById("new-ramen");
function displayRamen() {
   ramenMenu.innerHTML = ""; 
   ramens.forEach((ramen) => {
     const img = document.createElement("img");
     img.src = ramen.image;
     img.alt = ramen.name;
     img.addEventListener("click", () => handleClick(ramen));
     ramenMenu.appendChild(img);
   });

   if (ramens.length > 0) {
     handleClick(ramens[0]);
   }
 }
function handleClick(ramen) {
   selectedImage.src = ramen.image;
   overlayName.textContent = ramen.name;
   overlayRestaurant.textContent = ramen.restaurant;
   detailRating.textContent = ramen.rating;
   detailComment.textContent = ramen.comment;
 }
