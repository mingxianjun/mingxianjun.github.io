/**
 * Created by MingXianJun on 2019/8/27
 * 程序入口文件
 */

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ocLazyLoad from 'oclazyload';
import pages from './pages';
import publicModules from './public';


class App {
  constructor() {
    this.depends = [uiRouter, ocLazyLoad, publicModules];
    this.appName = 'app';
  }

  /**
   * 创建app模块对象
   * */
  createApp() {
    this.app = window.app = angular.module(this.appName, this.depends);
  }

  /**
   * app模块配置
   * */
  configApp() {
    this.configRouter();
    this.routerChange();
  }

  /**
   * 配置路由
   * */
  configRouter() {
    this.app.config(['$stateProvider', '$uiRouterProvider', function ($stateProvider, $uiRouterProvider) {

      //默认路由
      $uiRouterProvider.urlService.rules.otherwise('home');

      pages.forEach(page => {
        //路由注册
        page.routers.forEach(state => $stateProvider.state(state));
      });

    }]);
  }

  /**
   * 页面切换
   * */
  routerChange() {
    this.app.run(['$rootScope', '$state', function ($rootScope, $state) {

      $rootScope.pageLoading = true;
      $rootScope.$on('$viewContentLoading', function () {
        $rootScope.pageLoading = true;
        $rootScope.currentPage = {
          title: $state.current.title,
          url: $state.current.name
        }
      });

      $rootScope.$on('$viewContentLoaded', function () {
        if (!$rootScope.currentPage.title) return;
        $rootScope.pageLoading = false;
      });

    }]);
  }

  run() {
    this.createApp();
    this.configApp();
    angular.bootstrap(document, [this.appName]);
  }
}

new App().run();