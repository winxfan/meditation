import { lazy } from 'react';

const MainPage = lazy(() => import('./Main'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const AuthPage = lazy(() => import('./Auth'));

const TwelveSteps = lazy(() => import('./TwelveSteps'));

const Lesson = lazy(() => import('./Lesson'));

const CatalogTraining = lazy(() => import('./CatalogTraining'));

const CatalogTrainingSingle = lazy(() => import('./CatalogTrainingSingle'));

export {
	MainPage,
	NotFoundPage,
	AuthPage,
	TwelveSteps,
	Lesson,
	CatalogTraining,
	CatalogTrainingSingle,
}

