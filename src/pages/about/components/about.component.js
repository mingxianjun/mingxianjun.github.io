/**
 * Created by MingXianJun on 2020/1/5
 * 关于组件
 */

import {getPageTemplate} from "@/util";
import html from './about.html';

export default {
  name: 'about',
  options: {
    template: getPageTemplate(html)
  }
}