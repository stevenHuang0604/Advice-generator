const adviceNumber = document.querySelector('.advice__subheading--random-number');
const adviceQuote = document.querySelector('.advice__heading');
const btn = document.querySelector('.advice__dice');

const generateRandomQuote = async () => {
  const res = await fetch(`https://api.adviceslip.com/advice`);
  const data = await res.json();
  const { id, advice } = data.slip;
  adviceNumber.textContent = id;
  adviceQuote.textContent = advice;
};

generateRandomQuote();

btn.addEventListener('click', function (e) {
  e.target.closest('.advice__dice') === btn && generateRandomQuote();
});
