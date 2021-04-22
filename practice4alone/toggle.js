const toggleBtn = document.querySelector('.nav_toggleBtn');
const menu = document.querySelector('.navmenu');
const icon = document.querySelector('.navicon');

toggleBtn.addEventListener('click', ()=> {
 menu.classList.toggle('active');
 icon.classList.toggle('active');    
});