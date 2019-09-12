/**
 * Created by MingXianJun on 2019/9/2
 * 首页模块
 */
export const HOME_MODULE = angular.module('homeModel',[]);

import homeComponent from './home.component';
import cloudComponent from './cloud.component';

HOME_MODULE.component(homeComponent.name,homeComponent.options);
HOME_MODULE.component(cloudComponent.name,cloudComponent.options);