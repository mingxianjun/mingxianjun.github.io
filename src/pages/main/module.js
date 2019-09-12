/**
 * Created by MingXianJun on 2019/9/3
 * 应用主页模块
 */

export const MAIN_MODULE = angular.module('main',[]);

import mainComponent from './components/main.component';

MAIN_MODULE.component(mainComponent.name,mainComponent.options);