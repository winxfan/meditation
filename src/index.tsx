import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./layout/App";
import "./utils/i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as pages from "./pages";
import {PracticeSingle} from "./pages/PracticeSingle/PracticeSingle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/?",
        element: <pages.MainPage />,
      },
      {
        path: "/twelveSteps/:id",
        element: <pages.TwelveSteps />,
      },
      {
        path: "/lesson/:id",
        element: <pages.Lesson />,
      },
      {
        path: "/bot",
        element: <pages.PageBot />,
      },
      {
        path: "/base",
        element: <pages.PageBase />,
      },
      {
        path: "/practices",
        element: <pages.PagePracties />,
      },
      {
        path: "/practices/:id",
        element: <pages.Practices />,
      },
      {
        path: "/practices/:id/:practiceId",
        element: <pages.PracticeSingle />,
      },
      {
        path: "/sergey",
        element: <pages.PageSergay />,
      },
      {
        path: "auth/:token?",
        element: <pages.AuthPage />,
      },
      {
        path: "/catalogtraining",
        element: <pages.CatalogTraining />,
      },
      {
        path: "/catalogtraining/:id",
        element: <pages.CatalogTrainingSingle />,
      },
      {
        path: "/energy365",
        element: <pages.Energy365 />,
      },
	    {
		    path: "/community",
		    element: <pages.Community />,
	    },
      {
        path: "/energy365/:id",
        element: <pages.Energy365Single />,
      },
      {
        path: "/twelvemeet",
        element: <pages.twelveMeet />,
      },
      {
        path: "/referal",
        element: <pages.Referal />,
      },
      {
        path: "*",
        element: <pages.NotFoundPage />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
