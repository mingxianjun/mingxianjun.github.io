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
      //样式
      import(/* webpackChunkName:"home.styl"*/'./components/home.styl');

      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName:"home.module"*/'./components/home.module').then(mod => {
        //首页模块
        $ocLazyLoad.load(mod.HOME_MODULE);
        //第三方js库
        return $ocLazyLoad.load('static/libs/ThreeWebGL.js');
      }).then(()=>{
        //第三方js库 依赖ThreeWebGL.js
        return $ocLazyLoad.load('static/libs/ThreeExtras.js');
      });

    }
  }]
}

