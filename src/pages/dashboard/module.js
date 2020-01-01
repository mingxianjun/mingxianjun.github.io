/**
 * Created by MingXianJun on 2019/1/1
 * 仪表板模块
 */

export const DASHBOARD_MODULE = angular.module('dashboardModule', []);

import dashboardComponent from './components/dashboard.component';

DASHBOARD_MODULE.component(dashboardComponent.name, dashboardComponent.options);
