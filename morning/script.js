const padlock = document.querySelector('.padlock');
const text = document.querySelector('.text');

let isClicked = false;

const showText = () => {
  if (!isClicked) text.classList.add('text_visible');
};

const hideText = () => {
  if (!isClicked) text.classList.remove('text_visible');
};

const clickShowText = () => {
  isClicked = true;
  text.classList.add('text_visible');
  padlock.style.opacity = '.5';
};

padlock.addEventListener('mouseenter', showText);
padlock.addEventListener('mouseleave', hideText);
padlock.addEventListener('click', clickShowText);
