/**
 * Created by MingXianJun on 2020/1/5
 * 可视化渲染函数入口
 */

import { select } from 'd3';

export default class RenderBot {
  constructor($el, type, params) {
    this.$el = $el;
    // this.Bot = getBot(type);
    this.params = params;
  }

  render(data) {
    this.clear();
    this.renderCanvas();
  }

  renderCanvas() {
    let wrapBox = select(this.$el);
    let width = +wrapBox.attr('width');
    let height = +wrapBox.attr('height');
    console.log(width,height);
    wrapBox.append('svg')
      .attr(width, width)
      .attr(height, height);
    console.log(this.element)
  }

  clear() {
    // select(this.$el).select('svg') && select(this.$el).select('svg').remove();
  }

  update(params) {
    this.params = params;
    this.render();
  }
}