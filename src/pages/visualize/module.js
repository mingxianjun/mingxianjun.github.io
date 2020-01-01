/**
 * Created by MingXianJun on 2019/1/1
 * 可视化模块
 */

export const VISUALIZE_MODULE = angular.module('visualizeModule', []);

import visualizeComponent from './components/visualize.component';

VISUALIZE_MODULE.component(visualizeComponent.name, visualizeComponent.options);
