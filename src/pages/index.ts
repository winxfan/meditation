import { lazy } from 'react';

const MainPage = lazy(() => import('./Main'));
const PageBase = lazy(() => import('./PageBase'));
const PageBot = lazy(() => import('./PageBot'));
const PagePracties = lazy(() => import('./PagePracties'));
const PageSergay = lazy(() => import('./PageSergay'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));
const AuthPage = lazy(() => import('./Auth'));

export { MainPage, PageBase, PageBot, PagePracties, PageSergay, NotFoundPage, AuthPage };
