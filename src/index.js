// write your code here
document.addEventListener('DOMContentLoaded', ()=>{
fetch('http://localhost:3000/ramens')
.then(res=>res.json())
.then(data=> imageMenu(data))  
 })


const menuDiv = document.getElementById('ramen-menu')
let img = document.querySelector('img.detail-image');
let ramenName = document.querySelector('h2.name');
let restaurant = document.querySelector('h3.restaurant');
let rating = document.querySelector('p');
let comment = document.getElementById('comment-display');
    
function imageMenu(ramens){  
for (let ramen of ramens){
let menuImg = document.createElement('img')
menuImg.src = `${ramen.image}`
menuImg.style.margin = '3px';
menuDiv.append(menuImg)
menuImg.addEventListener('click',()=>clickAPic(ramen) )
  } 
}

const form = document.getElementById('new-ramen');
let newRamenName = document.getElementById('new-name');
let newRestaurant = document.getElementById('new-restaurant');
let newImage = document.getElementById('new-image');
let newRating = document.getElementById('new-rating');
let newComment = document.getElementById('new-comment');

function clickAPic(ramen){
    console.log('I was clicked')
    ramenName.innerText = `${ramen.name}`;
    restaurant.innerText = `${ramen.restaurant}`;
    rating.innerText = `${ramen.rating}/10,`;
    comment.innerText = `${ramen.comment}`;
    img.src = `${ramen.image}`;
    img.style.width = '350px';
    img.style.length = '350px';
}

function addARamen(){
  let menuImg = document.createElement('img');
    menuImg.src= `${newImage.value}`; 
    menuDiv.append(menuImg);
  menuImg.addEventListener('click',()=>{
    img.src= `${newImage.value}`
    ramenName.innerText = `${newRamenName.value}`;
    restaurant.innerText = `${newRestaurant.value}`;
    rating.innerText = `${newRating.value}/10`;
    comment.innerText = `${newComment.value}`;
  })
}



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addARamen()
})





// function ramenPost(name, restaurant,image, rating,comment){}
// fetch('http://localhost:3000/ramens',{
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "appliction/json"
//     },
//     body: json.stringify({
//         "name":`${name}`,
//         "restaurant":`${restaurant}`,
//         "image":`${image}`,
//         "rating":`${rating}`,
//         "comment":`${comment}`
//     })
// })
