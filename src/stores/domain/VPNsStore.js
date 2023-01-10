import { runInAction, makeAutoObservable } from 'mobx';
import VPNService from '../VPNService';

// ------ VPN MODEL ------
// absoluteUrl:"http://dev.vpnlove.me/api/vpns/nord-vpn/"
// acceptsCryptocurrency:true
// acceptsRussianCreditcards:false
// countries:[{code: "AU", name: "Австралия"}, {code: "AT", name: "Австрия"}, {code: "AL", name: "Албания"},…]
// createdAt:"2023-01-09T22:17:22.901151Z"
// currencySymbol:"$"
// dataCollection:"LIMITED"
// description:"Сервис основанный в 2012 году, зарегистрирован в Панаме. \r\nАктивно развивается и разрабатывается. \r\n\r\nВ своем распоряжении имеет 3 тарифных плана - Standard, Plus, Complete, различия этих тарифов заключается в том, что с повышением цены Nord предоставляет доступ к их менеджеру паролей и облачному хранилищу. \r\n\r\nПоддерживает до 6 устройств. \r\n\r\nОсобенностями сервиса является наличие таких функций как - <b>Meshnet</b> (Подключайтесь к любому удаленному устройству напрямую через частные зашифрованные туннели и пользуйтесь преимуществами маршрутизации трафика), <b>Threat Protection</b> (Используйте Threat Protection, чтобы защитить себя от таких онлайн-угроз, как вирусы, зараженные сайты и трекеры.), <b>Раздельное туннелирование</b> (позволяет выбирать, какое приложение будет идти через VPN, а какое нет) , <b>Double VPN</b> (подключение идет через цепочку из 2-х серверов), <b>Onion over VPN</b> (ваш трафик идет через анонимную сеть Tor), <b>Smart DNS</b> (позволяет скрыть DNS запросы и получить доступ к стриминговым площадкам, такие как Netflix или Disney Plus).\r\n\r\nПоддерживаемые протоколы - <b>IKEv2, NordLynx, OpenVPN.</b>"
// discount:0
// iconUrl:"http://dev.vpnlove.me/uploads/icons/nordvpn-logo-secondary-negative-bg.png"
// id:166
// killSwitch:true
// logging:false
// loggingInfo:""
// multihop:false
// name:"Nord VPN"
// obfuscation:false
// obfuscationInfo:"Сервис нигде не заявлял о наличии у себя функции обфускации трафика."
// paymentInfo:"Да, NordVPN предоставляет возможность оплаты криптовалютой. Он принимает к оплате криптовалюту - Bitcoin и Ethereum и Ripple."
// paymentMethods:[{name: "Credit Card", slug: "creditcard"}, {name: "Bitcoin", slug: "bitcoin"}]
// platforms:[{name: "Windows", slug: "windows"}, {name: "MacOS", slug: "macos"}, {name: "Linux", slug: "linux"},…]
// platformsInfo:""
// price:"3.69"
// promocode:null
// published:false
// recommended:false
// screenshots:[{name: "Nord VPN", imageUrl: "http://dev.vpnlove.me/uploads/screenshots/Settings.jpg",…},…]
// slug:"nord-vpn"
// torrents:true
// torrentsInfo:"Имеет поддержку Torrent-ов, для этого нужно выбрать специальную настройку внутри приложения."
// updatedAt:"2023-01-09T22:18:46.731645Z"
// website:"https://nordvpn.com"
// ------ END VPN MODEL ------

class VPNsStore {
  constructor() {
    makeAutoObservable(this);
    this.vpnService = new VPNService();
  }
  _vpnsData = [];
  _vpnDescr = null;

  get vpnsData() {
    return this._vpnsData;
  }
  get vpnDescr() {
    return this._vpnDescr;
  }

  getVPNsAsync = async () => {
    try {
      const data = await this.vpnService.get('vpns');
      runInAction(() => {
        this._vpnsData = data;
        // let list = [];
        // var i;
        // for (i = 0; i < 20; i++) {
        //   let el = Object.assign({}, data[0]);
        //   el.id = data[0].id + i;
        //   list.push(el);
        // }
        // this._vpnsData = list;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
      });
    }
  };
  getVPNAsync = async (params) => {
    try {
      const target = 'vpns/' + params;
      const data = await this.vpnService.get(target);
      runInAction(() => {
        this._vpnDescr = data;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
      });
    }
  };
}

export default new VPNsStore();
