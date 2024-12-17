import { lazy } from 'react';

const MainPage = lazy(() => import('./Main'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const AuthPage = lazy(() => import('./Auth'));
const Base70Practics = lazy(() => import('./Base70Practics'));


export {
	MainPage,
	NotFoundPage,
	AuthPage,
	Base70Practics,
}

