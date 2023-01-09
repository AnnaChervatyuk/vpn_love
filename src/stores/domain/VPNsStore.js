import { runInAction, makeAutoObservable } from 'mobx';
import VPNService from '../VPNService';

// ------ VPN MODEL ------
// absoluteUrl: "http://dev.vpnlove.me/api/vpns/mullvad-vpn/"
// acceptsCryptocurrency: true
// acceptsRussianCreditcards: false
// countries: [{code: "AU", name: "Австралия"}, {code: "AL", name: "Албания"},…]
// createdAt: "2022-12-26T13:18:06.062276Z"
// currencySymbol: "€"
// dataCollection: "NO"
// description: ""
// discount: 10
// iconUrl: "http://dev.vpnlove.me/uploads/icons/mullvad.png"
// id:1
// killSwitch: true
// logging:false
// loggingInfo:""
// multihop:false
// name:"Mullvad VPN"
// obfuscation:true
// obfuscationInfo:""
// paymentInfo:""
// paymentMethods:[{name: "Credit Card", slug: "creditcard"}, {name: "Bitcoin", slug: "bitcoin"},…]
// platforms: [{name: "Windows", slug: "windows"}, {name: "MacOS", slug: "macos"}, {name: "Linux", slug: "linux"},…]
// platformsInfo: ""
// price: "5.00"
// promocode:null
// published:false
// recommended:true
// screenshots: [{name: "Mullvad VPN", imageUrl: "http://dev.vpnlove.me/uploads/screenshots/mullvad-site.JPG",…},…]
// slug:"mullvad-vpn"
// torrents:true
// torrentsInfo: ""
// updatedAt: "2022-12-26T13:18:06.062311Z"
// website:"https://mullvad.net"
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
