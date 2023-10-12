const toggleBtn = document.getElementById('toggle-btn');
const mobileNavigation = document.getElementById('mobile-nav');

toggleBtn.addEventListener('click', function(){
  mobileNavigation.classList.toggle('hidden');
})