/**
 * Created by MingXianJun on 2019/8/27
 * 首页入口
 */

export default {
  routers: [{
    title: '首页',
    name: 'home',
    url: '/home',
    component: 'home',
    lazyLoad: function ($transition$) {
      var $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName:"home.component"*/'./components/home.component').then(mod => {
        $ocLazyLoad.load(mod.HOME_MODULE);
      });
    }
  }]
}

