function getCurrentDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date();
  const dayOfWeek = daysOfWeek[day.getDay()];
  return dayOfWeek;
}
const currentDay = getCurrentDayOfWeek();
document.getElementById("currentDayOfTheWeek").textContent = currentDay;

function getCurrentUTCTimeInMs() {
  const currentDate = new Date();
  const utcTimeInMs = currentDate.getTime();
  return utcTimeInMs;
}
const currentUTCTimeInMs = getCurrentUTCTimeInMs();
document.getElementById("currentUTCTimeInMs").textContent = currentUTCTimeInMs;

function getCurrentUTCTime() {
  const currentDate = new Date();
  const options = { timeZone: "UTC", hour12: true };
  const utcTime = currentDate.toLocaleTimeString("en-US", options);

  return utcTime;
}
const currentUTCTime = getCurrentUTCTime();
document.getElementById("currentUTCTime").textContent = currentUTCTime;
