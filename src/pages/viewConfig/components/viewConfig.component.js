/**
 * Created by MingXianJun on 2019/11/10
 * 视图配置组件
 */

import {getPageTemplate} from "../../../util";
import html from './viewConfig.html';

export default {
  name: 'viewConfig',
  options: {
    template: getPageTemplate(html)
  }
}