import { lazy } from 'react';

const MainPage = lazy(() => import('./Main'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const AuthPage = lazy(() => import('./Auth'));

const TwelveSteps = lazy(() => import('./TwelveSteps'));

const Lesson = lazy(() => import('./Lesson'));
const PageBot = lazy(() => import('./PageBot'));
const PageBase = lazy(() => import('./PageBase'));
const PagePracties = lazy(() => import('./PagePracties'));
const PageSergay = lazy(() => import('./PageSergay'));

export {
	MainPage,
	NotFoundPage,
	AuthPage,
	TwelveSteps,
	Lesson,
	PageBot,
	PageBase,
	PagePracties,
	PageSergay,
}

