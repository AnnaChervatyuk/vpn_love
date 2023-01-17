import { runInAction, makeAutoObservable } from 'mobx';
import VPNService from './../VPNService';
import { toJS } from 'mobx';

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
// image : ''
// published: true
// ------ END POST MODEL -------

class PostsStore {
  constructor() {
    makeAutoObservable(this);
    this.vpnService = new VPNService();
  }
  _postsData = [];
  _topRatedData = [];
  _categoriesData = [];
  _allPost = [];
  _post = null;

  get postsData() {
    return this._postsData;
  }
  get categoriesData() {
    return this._categoriesData;
  }

  get topRatedData() {
    return this._topRatedData;
  }

  get post() {
    return this._post;
  }

  getCategoriesAsync = async () => {
    try {
      const data = await this.vpnService.get('categories');
      runInAction(() => {
        this._categoriesData = data;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
      });
    }
  };

  getPostsAsync = async () => {
    try {
      const data = await this.vpnService.get('posts');
      runInAction(() => {
        this._postsData = data;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
      });
    }
  };

  getTopRatedAsync = async () => {
    try {
      const data = await this.vpnService.get('top-rated');
      runInAction(() => {
        this._topRatedData = data;
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
