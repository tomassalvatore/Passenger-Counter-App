const increment = document.querySelector('#increment-btn');
const save = document.querySelector('#save-btn');
const lastEntries = document.querySelector('.entries-number');
let counter = 0;

function incrementPassenger() {
  counter++;
  document.getElementById('count-el').innerText = counter;
}
function saveData() {
  let data = counter;
  document.getElementById('count-el').innerText = 0;
  counter = 0;
  lastEntries.innerText += ` ${data} -`;
}

increment.addEventListener('click', incrementPassenger);
save.addEventListener('click', saveData);
