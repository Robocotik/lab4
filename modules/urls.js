import {accessToken, version} from './consts.js';

class Urls {
  constructor() {
    this.url = 'https://api.vk.com/method';
    this.commonInfo = `access_token=${accessToken}&v=${version}`;
  }

  getUserInfo(userId) {
    return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig,bdate,city,about,activities,education,followers_count,sex,last_seen,movies,music,universities&${this.commonInfo}`;
  }

  getGroupMembers(groupId, count, offset, filter) {
    console.log('ЗАПРОС С ДАННЫМИ', count, offset, filter)
    return `${this.url}/groups.getMembers?group_id=${groupId}&offset=${offset}${filter? `&filter=friends`:''}&fields=photo_400_orig,online,sex&count=${count}&${this.commonInfo}`;
  }
}

export const urls = new Urls();
