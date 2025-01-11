import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3a9'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'cb4'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'fcb'),
            routes: [
              {
                path: '/docs/API Essentials/crud-operations',
                component: ComponentCreator('/docs/API Essentials/crud-operations', '389'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API Essentials/Web APIs/http-methods',
                component: ComponentCreator('/docs/API Essentials/Web APIs/http-methods', '9fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API Essentials/Web APIs/http-status-codes',
                component: ComponentCreator('/docs/API Essentials/Web APIs/http-status-codes', 'b54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API Essentials/Web APIs/web-apis',
                component: ComponentCreator('/docs/API Essentials/Web APIs/web-apis', '86e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API Essentials/what-is-an-api',
                component: ComponentCreator('/docs/API Essentials/what-is-an-api', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/api-essentials',
                component: ComponentCreator('/docs/category/api-essentials', '9ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
