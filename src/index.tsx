import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/main.css'
import { App } from './layout/App'
import * as pages from './pages'
import './utils/i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
	{
		path: '',
		element: <App />,
		children: [
			{
				path: '/',
				element: <pages.MainPage />,
			},
			{
				path: '/bot',
				element: <pages.PageBot />,
			},
			{
				path: '/base',
				element: <pages.PageBase />,
			},
			{
				path: '/practies',
				element: <pages.PagePracties />,
			},
			{
				path: '/sergay',
				element: <pages.PageSergay />,
			},
			{
				path: '/course/:courseId',
				element: <pages.MainPage />,
			},
			{
				path: 'auth/:token?',
				element: <pages.AuthPage />,
			},
			{
				path: '*',
				element: <pages.NotFoundPage />,
			},
		],
	},
])

root.render(<RouterProvider router={router} />)
