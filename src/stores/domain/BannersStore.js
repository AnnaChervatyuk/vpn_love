import { runInAction, makeAutoObservable } from 'mobx';
import VPNService from './../VPNService';
import { toJS } from 'mobx';

// ------ POST MODEL ------
// backgroundColor : "#cedae1"
// description : ""
// image : "http://dev.vpnlove.me/uploads/images/vpn-love-met.jpg"
// linkText : "Подробнее о нашей методологии"
// showOnHomepage : true
// title : "Методология оценки VPN-сервисов от VPN Love"
// url : "https://annachervatyuk.github.io/vpn_love/#/top/assessment-methodology"
// ------ END POST MODEL -------

class PostsStore {
  constructor() {
    makeAutoObservable(this);
    this.vpnService = new VPNService();
  }
  _bannersList = [];

  get bannersList() {
    return this._bannersList;
  }

  getBannersListAsync = async () => {
    try {
      const data = await this.vpnService.get('banners');
      runInAction(() => {
        this._bannersList = data;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
      });
    }
  };
}

export default new PostsStore();
