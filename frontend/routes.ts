import { Route } from '@vaadin/router';
import './views/main-layout';
import './views/wordonline/word-online-view';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    component: 'word-online-view',
    icon: '',
    title: '',
  },
  {
    path: 'Word-',
    component: 'word-online-view',
    icon: 'la la-flask',
    title: 'Word Online',
  },
  {
    path: 'about',
    component: 'about-view',
    icon: 'la la-file',
    title: 'About',
    action: async (_context, _command) => {
      await import('./views/about/about-view');
      return;
    },
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [...views],
  },
];
