import { lazy } from 'react'

const MainPage = lazy(() => import('./Main'))
const PageBase = lazy(() => import('./PageBase'))
const PageBot = lazy(() => import('./PageBot'))
const PagePracties = lazy(() => import('./PagePracties'))
const PageSergay = lazy(() => import('./PageSergay'))
const NotFoundPage = lazy(() => import('./NotFoundPage'))
const AuthPage = lazy(() => import('./Auth'))
const TwelveSteps = lazy(() => import('./TwelveSteps'))
const Lesson = lazy(() => import('./Lesson'))

export {
	AuthPage,
	MainPage,
	NotFoundPage,
	PageBase,
	PageBot,
	PagePracties,
	PageSergay,
	TwelveSteps,
	Lesson,
}
