// Import stylesheets
import './style.css';

const topImg = document.querySelector('#top');
const bottomImg = document.querySelector('#bottom');
const btnTop = document.querySelector('.link-top');
const btnBottom = document.querySelector('link-bottom');

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
const endBottomUrl = linkTopImg.substring(
  removeAfterBottomUrl + 1,
  linkBottomImg.length
);
const numberArr = [];

function randomInRange(from, to) {
  var r = Math.random();
  return Math.floor(r * (to - from) + from);
}

btnTop.addEventListener('click', () => {
  const generateNumber = randomInRange(0, 999);
  numberArr.push(generateNumber);
  console.log(generateNumber, !numberArr.includes(generateNumber));
  console.log(numberArr);
  if (numberArr.includes(generateNumber)) {
    const newUrl = beginTopUrl + generateNumber;
    console.log(newUrl);
    topImg.setAttribute('src', newUrl);
  } else {
    return;
  }
});

console.log(beginBottomUrl, endBottomUrl);
