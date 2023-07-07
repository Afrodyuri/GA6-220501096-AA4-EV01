
const tutorialSection = document.getElementById('tutoriales');


tutorialSection.addEventListener('click', function() {
  alert('Has hecho clic en la sección de tutoriales');
});
``
/*menu*/
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  }
/*ventana emergente*/

function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    var content = popup.querySelector('.popup-content');
    content.classList.toggle('show');
  }
/*header*/ 
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  }); 
  
  