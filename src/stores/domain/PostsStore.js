import { runInAction, makeAutoObservable } from 'mobx';
import VPNService from './../VPNService';

// ------ POST MODEL ------
// absoluteUrl: "http://dev.vpnlove.me/api/posts/surfshark-block/"
// categories: {name: 'Новости', slug: 'news'}
// content: ""
// createdAt: "2022-12-26T15:44:15.297105Z"
// id: 2
// shortDescription: ""
// slug: "surfshark-block"
// title: ""
// updatedAt: "2022-12-27T20:08:00.769500Z"
// ------ END POST MODEL -------

class PostsStore {
  constructor() {
    makeAutoObservable(this);
    this.vpnService = new VPNService();
  }
  _postsData = [];
  _post = null;

  get postsData() {
    return this._postsData;
  }

  get post() {
    return this._post;
  }

  getPostsAsync = async () => {
    try {
      const data = await this.vpnService.get('posts');
      runInAction(() => {
        this._postsData = data;

        // let list = [];
        // var i;
        // for (i = 0; i < 20; i += 2) {
        //   let el = Object.assign({}, data[0]);
        //   el.id = data[0].id + i;
        //   list.push(el);
        //   el = Object.assign({}, data[1]);
        //   el.id = data[1].id + i;
        //   list.push(el);
        // }
        // this._postsData = list;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
      });
    }
  };

  getPostAsync = async (params) => {
    try {
      const target = 'posts/' + params;
      const data = await this.vpnService.get(target);
      runInAction(() => {
        this._post = data;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
      });
    }
  };
}

export default new PostsStore();
