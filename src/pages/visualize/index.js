/**
 * Created by MingXianJun on 2020/1/1
 * 可视化入口
 */
import createRoute from './create';

export default {
  routers: [{
    title: '可视化',
    name: 'visualize',
    url: '/visualize',
    component: 'visualizePage',
    lazyLoad: function ($transition$) {
      //样式
      import(/* webpackChunkName:"visualize.styl"*/'./components/visualize.styl');
      // ng 模块
      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName:"visualize.module"*/'./module').then(mod => {
        $ocLazyLoad.load(mod.VISUALIZE_MODULE);
      })
    }
  }, createRoute]
}