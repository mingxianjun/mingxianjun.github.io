/**
 * Created by MingXianJun on 2019/11/8
 * 视图配置页面入口
 */
import { router as dashboardRouter } from './dashboard';

export default {
  routers: [{
    title: '视图配置',
    name: 'viewConfig',
    url: '/viewConfig',
    component: 'viewConfig',
    lazyLoad: function ($transition$) {
      //样式
      import(/* webpackChunkName:"dashboard.styl"*/'./dashboard/components/dashboard.styl');
 
      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName:"viewConfig.module"*/'./module').then(mod => {
        $ocLazyLoad.load(mod.VIEW_CONFIG_MODULE);
      })

    }
  }, dashboardRouter]
}