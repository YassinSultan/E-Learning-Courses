let body = document.body;

let profile = document.querySelector('.header .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('.side-bar .close-side-bar').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

let toggleBtn=document.querySelector('#toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

const enabIDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun','fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode','enabled')
}

const disableIDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon','fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode','disabled')
}


if(darkMode === 'enabled'){
   enabIDarkMode();
}

toggleBtn.onclick = (e)=>{
   let darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enabIDarkMode();
   }else {
      disableIDarkMode();
   }
}

userName_fields=document.querySelectorAll('.profile h3')
const userName =JSON.parse(localStorage.getItem('Username'));
userName_fields.forEach(field => {
   field.textContent = userName
});