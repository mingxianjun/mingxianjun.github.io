/**
 * Created by MingXianJun on 2019/8/29
 * 根组件
 */
import (/* webpackChunkName:"app.styl"*/'../../assets/styles/index.styl');

export default {
  name: 'appRoot',
  options: {
    template: `<header class="ng-hide" ng-show="$ctrl.router.url !== 'home'" router="$ctrl.router"></header><ui-view class="app-content"/>`,
    controller: ['$rootScope', function ($rootScope) {
      /*this.$postLink = function () {
        console.log('in postLink');
      };
      this.$onInit = function () {
        console.log('in onInit');
      };*/
      this.$doCheck = () => {
        this.router = $rootScope.currentPage;
      }
    }]
  }

}