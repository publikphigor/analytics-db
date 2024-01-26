import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import paths from '@constants/paths';
import { LazyExoticComponent, Suspense, lazy } from 'react';
import NotFound from '@pages/NotFound';
import ErrorPage from '@components/global/ErrorPage';
import DashboardLayout from '@components/global/DashboardLayout';
import { ThemeProvider } from '@contexts/ThemeProvider';

interface LazyRoute {
  path: string;
  component: LazyExoticComponent<React.FC>;
}

// Lazy routes
const lazyRoutes: LazyRoute[] = [
  {
    path: '/',
    component: lazy(() => import('@pages/Dashboard')),
  },
  {
    path: paths.dashboard,
    component: lazy(() => import('@pages/Dashboard')),
  },
  {
    path: paths.discounts,
    component: lazy(() => import('@pages/Discounts')),
  },
  {
    path: paths.information,
    component: lazy(() => import('@pages/Information')),
  },
  {
    path: paths.analytics,
    component: lazy(() => import('@pages/Analytics')),
  },
  {
    path: paths.users,
    component: lazy(() => import('@pages/Users')),
  },
  {
    path: paths.manage,
    component: lazy(() => import('@pages/Manage')),
  },
];

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<ErrorPage />}>
        <Route path="/" element={<DashboardLayout />}>
          {lazyRoutes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<p className="text-sm">Loading...</p>}>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Route>
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to={paths.notFound} replace />} />
      </Route>
    )
  );
  return (
    <ThemeProvider>
      <div className="min-h-[100svh] bg-[#FAFAFA] font-jakarta text-main dark:bg-dark-bg dark:text-white-text">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
};

export default App;
