/**
 * Created by MingXianJun on 2019/9/3
 * 概要组件
 */
import {getPageTemplate} from "../../../util";
import html from './main.html';

export default {
  name: 'main',
  options: {
    template: getPageTemplate(html),
    controller(){
    }
  }
}