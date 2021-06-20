// Import stylesheets
import './style.css';

const topImg = document.querySelector('#top');
const bottomImg = document.querySelector('#bottom');
const btnTop = document.querySelector('.link-top');
const btnBottom = document.querySelector('.link-bottom');
const headlines = document.querySelectorAll('h2');

const linkTopImg = topImg.getAttribute('src');
const linkBottomImg = bottomImg.getAttribute('src');

const removeAfterTopUrl = linkTopImg.indexOf('?');
const removeAfterBottomUrl = linkBottomImg.indexOf('?');

const beginTopUrl = linkTopImg.substring(0, removeAfterTopUrl + 1);
const endTopUrl = linkTopImg.substring(
  removeAfterTopUrl + 1,
  linkTopImg.length
);

const beginBottomUrl = linkBottomImg.substring(0, removeAfterBottomUrl + 1);
const endBottomUrl = linkBottomImg.substring(
  removeAfterBottomUrl + 1,
  linkBottomImg.length
);

const numberArr = [];

numberArr.push(endTopUrl, endBottomUrl);

function randomInRange(from, to) {
  var r = Math.random();
  return Math.floor(r * (to - from) + from);
}

function generatePicture(url, img, headline, text) {
  const generateNumber = randomInRange(0, 999);
  if (!numberArr.includes(generateNumber)) {
    numberArr.push(generateNumber);
    const newUrl = url + generateNumber;
    img.setAttribute('src', newUrl);
    headline.textContent = `${text} #${generateNumber}`;
  } else {
    return;
  }
}

btnTop.addEventListener('click', () =>
  generatePicture(beginTopUrl, topImg, headlines[0], 'Dog')
);

btnBottom.addEventListener('click', () =>
  generatePicture(beginBottomUrl, bottomImg, headlines[1], 'Cat')
);
