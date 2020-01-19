/**
 * Created by MingXianJun on 2020/1/5
 * 新建可视化组件
 */

import html from './create.html';
import { getPageTemplate } from "@/util";
import visTypeList from '@/public/visualize/types';
import Vis from '@/public/visualize/visualize';

export default {
  name: 'visualizeCreate',
  options: {
    template: getPageTemplate(html),
    controller($stateParams) {
      this.type = $stateParams.type;
      this.visType = visTypeList.find(i => i.key === this.type);
      requestAnimationFrame(()=>{
        this.vis = new Vis('#canvasBox',this.type);
        this.vis.render();
      })
      
    }
  }
}