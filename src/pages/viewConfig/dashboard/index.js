/**
 * Created by MingXianJun on 2019/11/8
 * 二级页面仪表板入口
 */
import dashboardComponent from './components/dashboard.component';
 
const router = {
    title: '仪表板',
    name: 'viewConfig.dashboard',
    url: '/dashboard',
    component: 'dashboard'
}

const components = [dashboardComponent];

export {
  router,
  components
}