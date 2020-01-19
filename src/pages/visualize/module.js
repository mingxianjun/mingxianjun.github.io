/**
 * Created by MingXianJun on 2019/1/1
 * 可视化模块
 */

export const VISUALIZE_MODULE = angular.module('visualizeModule', []);

import visualizeComponent from './components/visualize.component';
import visualizeCreateComponent from './create/components/create.component';

VISUALIZE_MODULE.component(visualizeComponent.name, visualizeComponent.options);
VISUALIZE_MODULE.component(visualizeCreateComponent.name, visualizeCreateComponent.options);

