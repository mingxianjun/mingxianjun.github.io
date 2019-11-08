/**
 * Created by MingXianJun on 2019/9/3
 * 概要模块
 */

export const MAIN_MODULE = angular.module('mainModule',[]);

import mainComponent from './components/main.component';

MAIN_MODULE.component(mainComponent.name,mainComponent.options);