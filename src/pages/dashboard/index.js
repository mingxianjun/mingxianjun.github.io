/**
 * Created by MingXianJun on 2019/11/8
 * 视图配置页面入口
 */
export default {
  routers: [{
    title: '我的主页',
    name: 'dashboard',
    url: '/dashboard',
    component: 'dashboard',
    lazyLoad: function ($transition$) {
      //样式
      // import(/* webpackChunkName:"dashboard.styl"*/'./components/dashboard.styl');

      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName:"dashboard.module"*/'./module').then(mod => {
        $ocLazyLoad.load(mod.DASHBOARD_MODULE);
      })

    }
  }]
}