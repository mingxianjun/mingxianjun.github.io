/**
 * Created by MingXianJun on 2019/11/8
 * 视图配置模块
 */

export const DASHBOARD_MODULE = angular.module('dashboardModule',[]);

import dashboardComponent from './components/dashboard.component';

DASHBOARD_MODULE.component(dashboardComponent.name,dashboardComponent.options);