import { lazy } from "react";

const MainPage = lazy(() => import("./Main"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

const AuthPage = lazy(() => import("./Auth"));

const TwelveSteps = lazy(() => import("./TwelveSteps"));

const Lesson = lazy(() => import("./Lesson"));

const CatalogTraining = lazy(() => import("./CatalogTraining"));

const CatalogTrainingSingle = lazy(() => import("./CatalogTrainingSingle"));

const Energy365 = lazy(() => import("./Energy365"));

export {
  MainPage,
  NotFoundPage,
  AuthPage,
  TwelveSteps,
  Lesson,
  CatalogTraining,
  CatalogTrainingSingle,
  Energy365,
};
