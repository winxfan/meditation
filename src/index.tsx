import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./layout/App";
import './utils/i18n'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import * as pages from './pages';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: "",
		element: <App/>,
		children: [
			{
				path: "/:courseId?",
				element: <pages.MainPage/>,
			},
			{
				path: "/:courseId?/base70Practics",
				element: <pages.Base70Practics/>,
			},
			{
				path: "auth/:token?",
				element: <pages.AuthPage/>,
			},
			{
				path: "*",
				element: <pages.NotFoundPage/>
			}
		]
	},
]);

root.render(
	<RouterProvider router={router} />
)
