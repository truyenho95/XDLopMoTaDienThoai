let nokia = new Mobile('nokia','0886948987');
let iPhone = new Mobile('iPhone','113');
let listPhoneObj = [nokia, iPhone];

window.onload = () => {
  nokia.battery.showBattery();
  nokia.showTurnOnStatus();

  iPhone.battery.showBattery();
  iPhone.showTurnOnStatus();

  nokia.handlingEvent.addEventAllBtn();
  iPhone.handlingEvent.addEventAllBtn();
}
