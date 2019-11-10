/**
 * Created by MingXianJun on 2019/11/8
 * 视图配置模块
 */

export const VIEW_CONFIG_MODULE = angular.module('dashboardModule',[]);

import viewConfigComponent from './components/viewConfig.component';
import {components as dashboardComponents} from './dashboard';

VIEW_CONFIG_MODULE.component(viewConfigComponent.name,viewConfigComponent.options);

dashboardComponents.forEach(component => {
  VIEW_CONFIG_MODULE.component(component.name,component.options);
});