import { lazy } from "react";

const MainPage = lazy(() => import("./Main"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

const AuthPage = lazy(() => import("./Auth"));

const TwelveSteps = lazy(() => import("./TwelveSteps"));

const Lesson = lazy(() => import("./Lesson"));
const PageBot = lazy(() => import("./PageBot"));
const PageBase = lazy(() => import("./PageBase"));
const PagePracties = lazy(() => import("./PagePracties"));
const PageSergay = lazy(() => import("./PageSergay"));

const CatalogTraining = lazy(() => import("./CatalogTraining"));

const CatalogTrainingSingle = lazy(() => import("./CatalogTrainingSingle"));

const Energy365 = lazy(() => import("./Energy365"));

const Energy365Single = lazy(() => import("./Energy365Single"));

const twelveMeet = lazy(() => import("./twelveMeet"));
const Community = lazy(() => import("./Community"));

const Referal = lazy(() => import("./Referal"));

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
  CatalogTraining,
  CatalogTrainingSingle,
  Energy365,
  Energy365Single,
  twelveMeet,
  Referal,
	Community,
};
