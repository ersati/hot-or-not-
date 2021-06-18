// Import stylesheets
import './style.css';

const topImg = document.querySelector('#top');
const bottomImg = document.querySelector('#bottom');
const linkTopImg = topImg.getAttribute('src');
const linkBottomImg = bottomImg.getAttribute('src');
const removeAfterTopUrl = linkTopImg.indexOf('?');
const removeAfterBottomUrl = linkBottomImg.indexOf('?');
const beginTopUrl = linkTopImg.substring(0, removeAfterTopUrl);
const endTopUrl = linkTopImg.substring(
  removeAfterTopUrl + 1,
  linkTopImg.length
);

const beginBottomUrl = linkBottomImg.substring(0, removeAfterBottomUrl);
const endBottomUrl = linkTopImg.substring(
  removeAfterBottomUrl + 1,
  linkBottomImg.length
);
console.log(beginBottomUrl, endBottomUrl);
