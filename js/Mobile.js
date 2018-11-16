function Mobile(namePhone, phoneNumber) {
  this.namePhone = namePhone;
  this.phoneNumber = phoneNumber;
  this.isTurnOn = true;
  this.battery = new Battery(namePhone, this);
  this.data = new Data(this.namePhone);

  this.messenge = new Messenge(this, namePhone, phoneNumber);
  this.handlingEvent = new AddEvent(this, namePhone);
  this.power = () => {
    this.isTurnOn = (this.isTurnOn) ? false : true;
    if (this.isTurnOn) {
      this.turnOn();
    }
    else {
      this.turnOff();
    }
  }
  this.showTurnOnStatus = () => {
    const turnOnStatus = document.getElementById(`${namePhone}IsTurnOn`);
    turnOnStatus.innerHTML = (this.isTurnOn) ? '<b>ON</b>' : '<b>OFF</b>';
  }
  this.turnOn = () => {
    const rowCreateMessengeSelector = document.querySelectorAll(`div#${namePhone} table tr.createMessenge`).forEach(item => {
      item.style.display = '';
    });
    const rowMessBoxSelector = document.querySelectorAll(`div#${namePhone} table tr.messBox`).forEach(item => {
      item.style.display = '';
    });
  }
  this.turnOff = () => {
    const rowCreateMessengeSelector = document.querySelectorAll(`div#${namePhone} table tr.createMessenge`).forEach(item => {
      item.style.display = 'none';
    });
    const rowMessBoxSelector = document.querySelectorAll(`div#${namePhone} table tr.messBox`).forEach(item => {
      item.style.display = 'none';
    });
  }
}