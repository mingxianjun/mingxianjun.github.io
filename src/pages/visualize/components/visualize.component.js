/**
 * Created by MingXianJun on 2020/1/1
 * 新建视图项组件
 */

import {getPageTemplate} from "@/util";
import html from './visualize.html';

export default {
  name: 'visualize',
  options: {
    template: getPageTemplate(html)
  }
}