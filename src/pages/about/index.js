/**
 * Created by MingXianJun on 2020/1/5
 * 关于页面入口
 */
export default {
  routers: [{
    title: '关于',
    name: 'about',
    url: '/about',
    component: 'about',
    lazyLoad: function ($transition$) {
      //样式
      import(/* webpackChunkName:"about.styl"*/'./components/about.styl');
      // ng 模块
      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName:"about.module"*/'./module').then(mod => {
        $ocLazyLoad.load(mod.ABOUT_MODULE);
      })
    }
  }]
}