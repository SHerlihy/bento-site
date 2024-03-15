/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const VelmaModeLazyImport = createFileRoute('/velmaMode')()
const SherlihyDotComLazyImport = createFileRoute('/sherlihyDotCom')()
const ResumeGraderLazyImport = createFileRoute('/resumeGrader')()
const I2GroupLazyImport = createFileRoute('/i2Group')()
const AuthServiceLazyImport = createFileRoute('/authService')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const VelmaModeLazyRoute = VelmaModeLazyImport.update({
  path: '/velmaMode',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/velmaMode.lazy').then((d) => d.Route))

const SherlihyDotComLazyRoute = SherlihyDotComLazyImport.update({
  path: '/sherlihyDotCom',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/sherlihyDotCom.lazy').then((d) => d.Route),
)

const ResumeGraderLazyRoute = ResumeGraderLazyImport.update({
  path: '/resumeGrader',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/resumeGrader.lazy').then((d) => d.Route))

const I2GroupLazyRoute = I2GroupLazyImport.update({
  path: '/i2Group',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/i2Group.lazy').then((d) => d.Route))

const AuthServiceLazyRoute = AuthServiceLazyImport.update({
  path: '/authService',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/authService.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/authService': {
      preLoaderRoute: typeof AuthServiceLazyImport
      parentRoute: typeof rootRoute
    }
    '/i2Group': {
      preLoaderRoute: typeof I2GroupLazyImport
      parentRoute: typeof rootRoute
    }
    '/resumeGrader': {
      preLoaderRoute: typeof ResumeGraderLazyImport
      parentRoute: typeof rootRoute
    }
    '/sherlihyDotCom': {
      preLoaderRoute: typeof SherlihyDotComLazyImport
      parentRoute: typeof rootRoute
    }
    '/velmaMode': {
      preLoaderRoute: typeof VelmaModeLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AuthServiceLazyRoute,
  I2GroupLazyRoute,
  ResumeGraderLazyRoute,
  SherlihyDotComLazyRoute,
  VelmaModeLazyRoute,
])

/* prettier-ignore-end */
