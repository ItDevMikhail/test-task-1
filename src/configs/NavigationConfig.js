import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  BookOutlined,
  FileUnknownOutlined,
  ProfileOutlined,
  AppstoreOutlined,
  BulbOutlined,
  CalendarOutlined,
  MessageOutlined,
  MailOutlined

} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'apps-ecommerce',
      path: `${APP_PREFIX_PATH}/ecommerce`,
      title: 'sidenav.apps.ecommerce',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: `${APP_PREFIX_PATH}/ecommerce/product-list`,
          title: 'sidenav.apps.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    }, {
      key: 'apps-ecommerce-orders',
      path: `${APP_PREFIX_PATH}/ecommerce/orders`,
      title: 'sidenav.apps.ecommerce.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'apps-clients',
      path: `${APP_PREFIX_PATH}/clients`,
      title: 'sidenav.apps.clients',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-clients-clientList',
          path: `${APP_PREFIX_PATH}/clients/client-list`,
          title: 'sidenav.apps.clients.clientList',
          icon: '',
          breadcrumb: false,
          submenu: []
        }, {
          key: 'apps-clients-clientGroups',
          path: `${APP_PREFIX_PATH}/clients/client-groups`,
          title: 'sidenav.apps.clients.clientGroups',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    }
  ]
}]

const appsNavTree = [{
  key: 'apps',
  path: `${APP_PREFIX_PATH}/apps`,
  title: 'sidenav.apps',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'apps-mail',
      path: `${APP_PREFIX_PATH}/apps/mail/inbox`,
      title: 'sidenav.apps.mail',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'apps-chat',
      path: `${APP_PREFIX_PATH}/apps/chat`,
      title: 'sidenav.apps.chat',
      icon: MessageOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'apps-calendar',
      path: `${APP_PREFIX_PATH}/apps/calendar`,
      title: 'sidenav.apps.calendar',
      icon: CalendarOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'apps-project',
      path: `${APP_PREFIX_PATH}/apps/project`,
      title: 'sidenav.apps.project',
      icon: BulbOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-project-list',
          path: `${APP_PREFIX_PATH}/apps/project/list`,
          title: 'sidenav.apps.project.list',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `${APP_PREFIX_PATH}/apps/project/scrumboard`,
          title: 'sidenav.apps.project.scrumboard',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    }
  ]
}]

const docsNavTree = [{
  key: 'docs',
  path: `${APP_PREFIX_PATH}/docs`,
  title: 'sidenav.docs',
  icon: BookOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'docs-documentation',
      path: `${APP_PREFIX_PATH}/docs/documentation`,
      title: 'sidenav.docs.documentation',
      icon: FileUnknownOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'docs-changelog',
      path: `${APP_PREFIX_PATH}/docs/documentation/changelog`,
      title: 'sidenav.docs.changelog',
      icon: ProfileOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...appsNavTree,
  ...docsNavTree
]

export default navigationConfig;
