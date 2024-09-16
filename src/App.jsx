
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { useState } from 'react'
import { Button } from './components/ui/button'
import { createAccordionScope } from '@radix-ui/react-accordion'
import Landingpage from './pages/landing'
import AppLayout from './layout/App-layout'
import Onboarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import PostJob from './pages/post-job';
import MyJobs from './pages/my-jobs';
import SavedJobs from './pages/saved-job';
import JobPage from './pages/job';
import { ThemeProvider } from './components/theme-provider';
import ProtectedRoute from './components/protected-routes';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);



function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <RouterProvider router={router}/>
    </ThemeProvider>
    
    
  )
}

export default App
