/**
 * Created by MingXianJun on 2019/11/8
 * 视图配置组件
 */

import {getPageTemplate} from "../../../util";
import html from './dashboard.html';

export default {
  name: 'dashboard',
  options: {
    template: getPageTemplate(html)
  }
}