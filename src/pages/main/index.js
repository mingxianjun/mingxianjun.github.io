/**
 * Created by MingXianJun on 2019/9/3
 * 应用主页
 */
import './components/main.component'
export default {
  routers: [{
    title: '我的主页',
    name: 'main',
    url: '/main',
    component: 'main',
    lazyLoad: function ($transition$) {
      //样式
      // import(/* webpackChunkName:"main.styl"*/'./components/main.styl');

      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName:"main.module"*/'./module').then(mod => {
        //首页模块
        $ocLazyLoad.load(mod.MAIN_MODULE);
      })

    }
  }]
}