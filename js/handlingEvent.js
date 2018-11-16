function AddEvent(namePhoneObj, namePhone) {
  this.addEventForSaveMessBtn = () => {
    const createMessBtn = document.querySelectorAll(`div#${namePhone} table tr td input[value="Save"]`).forEach( item => {
      item.addEventListener('click', () => {
        if (namePhoneObj.messenge.isNullFieldInput())
          alert('Title và Content không được để trống!');
        else {
          namePhoneObj.messenge.saveMess();
          namePhoneObj.data.showData(namePhoneObj.data.draftBoxArchives,'DraftBox');
          namePhoneObj.messenge.deleteFieldInput();
          namePhoneObj.battery.checkBattery();
        }
      });
    });
  }

  this.addEventForSendMessBtn = () => {
    const createMessBtn = document.querySelectorAll(`div#${namePhone} table tr td input[value="Send"]`).forEach( item => {
      item.addEventListener('click', () => {

        if (namePhoneObj.messenge.isNullFieldInput())
          alert('Title và Content không được để trống!');
        else {
          namePhoneObj.messenge.sendMess();
          namePhoneObj.data.showData(namePhoneObj.data.sentBoxArchives,'SentBox');
          if (namePhoneObj===listPhoneObj[0]) {
            listPhoneObj[1].data.addData(listPhoneObj[1].data.inBoxArchives, namePhoneObj.data.sentBoxArchives[namePhoneObj.data.sentBoxArchives.length-1]);
            listPhoneObj[1].data.showData(listPhoneObj[1].data.inBoxArchives, 'InBox');
          }
          else {
            listPhoneObj[0].data.addData(listPhoneObj[0].data.inBoxArchives, namePhoneObj.data.sentBoxArchives[namePhoneObj.data.sentBoxArchives.length-1]);
            listPhoneObj[0].data.showData(listPhoneObj[0].data.inBoxArchives, 'InBox');
          }

          namePhoneObj.messenge.deleteFieldInput();
          namePhoneObj.battery.checkBattery();
        }
      });
    });
  }

  this.pushPowerBtn = () => {
    let powerBtn = document.getElementById(`${namePhone}PowerBtn`);
    powerBtn.addEventListener('click', () => {
      if (namePhoneObj.battery.batteryLevel===0)
        alert('Điện thoại hết pin! Yêu cầu sạc điện thoại trước!');
      else {
        namePhoneObj.power();
        namePhoneObj.showTurnOnStatus();
      }
    });
  }

  this.pushChargeBtn = () => {
    let powerBtn = document.getElementById(`${namePhone}ChargeBtn`);
    powerBtn.addEventListener('click', () => {
      namePhoneObj.battery.chargeBattery();
    });
  }

  this.addEventAllBtn = () => {
    this.pushPowerBtn();
    this.pushChargeBtn();
    this.addEventForSendMessBtn();
    this.addEventForSaveMessBtn();
  }
}