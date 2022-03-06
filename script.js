const back = document.getElementById('back');
const front = document.getElementById('front');

back.addEventListener('click', () => {
  back.classList.toggle('back-flip');
  front.classList.toggle('front-flip');
});

front.addEventListener('click', () => {
  back.classList.toggle('back-flip');
  front.classList.toggle('front-flip');
});
