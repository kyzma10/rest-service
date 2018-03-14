
function convertToMinute(milisec) {
  const minute = Math.floor(milisec / 60000);
  const sec = Math.floor((milisec / 60000 - minute) * 100);
  if(sec < 10)
    return minute + ':0' + sec;
  else
    return minute + ':' + sec;
}

export {
  convertToMinute
}
