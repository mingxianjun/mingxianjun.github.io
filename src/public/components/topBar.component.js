/**
 * Created by MingXianJun on 2019/8/29
 * 导航栏组件
 */

import {menuList} from '@/config';

export default {
  name: 'header',
  options: {
    bindings: {
      router: '<'
    },
    template: `<a ui-sref="home" class="logo light-text"><i class="iconfont icon-tool-box"></i></a>
               <a ng-repeat="menu in $ctrl.menuList" class="item" ng-class="{active:menu.url === $ctrl.router.url}" ui-sref="{{menu.url}}">
                  <i class="{{menu.icon}}"></i><span class="label">{{menu.name}}</span>
               </a>`,
    controller() {
      this.menuList = menuList;
    }
  }

}