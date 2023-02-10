const humMenu = document.querySelector('.humberger-menu');
const close = document.querySelector('.close');
const faBar = document.querySelector('.fa-bars')

faBar.addEventListener('click', (event) => {
  humMenu.style.display = 'block';
  faBar.style.display = 'none';
});

close.addEventListener('click', () => {
  humMenu.style.display = 'none';
  faBar.style.display = 'block';
})