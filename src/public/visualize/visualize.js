/**
 * Created by MingXianJun on 2019/11/9
 * 可视化class
 */

export default class Visualize {
  constructor($el, type, params) {
    this.type = type;
    this.aggs = aggs;
    this.params = params;
    this.renderBot = renderBot;
  }

  /**
  * 渲染 
  **/
  render(data) {
    if (this.renderBot && this.renderBot.render) this.renderBot.render(data);
    else throw Error('没有定义渲染方法');
  }
}