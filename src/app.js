/**
 * Created by MingXianJun on 2019/8/27
 * 程序入口文件
 */

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import oclazyload from 'oclazyload';
import pages from './pages';
import commonComponents from './common';


class App {
  constructor() {
    this.depends = [uiRouter, oclazyload];
    this.appName = 'app';
  }

  createApp() {
    this.app = window.app = angular.module(this.appName, this.depends);
    //注册公共组件
    commonComponents.forEach(component => {
      this.app.component(component.name, component.factory());
    });
  }

  configRouter() {
    this.app.config(['$stateProvider', '$uiRouterProvider', function ($stateProvider, $uiRouterProvider) {

      //默认路由
      $uiRouterProvider.urlService.rules.otherwise('home');

      pages.forEach(page => {
        //路由注册
        page.routers.forEach(state => $stateProvider.state(state))
      });

    }]);

    //路由切换
    this.app.run(['$rootScope', '$state','$timeout', function ($rootScope, $state,$timeout) {

      $rootScope.pageLoading = true;
      $rootScope.$on('$viewContentLoading', function () {
        $rootScope.pageLoading = true;
        $rootScope.currentPage = {
          title: $state.current.title,
          url: $state.current.url
        }
      });

      $rootScope.$on('$viewContentLoaded', function () {
        $timeout(function(){$rootScope.pageLoading = false;},800);
      });

    }]);

  }

  run() {
    this.createApp();
    this.configRouter();
    angular.bootstrap(document, [this.appName]);
  }
}

new App().run();