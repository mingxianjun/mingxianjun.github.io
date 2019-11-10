/**
 * Created by MingXianJun on 2019/9/3
 * 概要页面入口
 */
export default {
  routers: [{
    title: '概要视图',
    name: 'main',
    url: '/main',
    component: 'main',
    lazyLoad: function ($transition$) {
      //样式
      // import(/* webpackChunkName:"main.styl"*/'./components/main.styl');

      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName:"main.module"*/'./module').then(mod => {
        //概要模块
        $ocLazyLoad.load(mod.MAIN_MODULE);
      })

    }
  }]
}