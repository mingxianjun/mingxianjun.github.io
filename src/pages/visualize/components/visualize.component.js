/**
 * Created by MingXianJun on 2020/1/1
 * 可视化首页组件
 */

import { getPageTemplate } from "@/util";
import html from './visualize.html';
import visTypeList from '@/public/visualize/types';

export default {
  name: 'visualizePage',
  options: {
    template: getPageTemplate(html),
    controller($state) {
      this.visTypeList = visTypeList;
      this.show = $state.current.name == 'visualize';
      this.createVis = (type) => {
        this.show = false;
        $state.go('visualize.create', { type });
      }
    }
  }
}