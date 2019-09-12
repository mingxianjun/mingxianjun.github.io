/**
 * Created by MingXianJun on 2019/9/12
 * 公共模块
 */

import components from './components';

const publicModule = angular.module('public',[]);

//组件注册
components.forEach(component => {
  publicModule.component(component.name, component.options);
});


export default publicModule.name;