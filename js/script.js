const toggleBtn = document.getElementById('toggle-btn');
const mobileNavigation = document.getElementById('mobile-nav');

toggleBtn.addEventListener('click', function(){
  mobileNavigation.classList.toggle('hidden');
})


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
