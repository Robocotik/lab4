import {accessToken, version} from './consts.js';

class Urls {
  constructor() {
    this.url = 'https://api.vk.com/method';
    this.commonInfo = `access_token=${accessToken}&v=${version}`;
  }

  getUserInfo(userId) {
    return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig,bdate,city,about,activities,education,followers_count,last_seen,movies,music,universities&${this.commonInfo}`;
  }

  getGroupMembers(groupId, count, offset) {
    return `${this.url}/groups.getMembers?group_id=${groupId}&offset=${offset}&fields=photo_400_orig,online&count=${count}&${this.commonInfo}`;
  }
}

export const urls = new Urls();
