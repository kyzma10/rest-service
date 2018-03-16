
function convertToMinute(milisec) {
  const minute = Math.floor(milisec / 60000);
  const sec = Math.floor((milisec / 60000 - minute) * 100);
  if(sec < 10)
    return minute + ':0' + sec;
  else
    return minute + ':' + sec;
}

function addProps(arr) {
  let id = 0;
  arr.map((item) => {
    item.id = id
    item.opened = false
    item.setIcons = true
    id++
    return item
  })
  return arr;
}

function showOneItem(arr, id) {
  arr.filter(item => {
    if(item.id === id) {
      item.opened = !item.opened
      item.setIcons = !item.setIcons
    }
    else {
      item.opened = false
      item.setIcons = true
    }
    return item
  })
  return arr;
}

export {
  convertToMinute,
  addProps,
  showOneItem
}
