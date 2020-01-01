/**
 * Created by MingXianJun on 2019/11/8
 * 仪表板入口
 */
export default {
  routers: [{
    title: '仪表板',
    name: 'dashboard',
    url: '/dashboard',
    component: 'dashboard',
    lazyLoad: function ($transition$) {
      //样式
      import(/* webpackChunkName:"dashboard.styl"*/'./components/dashboard.styl');
      // ng 模块
      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName:"dashboard.module"*/'./module').then(mod => {
        $ocLazyLoad.load(mod.DASHBOARD_MODULE);
      })
    }
  }]
}