/**
 * Created by MingXianJun on 2019/11/8
 * 配置视图组件
 */

import {getPageTemplate} from "@/util";
import html from './dashboard.html';

export default {
  name: 'dashboard',
  options: {
    template: getPageTemplate(html)
  }
}