/**
 * Created by MingXianJun on 2019/9/19
 * 返回页面模块的template，主要是为了增加统一的class
 */

export default function getPageTemplate(html) {
  return ['$element',function ($element) {
    $element.addClass('page-content');
    return html;
  }]
}