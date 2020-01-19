/**
 * Created by MingXianJun on 2019/11/9
 * 可视化class
 */
import RenderBot from './renderBot';

export default class Visualize {
  constructor($el, type, params = {}) {
    this.renderBot = new RenderBot($el, type, params);
  }

  /**
  * 渲染 
  **/
  render(data) {
    if (this.renderBot && this.renderBot.render) this.renderBot.render(data);
    else throw Error('没有定义渲染方法');
  }

  /**
  * 更新参数 
  **/
  updateParams(params) {
    this.renderBot.update(params);
  }
}