function getDate() {
  let now = new Date();
  return `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`;
}

function TextMessenge(title, date, content, author, number) {
  this.title = title;
  this.dateCreate = date;
  this.content = content;
  this.author = author;
  this.number = number;
  return this;
}

let nokia = new Mobile('nokia');
nokia.battery.showBattery();
nokia.showTurnOnStatus();
nokia.pushPowerBtn();

let iPhone = new Mobile('iPhone');
iPhone.battery.showBattery();
iPhone.showTurnOnStatus();
iPhone.pushPowerBtn();
