import axios from 'axios';
import api from '../js/api-config';

let noLogin = [
  'store',
  'goodsDetail',
  'shopCart',
  'goodsList'
]

export default function (to, from, next) {
  var nextPageName = to.name;
  if (noLogin.some(v => v == nextPageName)) {
    return next();
  }
  axios.get(api.isLogin).then(res => {
    let isLogin = false;
    if (res.data.code == "logined") {
      isLogin = true;
    }
    var nextPageName = to.name;
    // console.log(nextPageName != "login", !isLogin);

    if (nextPageName == "login" && isLogin) {
      next('/');
    } else if (nextPageName != "login" && !isLogin) {
      next({
        path: '/login',
        query: {
          nextPage: to.fullPath
        }
      });
    } else {
      next();
    }
  })
}
