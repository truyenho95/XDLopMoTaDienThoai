function getDate() {
  let now = new Date();
  return `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`;
}

