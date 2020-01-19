/**
 * Created by MingXianJun on 2020/1/3
 * 仪表板组件
 */

import {getPageTemplate} from "@/util";
import html from './dashboard.html';

export default {
  name: 'dashboard',
  options: {
    template: getPageTemplate(html)
  }
}