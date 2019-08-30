/**
 * Created by MingXianJun on 2019/8/29
 * 根组件
 */
import (/* webpackChunkName:"app.styl"*/'../assets/styles/common/index.styl');

export default {
  name: 'appRoot',
  factory() {
    return {
      template: '<header></header><div class="app"><ui-view/></div>'
    }
  }

}