import { lazy } from 'react';

const MainPage = lazy(() => import('./Main'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const AuthPage = lazy(() => import('./Auth'));


export {
	MainPage,
	NotFoundPage,
	AuthPage,
}

