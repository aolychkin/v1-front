import { lazy } from "react";
import { componentLoader } from "./component-loader";

export const LazyPages = Object.freeze({
  PageNotFound: lazy(() => {
    const component = () =>
    /* webpackChunkName: "sign-up-success-page" */ import('pages/not-found'
    ).then((module) => ({ default: module.PageNotFound }));
    return componentLoader(component, 3, true);
  }),
  PageModuleActions: lazy(() => {
    const component = () =>
    /* webpackChunkName: "sign-up-success-page" */ import('pages/module-actions'
    ).then((module) => ({ default: module.PageModuleActions }));
    return componentLoader(component, 3, true);
  }),
});