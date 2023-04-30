const clock = document.querySelector("h1#clock");
const year = document.querySelector("h1#year");
const lunar = document.querySelector("h1#luna");

//interval = 한 함수를 특정시간마다 호출
//setInterval(함수 , 호출주기ms)
//setInterval(sayHello, 5000);
//Timeout = 입력한 시간만큼 대기 후 함수 호출
//setTimeout(함수 , 기다릴시간ms)

function getClock() {
  const date = new Date();
  const getYear = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
  year.innerText = `${getYear}`;
  lunar.innerText = `${month}.${day}`;
}
getClock();
setInterval(getClock, 1000);
