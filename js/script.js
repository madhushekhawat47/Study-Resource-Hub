let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
   enableDarkMode();
}

toggleBtn.onclick = (e) => {
   darkMode = localStorage.getItem('dark-mode');
   if (darkMode === 'disabled') {
      enableDarkMode();
   } else {
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () => {
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () => {
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () => {
   profile.classList.remove('active');
   search.classList.remove('active');

   if (window.innerWidth < 1200) {
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}
const product = [
   {
      id: 0,
      image: 'images/thumb-1.png',
      title: 'Z Flip Foldable Mobile',
      price: 120,
   },
   {
      id: 1,
      image: 'image/hh-2.jpg',
      title: 'Air Pods Pro',
      price: 60,
   },
   {
      id: 2,
      image: 'image/ee-3.jpg',
      title: '250D DSLR Camera',
      price: 230,
   },
   {
      id: 3,
      image: 'image/aa-1.jpg',
      title: 'Headphones',
      price: 100,
   },
   {
      id: 4,
      image: 'image/bb-1.jpg',
      title: 'Audio Microphone',
      price: 230,
   },
   {
      id: 5,
      image: 'image/cc-1.jpg',
      title: 'Smart Watch',
      price: 100,
   },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
   const searchData = e.target.value.toLowerCase();
   const filteredData = categories.filter((item) => {
      return (
         item.title.toLowerCase().includes(searchData)
      )
   })
   displayItem(filteredData)
});

const displayItem = (items) => {
   document.getElementById('root').innerHTML = items.map((item) => {
      var { image, title, price } = item;
      return (
         `<div class='box'>
               <div class='img-box'>
                   <img class='images' src=${image}></img>
               </div> 
               <div class='bottom'>
                   <p>${title}</p>
                   <h2>$ ${price}.00</h2>
               <button>Add to cart</button>
               </div>
           </div>`
      )
   }).join('')
};
displayItem(categories);