const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();

const prevDate = new Date(year, month, 0).getDate();
const prevDay = new Date(year, month, 0).getDay();
const thisDate = new Date(year, month + 1, 0).getDate();
const thisDay = new Date(year, month + 1, 0).getDay();

let prevDates = [];
let thisDates = [...Array(thisDate + 1).keys()].slice(1);
let nextDates = [];

if (prevDay !== 6) {
  for (let i = 0; i < prevDay + 1; i++) {
    prevDates.unshift(PrevDate - i);
  }
}

for (let i = 1; i < 7 - thisDay; i++) {
  nextDates.push(i);
}

const dates = prevDates.concat(thisDates, nextDates);

dates.forEach((date, i) => {
  dates[i] = `<div class="date">${date}</div>`;
});

`<li>
  <img src="${image}" width=30px height=30px alt="고객이미지">
  <p>${name}</p>
</li>
`;

document.querySelector(".dates").innerHTML = dates.join("");
