/* eslint-disable */
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let random = (max, min) => Math.floor(Math.random() * (max - min)) + min;
let excusesArr = [
  ["Ramón ", "Some random dude ", "My sister ", "Laura "],
  ["ate ", "screwed ", "stole ", "found "],
  ["my aunt ", "my dog ", "all my work ", "my dreams "],
  ["in the gutter!", "at the mall! ", "in the street!", "in Madrid!"]
];
let excuses = () => {
  let excuse = "";
  for (let part of excusesArr) {
    excuse = excuse.concat(part[random(0, part.length)]);
    console.log(excuse);
  }
  return excuse;
};
window.onload = () => {
  document.querySelector("#excuseBtn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuses();
  });
  document.querySelector("#excuse").innerHTML = excuses();
};
