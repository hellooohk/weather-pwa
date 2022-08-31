export function hoursMinutesCalculator(startDate, endDate) {
  const diff = endDate - startDate;
  const hours = new Date(diff).getHours();
  const minutes = new Date(diff).getMinutes();
  return hours + "H " + minutes + "M";
}
export function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
