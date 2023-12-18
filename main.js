const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let interval = null;

document.addEventListener('DOMContentLoaded', () => {
  const title1 = document.querySelector('#title');
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    title1.innerText = title1.innerText
      .split('')
      .map((letter, index) => {
        if (index < iteration) {
          return title1.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join('');

    if (iteration >= title1.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
});