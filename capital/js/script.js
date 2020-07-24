
let card = "";
let i;

let images = [
  'https://placeimg.com/640/480/animals',
  'https://placeimg.com/640/480/any',
  'https://placeimg.com/640/480/arch',
  'https://placeimg.com/640/480/nature',
  'https://placeimg.com/640/480/people',
]

let title = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span> Ut volutpat ultrices semper. </span> Morbi scelerisque maximus tincidunt.']


for (i = 0; i < 5; i++){
  card +=
  '<div class="card">' +
  '<div class="social">' +
  '<a href="#"><i class="fab fa-instagram i-cl"></i></a>' +
  '<a href="#"><i class="fab fa-facebook-f i-cl"></i></a>' +
  '<a href="#"><i class="fab fa-twitter i-cl"></i></a>' +
  '<a href="#"><i class="fab fa-linkedin-in i-cl"></i></a>' +
  '</div>' +
  '<a href="#">' +
  '<div class="card-img">' +
  '<img src="' +
  images[i] +
  '">'+
  '</div>' +

  '<div class="card-bottom">' +
  '<div class="card-title">' +
  '<p>' + title[0] + '</p>' +
  '</div>' +
  '<div class="bottom-details">' +
  '<div class="bookmark-options"><div class="bookmark"><i class="fas fa-bookmark i-cl"></i></div><div class="options"><i class="fas fa-ellipsis-h i-cl"></i></div></div>' +
  '<div class="view-share"><div class="view"><i class="fas fa-eye i-cl"></i><span class="i-cl">11</span></div><div class="share"><i class="fas fa-share i-cl"></i><span class="i-cl">24</span></div></div>' +
  '</div>' +

  '</div>' +
  '</a>' +
  '</div>';
}

document.querySelector("#demo").innerHTML = card;
