const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

const updateBigCup = () => {
  //   console.log(smallCups.length);
  const fullSmallCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullSmallCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = '0';
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullSmallCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullSmallCups / totalCups) * 100}%`;
  }

  if (fullSmallCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (fullSmallCups * 250) / 1000}L`;
  }
};

updateBigCup();

const fillCup = (idx) => {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
};

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => fillCup(idx));
});
