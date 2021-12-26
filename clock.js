const month = document.querySelector(".month_day");
const time = document.querySelector(".time");

function printclock() {
  const date = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const months = String(parseInt(date.getMonth()) + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dates = String(week[parseInt(date.getDay())]);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  month.innerText = `${months}.${day}(${dates})`;
  time.innerText = `${hours}:${minutes}`;
}

printclock();
setInterval(printclock, 1000);
