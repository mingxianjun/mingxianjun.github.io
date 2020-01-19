/**
 * Created by MingXianJun on 2019/1/1
 * 关于页面模块
 */

export const ABOUT_MODULE = angular.module('aboutModule', []);

import aboutComponent from './components/about.component';

ABOUT_MODULE.component(aboutComponent.name, aboutComponent.options);
